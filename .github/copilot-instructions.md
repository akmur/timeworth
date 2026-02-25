# Copilot Instructions

## Build commands

- `npm run dev` — Start Vite dev server
- `npm run build` — Production build to `dist/`
- `npm run preview` — Preview production build

There are no tests or linters configured.

## Architecture

Timeworth is a single-page React 19 app (Vite, no TypeScript) that calculates how many hours and minutes you'd need to work to afford an item, based on your income and work schedule.

**Data flow:** `App` owns all state via `useState`. Form inputs persist to `localStorage` individually (keyed by field id) via helpers, and are restored on mount. The `calculateCost` helper computes work-time from five inputs and returns `{ totalHours, totalMinutes, showResult }`. The `Form` hides and `Result` appears when a calculation is submitted.

**Helpers (`src/helpers/`):** Pure functions for localStorage read/write and the cost calculation. `getStateFromStorage` provides defaults (40h/week, 20 holidays, 10 bank holidays) when no stored value exists.

## Conventions

- **CSS Modules** — Every component has a co-located `.module.css` file. No global styles except `src/index.css` and `index.html`.
- **Formatting** — Prettier: 2-space indent, no semicolons, single quotes, no trailing commas.
- **Components** — Function components with default exports, one per file. Props are destructured in the function signature.
- **Node version** — `.nvmrc` specifies Node 20.
