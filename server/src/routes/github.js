/**
 * Express route — GET /api/github-contributions?username=USER
 *
 * Igual que la serverless function en /api/github-contributions.js
 * (mismo response shape). Usa GraphQL API de GitHub con env GITHUB_TOKEN.
 *
 * Scopes recomendados del PAT:
 *   - read:user  → contribuciones, perfil, restricted (privados) anonimizado
 *   - read:org   → organizaciones (incluye orgs privadas como Mental)
 */

import { Router } from "express";

const router = Router();

const GH_GRAPHQL = "https://api.github.com/graphql";

const QUERY = `
  query($username: String!, $from: DateTime, $to: DateTime, $includeRepos: Boolean!) {
    user(login: $username) {
      contributionsCollection(from: $from, to: $to) {
        totalCommitContributions
        totalIssueContributions
        totalPullRequestContributions
        totalPullRequestReviewContributions
        totalRepositoriesWithContributedCommits
        restrictedContributionsCount
        contributionCalendar {
          totalContributions
          weeks {
            contributionDays {
              contributionCount
              date
            }
          }
        }
        commitContributionsByRepository(maxRepositories: 5) {
          contributions(first: 1) {
            totalCount
          }
          repository {
            nameWithOwner
            isPrivate
            stargazerCount
            url
          }
        }
      }
      organizations(first: 10) @include(if: $includeRepos) {
        nodes {
          login
          name
          avatarUrl
          url
          websiteUrl
        }
      }
      repositories(
        first: 100
        isFork: false
        ownerAffiliations: [OWNER]
        orderBy: { field: PUSHED_AT, direction: DESC }
      ) @include(if: $includeRepos) {
        totalCount
        nodes {
          name
          stargazerCount
          languages(first: 10, orderBy: { field: SIZE, direction: DESC }) {
            edges {
              size
              node {
                name
                color
              }
            }
            totalSize
          }
        }
      }
    }
  }
`;

function levelFromCount(count) {
  if (count === 0) return 0;
  if (count < 3) return 1;
  if (count < 6) return 2;
  if (count < 10) return 3;
  return 4;
}

async function fetchYear(token, username, from, to, includeRepos = false) {
  const res = await fetch(GH_GRAPHQL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      Accept: "application/vnd.github+json",
    },
    body: JSON.stringify({
      query: QUERY,
      variables: { username, from, to, includeRepos },
    }),
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`GitHub GraphQL ${res.status}: ${text.slice(0, 200)}`);
  }
  const data = await res.json();
  if (data.errors) {
    throw new Error(
      `GitHub GraphQL errors: ${JSON.stringify(data.errors).slice(0, 200)}`
    );
  }
  return data.data.user;
}

function aggregateLanguages(repos) {
  const byLang = new Map();
  let grandTotal = 0;
  for (const repo of repos || []) {
    for (const edge of repo.languages?.edges || []) {
      const name = edge.node.name;
      const size = edge.size || 0;
      grandTotal += size;
      const existing = byLang.get(name);
      if (existing) {
        existing.size += size;
      } else {
        byLang.set(name, { name, size, color: edge.node.color });
      }
    }
  }
  if (grandTotal === 0) return [];
  return Array.from(byLang.values())
    .map((l) => ({
      ...l,
      percent: +((l.size / grandTotal) * 100).toFixed(1),
    }))
    .sort((a, b) => b.size - a.size);
}

function calcStreaks(contributions) {
  let longest = 0;
  let temp = 0;
  for (const c of contributions) {
    if (c.count > 0) {
      temp++;
      if (temp > longest) longest = temp;
    } else {
      temp = 0;
    }
  }
  let current = 0;
  const today = new Date().toISOString().slice(0, 10);
  let i = contributions.length - 1;
  while (i >= 0 && contributions[i].date > today) i--;
  // Perdonamos hoy si está vacío (alineado a github-readme-stats)
  if (
    i >= 0 &&
    contributions[i].date === today &&
    contributions[i].count === 0
  ) {
    i--;
  }
  while (i >= 0 && contributions[i].count > 0) {
    current++;
    i--;
  }
  return { current, longest };
}

