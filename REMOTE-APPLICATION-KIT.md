# Remote Application Kit — Agustin Velazquez

> Todo lo que está en bloques de código va **copiado tal cual** (en inglés).
> Las notas en español son para vos, no se pegan.
>
> Esto es para **empleo remoto full-time**. Para freelance por hora, ver
> `UPWORK-KIT.md` (canal secundario, paga menos).

---

## 0. La regla que decide si te leen

Un reclutador descarta candidatos por dos motivos logísticos antes de mirar si
sabés programar: **no puede contratarte legalmente** y **no se solapa tu horario
con el equipo**.

Vos resolvés las dos, y hasta la semana pasada resolvías solo una. Por eso van
en la primera línea, no en el pie. No es presumir: es sacar del camino la
objeción que te elimina antes de que lean tu stack.

Después de eso, el resto de la carta habla de **su** problema, no de tu carrera.

---

## 1. Plantilla A — empresa de Estados Unidos que contrata en LATAM

> Para avisos de We Work Remotely, Remote OK, Dynamite Jobs, Get on Board,
> Remotive. Máximo 150 palabras. Reemplazá los `[...]`.

```
Hi [name],

I'm a full-stack engineer in Montevideo (GMT-3), which overlaps your entire
business day, and I hold EU and Uruguayan citizenship — so I can be hired
either as a contractor or through an EU entity, whichever is simpler for you.

You're looking for [their actual need, in their words — e.g. "someone to own
subscription billing end to end"]. That's what I do: I've shipped four payment
providers to production (Stripe, MercadoPago, Paddle, RevenueCat), and the
mobile app I develop is live on both the App Store and Google Play, so I've
handled the full release cycle — provisioning, TestFlight, store rejections,
OTA updates.

Two things from your post I'd want to dig into: [specific technical detail #1]
and [specific technical detail #2].

Portfolio with case studies: react-portfolio-av.vercel.app

Agustin
```

**Por qué funciona:** la primera línea mata las dos objeciones logísticas. La
segunda demuestra que leíste el aviso. La tercera es evidencia con números, no
adjetivos. La cuarta prueba criterio técnico.

---

## 2. Plantilla B — empresa europea

> Para landing.jobs, go-onwards, arbeitnow, nextleveljobs.eu, eurotoptech.
> Acá la ciudadanía **es** el titular: la mitad de su proceso de selección
> consiste en descartar gente que necesita patrocinio.

```
Hi [name],

I'm a Spanish citizen (EU passport) and a full-stack engineer — no visa
sponsorship, no Blue Card threshold, no relocation paperwork on your side. I'm
currently based in Montevideo and available to work remotely or to relocate
within the EU.

On [company]'s [specific role or team]: you mention [specific requirement from
the post]. I've built exactly that — [one concrete sentence, e.g. "a
multi-tenant SaaS where an AI agent runs an autonomous tool-use loop of up to
10 iterations per message, with webhook signature validation and idempotency
on Redis"].

Day to day I work in TypeScript across React, Next.js and React Native, ship
behind CI with Vitest and Playwright, and I've taken products all the way to
the App Store and Google Play rather than stopping at a prototype.

Happy to talk through any of it. Portfolio: react-portfolio-av.vercel.app

Agustin
```

**Nota importante:** decir que no necesitás patrocinio les ahorra entre 3 y 6
meses de trámite y varios miles de euros en abogados. Para un equipo que evalúa
dos candidatos parecidos, eso decide.

---

## 3. Plantilla C — seguimiento a los 7 días

> Sin respuesta después de una semana. Un solo seguimiento, nunca dos.

```
Hi [name],

Following up on my application for [role] — still very interested.

One thing I didn't mention: [a new, concrete piece of evidence relevant to
their stack — e.g. "I've since shipped X" or "I noticed you use Prisma; I run
it in production on two projects"].

If the role is filled or on hold, no problem at all — just let me know and I'll
stop following up.

Agustin
```

---

## 4. Los datos que podés afirmar (todos verificados)

Usalos con números. Los adjetivos no convencen a nadie; los números sí.

- **Cuatro proveedores de pago integrados:** RevenueCat y los IAP de Apple y
  Google cobrando en producción en Mental; Stripe, MercadoPago y Paddle
  integrados en proyectos propios todavía sin lanzar. Decilo así: la distinción
  te hace más creíble, no menos.
- **Una app publicada en las dos tiendas** (App Store y Google Play), con el
  ciclo completo de release: EAS, TestFlight, revisiones de tienda, OTA.
- **Agente IA con tool use real:** loop autónomo de hasta 10 iteraciones,
  validación HMAC-SHA256 del webhook, idempotencia de mensajes en Upstash
  Redis, sistema propio de evals para detectar regresión del agente.
- **Arbix:** construido y desplegado en dominio propio (todavía sin lanzar),
  scrapers tolerantes a fallos en 5 plataformas, calculadora en 9 marketplaces,
  4 cron jobs, generación de imágenes con IA para listings.
- **SOMMOS:** clienta externa real. App iOS y Android (Expo, RevenueCat,
  OneSignal, Supabase) más panel web privado en Next.js para que ella suba su
  propio contenido. Es tu mejor prueba de que sabés tratar con un cliente y no
  solo escribir código.
- **Calidad:** Vitest, Playwright end-to-end, CI en GitHub Actions, validación
  de esquemas con Zod, observabilidad con Sentry.
- **Zona horaria:** GMT-3, solapamiento con toda la jornada laboral de EE. UU.
- **Ciudadanía:** española (UE) y uruguaya.

---

## 5. Lo que NO va en la carta

- **Tu nivel de inglés.** No lo menciones. Si escribís bien la carta, ya lo
  demostraste; si lo aclarás, generás la duda que querés evitar.
- **Que buscás trabajo con urgencia.** Cambia la relación de poder y te baja
  la oferta.
- **La lista completa del stack.** Eso está en el CV. En la carta van dos o
  tres cosas que le importan a *este* aviso.
- **«Apasionado por la tecnología», «proactivo», «rápido aprendiz».** Ocupan
  espacio y no dicen nada.
- **Que la mayoría de tus proyectos son propios y no de clientes.** No es una
  debilidad y no hace falta señalarla. Un proyecto en producción con pagos
  reales es evidencia, sin importar quién lo encargó.

---

## 6. Cómo adaptar cada carta en tres minutos

1. Leé el aviso y subrayá **la frase donde describen su dolor**. Esa frase, con
   sus palabras, va en tu segundo párrafo.
2. Elegí **un solo proyecto tuyo** que resuelva algo parecido. Uno, no tres.
3. Escribí **una pregunta técnica real** sobre su producto. Si no se te ocurre
   ninguna, no leíste bien el aviso.
4. Revisá que el nombre de la empresa y el del rol estén bien escritos. Es el
   error más común y el más caro.

---

## 7. Ritmo semanal

- **20 postulaciones por semana**, mitad a puestos de Estados Unidos con rango
  publicado desde 4.000 dólares, mitad a puestos europeos en inglés.
- **Solo avisos de menos de 72 horas.** En remoto, la tasa de respuesta cae a
  la mitad después del tercer día.
- **Alertas diarias guardadas** en Get on Board y landing.jobs.
- **Un seguimiento por postulación**, a los 7 días, y se cierra.
- Llevá la cuenta en una planilla: empresa, rol, fecha, canal, estado. Sin eso,
  a la tercera semana no sabés qué funciona.
