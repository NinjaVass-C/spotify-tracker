# Spotify Tracker

A TypeScript monorepo managed with [Bun workspaces](https://bun.sh/docs/install/workspaces).

## Stack

- **`apps/web`** — React 18 frontend (Vite)
- **`apps/api`** — NestJS backend (Express)
- **`packages/db`** — Shared Postgres layer using [Drizzle ORM](https://orm.drizzle.team)

## Structure

```
.
├── apps/
│   ├── web/          # React + Vite  (@spotifytracker/web)
│   └── api/          # NestJS        (@spotifytracker/api)
├── packages/
│   └── db/           # Drizzle + Postgres, shared (@spotifytracker/db)
├── package.json      # workspace root + scripts
├── tsconfig.base.json# shared TS config, extended by each workspace
└── .env.example      # copy to .env
```

Workspaces reference each other by package name, e.g. the API imports the
database client with `import { db, schema } from '@spotifytracker/db'`.

## Getting started

```bash
# 1. Install everything (one lockfile for the whole repo)
bun install

# 2. Configure environment
cp .env.example .env        # then edit DATABASE_URL etc.

# 3. Run both apps (web on :5173, api on :3000)
bun run dev
```

The web dev server proxies `/api/*` to the NestJS server, so the frontend can
call `fetch('/api/health')` with no CORS setup during development.

## Scripts (run from the repo root)

| Command              | What it does                                    |
| -------------------- | ----------------------------------------------- |
| `bun run dev`        | Start web + api together                        |
| `bun run dev:web`    | Start only the React app                        |
| `bun run dev:api`    | Start only the NestJS app                       |
| `bun run build`      | Build every workspace                           |
| `bun run typecheck`  | Type-check every workspace                      |
| `bun run db:generate`| Generate a migration from `packages/db` schema  |
| `bun run db:migrate` | Apply migrations                                |
| `bun run db:push`    | Push schema straight to the DB (dev only)       |
| `bun run db:studio`  | Open Drizzle Studio                             |

## Database

Define tables in `packages/db/src/schema.ts`, then:

```bash
bun run db:generate   # writes SQL to packages/db/drizzle/
bun run db:migrate    # applies it to DATABASE_URL
```

## Roadmap

- [ ] Dockerfiles for `web`, `api`, and a `docker-compose.yml` with Postgres
- [ ] Deployment
