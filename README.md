# @trapar-waves/cli-template

![npm version](https://img.shields.io/npm/v/@trapar-waves/cli-template)
![npm dm](https://img.shields.io/npm/dm/@trapar-waves/cli-template)
![License](https://img.shields.io/github/license/Trapar-waves/cli-template)
![GitHub last commit](https://img.shields.io/github/last-commit/Trapar-waves/cli-template)
![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/Trapar-waves/cli-template/release.yml)
![Renovate](https://img.shields.io/badge/renovate-enabled-blue)

---

[中文](./readme/README-CN.md) | [日本語](./readme/README-JP.md) | [Русский язык](./readme/README-RU.md)

> Skip the boilerplate. Ship your CLI in minutes, not hours.

![cli-template hero](assets/readme/hero.svg)

A production-ready starter for building Node.js CLI tools. Everything is pre-configured — TypeScript compilation, bundling, logging, code quality, and git hooks — so you can focus on writing your CLI logic from the first minute.

```bash
# Create your CLI project instantly
pnpm create trapar-waves

# Start developing immediately
pnpm start
```

```
? Project name? › my-awesome-cli
my-awesome-cli
```

![Features](assets/readme/headers/features.svg)

## What You Get Out of the Box

| Feature                | Tool                          | What It Does                                                                           |
| ---------------------- | ----------------------------- | -------------------------------------------------------------------------------------- |
| **Type Safety**        | TypeScript                    | Full type checking with modern ES syntax, preventing runtime errors before they happen |
| **Fast Builds**        | tsup                          | esbuild-powered bundler — produces a single optimized CJS file in milliseconds         |
| **Structured Logging** | consola                       | Leveled logging (info/warn/error), interactive prompts, and beautiful terminal output  |
| **Safe Parsing**       | destr                         | Parse CLI arguments and config files without worrying about `JSON.parse` throwing      |
| **Terminal Colors**    | picocolors                    | Cross-platform colored output with 160+ codes — zero dependencies, maximum speed       |
| **Code Quality**       | ESLint + @antfu/eslint-config | Opinionated linting with auto-fix, covering TypeScript, JSON, Markdown, and YAML       |
| **Git Hooks**          | husky + lint-staged           | Pre-commit lint checks — your code is always clean before it reaches the repo          |
| **CI/CD Ready**        | GitHub Actions                | Automated npm publishing and changelog generation on version tags                      |

## Why This Template?

Most CLI starters give you a `console.log("hello")` and leave you to figure out the rest. This template gives you a **complete development environment**:

- **Zero-config TypeScript** — `tsconfig.json` is tuned for CLI development with strict checks
- **One-command build** — `pnpm build` produces a single `dist/run.js` ready to publish
- **Development workflow** — `pnpm start` runs your TypeScript directly via ts-node, no build step needed
- **Production entry** — `bin/run` is a clean Node.js entry point that loads the compiled output
- **Dependency updates** — Renovate bot keeps your dependencies current automatically

![Tech Stack](assets/readme/headers/tech-stack.svg)

```
Language     TypeScript 5.9    Type-safe JavaScript with modern syntax
Bundler      tsup 8.5          esbuild-based, ESM + CJS output
Logging      consola 3.4       Structured logging with prompts
Parsing      destr 2.0         Safe JSON-like string parser
Colors       picocolors 1.1    Lightweight terminal colors
Linting      ESLint 10         @antfu/eslint-config preset
Hooks        husky 9           Git hook management
Manager      pnpm 10           Fast, disk-efficient package manager
```

See [package.json](./package.json) for the full dependency list.

![Getting Started](assets/readme/headers/getting-started.svg)

## Prerequisites

- **Node.js** >= 18.x
- **pnpm** (recommended) or npm/yarn

## Quick Start

```bash
# 1. Create a new project from the template
pnpm create trapar-waves

# 2. Navigate into the project
cd your-project-name

# 3. Install dependencies
pnpm install

# 4. Start developing (runs TypeScript directly)
pnpm start
```

## Available Scripts

| Script             | Command                | Description                                            |
| ------------------ | ---------------------- | ------------------------------------------------------ |
| `pnpm start`       | `ts-node ./bin/run.ts` | Run the CLI in development mode (TypeScript, no build) |
| `pnpm start:node`  | `node ./bin/run`       | Run the compiled production output                     |
| `pnpm build`       | `tsup-node`            | Build for production → `dist/run.js`                   |
| `pnpm build:watch` | `tsup-node --watch`    | Build in watch mode for development                    |
| `pnpm lint`        | `eslint . --cache`     | Run ESLint with auto-fix                               |

## Build Output

```bash
$ pnpm build

CLI Building entry: bin/run.ts
CLI Using tsup config: tsup.config.ts
CLI tsup v8.5.1
CLI Target: node18
CLI Building entry: { run: 'bin/run.ts' }
CJS dist/run.js       285 B
CJS ⚡️ Build success in 12ms
```

The build produces a single `dist/run.js` file — no external dependencies bundled, fast startup, ready to publish to npm.

![Project Structure](assets/readme/headers/project-structure.svg)

```
cli-template/
├── bin/
│   ├── run                    # Production entry (#!/usr/bin/env node)
│   └── run.ts                 # Development entry (imports src/index.ts)
├── src/
│   ├── index.ts               # ← Your CLI logic goes here
│   └── logger.ts              # Logger configuration (consola)
├── dist/                      # Compiled output (generated by tsup)
│   └── run.js                 # Single bundled CJS file
├── assets/readme/             # README visual assets
├── .github/workflows/         # CI/CD (release + npm publish)
├── .husky/                    # Git hooks (pre-commit lint)
├── tsconfig.json              # TypeScript configuration
├── tsup.config.ts             # Build configuration
├── eslint.config.mjs          # ESLint configuration
├── lint-staged.config.js      # Lint-staged configuration
├── renovate.json              # Dependency update bot
└── package.json               # Project metadata and scripts
```

## Customization Guide

**Start here:** `src/index.ts` — replace the demo logic with your CLI implementation.

```typescript
// src/index.ts — replace this with your CLI
import { logger } from "./logger";

export async function run() {
  const projectName = await logger.prompt("Project name?", {
    type: "text",
  });

  logger.log(projectName);
}
```

**Add commands:** Install a CLI framework like `commander`, `yargs`, or `citty` and wire it into the `run()` function.

**Add more dependencies:** `pnpm add <package>` — they'll be bundled automatically by tsup.

**Change the build:** Edit `tsup.config.ts` to enable sourcemaps, change the output format, or add entry points.

![Contributing](assets/readme/headers/contributing.svg)

Contributions are welcome! Here's how to get started:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes and ensure `pnpm lint` passes
4. Commit your changes (`git commit -m 'Add some amazing feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

> **Note:** Pre-commit hooks will automatically run linting on your staged files.

![License](assets/readme/headers/license.svg)

MIT License © 2025 Trapar Waves

## 👤 Author

- **Rikka:** [admin@rikka.cc](mailto:admin@rikka.cc)
- **GitHub Profile:** [Muromi-Rikka](https://github.com/Muromi-Rikka)

## 🔗 Links

- **Repository:** [https://github.com/Trapar-waves/cli-template](https://github.com/Trapar-waves/cli-template)
- **Issues:** [https://github.com/Trapar-waves/cli-template/issues](https://github.com/Trapar-waves/cli-template/issues)
- **npm:** [https://www.npmjs.com/package/@trapar-waves/cli-template](https://www.npmjs.com/package/@trapar-waves/cli-template)
