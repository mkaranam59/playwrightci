# Playwright Project

A Playwright + TypeScript test suite covering API testing, page object fixtures, authenticated sessions, visual checks, network mocking, and several public demo sites (Sauce Demo, the-internet.herokuapp.com, TodoMVC, jsonplaceholder).

## Requirements

- Node.js (tested with v24.x)
- npm

## Setup

```bash
npm install
npx playwright install   # downloads the Chromium/Firefox/WebKit browser binaries
```

### Environment variables

Create a `.env` file in the project root (loaded automatically by `playwright.config.ts` via `dotenv`):

```
API_KEY=your-value
SAUCE_USER=your-value
SAUCE_PASS=your-value
```

- `API_KEY` is read and logged by [tests/02_process.spec.ts](tests/02_process.spec.ts).
- `SAUCE_USER` / `SAUCE_PASS` are reserved for the Sauce Demo login flow but not currently wired into any test (the login tests use hardcoded `standard_user` / `secret_sauce` credentials).

## Running tests

```bash
# Run everything
npx playwright test

# Run a single file
npx playwright test tests/api.spec.ts

# Run a single project (see Projects below)
npx playwright test --project=chromium

# Filter by tag (quote it in PowerShell, since @ triggers splatting)
npx playwright test --grep "@smoke"

# List tests without running them
npx playwright test --list

# Run with the HTML report UI after
npx playwright show-report

# Run in headed / debug mode
npx playwright test --headed
npx playwright test --debug

# Open Playwright's UI mode
npx playwright test --ui
```

## Projects

Defined in [playwright.config.ts](playwright.config.ts):

| Project | What it runs | Notes |
|---|---|---|
| `setup` | [tests/auth.setup.ts](tests/auth.setup.ts) | Logs into Sauce Demo once and saves the session to `playwright/.auth/user.json`. |
| `logged-in` | everything under `tests/authed/` | Depends on `setup`; reuses the saved session via `storageState`, `baseURL` is `https://www.saucedemo.com`. |
| `chromium` | every other spec under `tests/` (authed tests are excluded via the top-level `testIgnore`) | Plain Desktop Chrome, no stored auth. |

Firefox, WebKit, and mobile-viewport projects are present in the config but currently commented out — uncomment the relevant block in `playwright.config.ts` to re-enable cross-browser runs.

## Project structure

```
tests/
  01.test1.spec.ts            Basic navigation smoke test (Playwright docs site)
  02_process.spec.ts          Logs process.env / filtered env vars, baseURL check
  03_TS_survival_kit.ts       Scratch TypeScript notes (types, interfaces, classes)
  api.spec.ts                 REST API tests against jsonplaceholder.typicode.com (GET/POST/PUT/DELETE)
  auth.setup.ts                Sauce Demo login, saves storage state for the "logged-in" project
  auth_types.spec.ts          HTTP basic auth & bearer token examples (httpbin.org)
  env.ts                      requireEnv() helper for mandatory environment variables
  example.spec.ts             Default Playwright starter test
  fixture.spec.ts             Custom page-object fixtures (login + inventory) against Sauce Demo
  mock.spec.ts / mock1.spec.ts  Network interception: fulfill, modify, spy, and abort routes
  response.spec.ts            Waiting on a specific API response
  customfixtures/
    pages/fixtures.ts         Custom test fixtures: loginPage, inventoryPage
    pages/LoginPage.ts        Page object for the Sauce Demo login page
    pages/InventoryPage.ts    Page object for the Sauce Demo inventory page
  fixtures/
    fixtures.ts                Simple fixture example (morning_greeting)
    greeting.spec.ts          Test using the simple fixture
  authed/
    inventory.spec.ts         Tests that rely on the pre-saved Sauce Demo session
  internet/                   Tests against the-internet.herokuapp.com (alerts, downloads, dynamic loading, uploads, windows, web-first assertions)
  sauce/                      More Sauce Demo tests: cart, login, strict-mode locator pitfalls
  todo/                       Tests against the Playwright TodoMVC demo (structure, typed helpers, visual baseline)
```

## Configuration highlights ([playwright.config.ts](playwright.config.ts))

- `testDir: './tests'`, with `tests/authed/**` ignored by default and only run under the `logged-in` project.
- `.env` is loaded at the top of the file via `dotenv.config(...)` — without this, `process.env.*` reads would be `undefined`.
- `timeout: 50_000` ms per test (increase for slow external sites like `the-internet.herokuapp.com`).
- `trace: 'on-first-retry'` — view with `npx playwright show-trace <trace.zip>`.
- CI-only settings: `forbidOnly`, `retries: 2`, `workers: 1` are gated on `process.env.CI`.

## Known gotchas

- Several tests hit third-party public demo sites (Sauce Demo, the-internet.herokuapp.com, jsonplaceholder, TodoMVC, httpbin.org). They can be slow or flaky since they're outside your control — a timeout doesn't always mean your code is wrong.
- In PowerShell, always quote CLI args that start with `@` or `$` (e.g. `--grep "@smoke"`), otherwise PowerShell tries to interpret them as variable splatting instead of passing them literally.
- `page.goto('/')` requires `baseURL` to be set for that project/test; several specs set it explicitly via `test.use({ baseURL: '...' })`.