router.get("/github-contributions", async (req, res) => {
  const username = (req.query?.username || "").toString().trim();
  if (!username || !/^[a-zA-Z0-9-]+$/.test(username)) {
    return res.status(400).json({ ok: false, error: "Invalid username" });
  }

  const token = process.env.GITHUB_TOKEN;
  if (!token) {
    return res
      .status(500)
      .json({ ok: false, error: "GITHUB_TOKEN not configured" });
  }

  try {
    const now = new Date();
    const yearsBack = 3;
    const ranges = [];
    for (let i = yearsBack; i >= 0; i--) {
      const to = new Date(Date.UTC(now.getUTCFullYear() - i + 1, 0, 1));
      const from = new Date(Date.UTC(now.getUTCFullYear() - i, 0, 1));
      const realTo = to > now ? now : to;
      ranges.push({ from: from.toISOString(), to: realTo.toISOString() });
    }

    const users = await Promise.all(
      ranges.map((r, idx) =>
        fetchYear(token, username, r.from, r.to, idx === 0)
      )
    );

    const byDate = new Map();
    const totalByYear = {};
    let grandTotal = 0;

    const last = users[users.length - 1].contributionsCollection;
    const stats = {
      commits: last.totalCommitContributions,
      pullRequests: last.totalPullRequestContributions,
      reviews: last.totalPullRequestReviewContributions,
      issues: last.totalIssueContributions,
      reposContributedTo: last.totalRepositoriesWithContributedCommits,
      restrictedContributions: last.restrictedContributionsCount,
      currentStreak: 0,
      longestStreak: 0,
    };

    const topReposMap = new Map();
    for (const u of users) {
      for (const r of u.contributionsCollection
        .commitContributionsByRepository) {
        const key = r.repository.nameWithOwner;
        const existing = topReposMap.get(key);
        const count = r.contributions.totalCount;
        if (!existing) {
          topReposMap.set(key, {
            name: key.split("/")[1],
            fullName: key,
            commits: count,
            isPrivate: r.repository.isPrivate,
            stars: r.repository.stargazerCount,
            url: r.repository.url,
          });
        } else {
          existing.commits += count;
        }
      }
      for (const week of u.contributionsCollection.contributionCalendar
        .weeks) {
        for (const day of week.contributionDays) {
          const existing = byDate.get(day.date);
          const count = Math.max(existing?.count || 0, day.contributionCount);
          byDate.set(day.date, {
            date: day.date,
            count,
            level: levelFromCount(count),
          });
        }
      }
    }

    const contributions = Array.from(byDate.values()).sort((a, b) =>
      a.date < b.date ? -1 : 1
    );

    for (const c of contributions) {
      const year = c.date.slice(0, 4);
      totalByYear[year] = (totalByYear[year] || 0) + c.count;
      grandTotal += c.count;
    }

    const streaks = calcStreaks(contributions);
    stats.currentStreak = streaks.current;
    stats.longestStreak = streaks.longest;

    const topRepos = Array.from(topReposMap.values())
      .sort((a, b) => b.commits - a.commits)
      .slice(0, 5);

    const organizations = (users[0].organizations?.nodes || []).filter(
      Boolean
    );
    const ownedRepos = users[0].repositories?.nodes || [];
    const totalStars = ownedRepos.reduce(
      (acc, r) => acc + (r.stargazerCount || 0),
      0
    );
    const languages = aggregateLanguages(ownedRepos);

    res.set("Cache-Control", "public, max-age=900");
    return res.json({
      ok: true,
      total: { ...totalByYear, all: grandTotal },
      contributions,
      stats: {
        ...stats,
        totalStars,
        publicReposCount: users[0].repositories?.totalCount || 0,
      },
      topRepos,
      organizations,
      languages,
    });
  } catch (err) {
    console.error("[github-contributions]", err);
    return res
      .status(502)
      .json({ ok: false, error: err.message || "Upstream error" });
  }
});

export default router;
