# AGENTS.md

Single-page portfolio built with [Astro 5](https://astro.build/) — static HTML output, no framework.

## Commands

```sh
pnpm install                              # install / refresh lockfile
pnpm run dev                              # dev server → http://localhost:4321
pnpm run build                            # production build → dist/
pnpm run preview                          # live-preview the build output
pnpm run astro check                      # type-checking via @astrojs/strict mode
pnpm run format                           # Prettier — `prettier --write .`
```

**CI verification (run in order):** `astro check` → `build`

## Project structure

```
src/
  assets/            Images, fonts, static SVGs
  components/        Reusable UI blocks (Hero, Projects, Skills, Experience, ThemeToggle, DesktopNav)
  data/profile.json  Source of truth — bio, skills, projects (imported in page frontmatter)
  layouts/Layout.astro   head, nav shell, footer
  pages/index.astro  Only page — composes all sections
public/              Static assets served as-is (favicon.svg, OG images)
```

- Single `pages/index.astro` — the entire site.
- Dark/light mode toggled via `class="dark"` on `<html>` in `Layout.astro`.
- All data flows through `data/profile.json`; change it and all sections update.

## Code style

- **TypeScript strict** (via `extends: "astro/tsconfigs/strict"`)
- **Prettier** — single quotes, no semicolons, 2-space indent.
- **Component convention:** functional components, explicit prop types, descriptive filenames (`kebab-case`).
- **CSS:** Tailwind utility-first. Avoid arbitrary values; extract into theme tokens when reused.
- Do not override Prettier/Tailwind defaults — keep it minimal.

## Gotchas

- **Always use pnpm.** Never npm — `package-lock.json` is removed. Use `pnpm@10+`.
- **frozen-lockfile enforced.** Adding/removing deps → run `pnpm install`, commit the updated lockfile, then push. CI fails with `ERR_PNPM_OUTDATED_LOCKFILE` otherwise.
- **native build approvals:** `pnpm-workspace.yaml` has `allowBuilds` for esbuild and sharp. New native packages may need `pnpm approve-builds`.

## Testing

No test framework configured. CI only runs `astro check` + `build`.

## Git workflow

- Branches: `feature/<description>` or `fix/<description>`
- Commits: [Conventional Commits](https://www.conventionalcommits.org/) (`feat:`, `fix:`, `style:`, `refactor:`, `docs:`, `chore:`)
- PR title format: `[section] <description>` (e.g. `[Hero] add animated entrance`)

## Boundaries

- ✅ **Always:** Run `astro check` + `build` before committing; keep `profile.json` as the single source of truth.
- ⚠️ **Ask first:** Adding new dependencies, changing the layout skeleton, modifying CI workflow.
- 🚫 **Never:** Commit secrets/API keys, edit `node_modules/`, or convert to a framework (React/Svelte/etc.) — this is intentionally framework-free.
