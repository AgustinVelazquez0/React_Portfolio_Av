## Portfolio API (Express + MongoDB Atlas)

This backend powers a real full‑stack feature for the portfolio: **Contact messages stored in MongoDB Atlas**.

### Endpoints

- **GET** `/api/health`
- **POST** `/api/contact`
  - Body:
    - `name` (optional)
    - `email` (optional)
    - `message` (required)
    - `companyWebsite` (honeypot, optional)
- **GET** `/api/guestbook?limit=20`
- **POST** `/api/guestbook`
  - Body:
    - `name` (optional)
    - `message` (required)
    - `companyWebsite` (honeypot, optional)

### Local setup

1. Install deps:

```bash
cd server
npm i
```

2. Create `.env` from `env.example`:

```bash
cp env.example .env
```

3. Run:

```bash
npm run dev
```

Backend will run on `http://localhost:5050`.

### Frontend integration

- In dev, Vite proxies `/api/*` to `http://localhost:5050` (see `vite.config.js`).
- In prod, set `VITE_API_BASE_URL` to your deployed API origin (or host API under the same domain).

### MongoDB Atlas

Use a standard Atlas SRV connection string:

`mongodb+srv://USER:PASSWORD@cluster0.xxxxx.mongodb.net/portfolio?retryWrites=true&w=majority`

### Security notes

- Includes a small **honeypot** field to reduce spam.
- Includes a basic in-memory **rate limit** per IP (good enough for a portfolio; for production scale use a proper store).

### Production checklist

- Deploy the API (Render/Railway/Fly/etc).
- Set server env vars:
  - `MONGODB_URI`
  - `CORS_ORIGINS` (your frontend domain, e.g. `https://react-portfolio-av.vercel.app`)
- Set frontend env var:
  - `VITE_API_BASE_URL=https://your-api-domain.com`

