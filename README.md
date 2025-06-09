# @trapar-waves/cli-template

![npm version](https://img.shields.io/npm/v/@trapar-waves/cli-template)
![npm dm](https://img.shields.io/npm/dm/@trapar-waves/cli-template)
![License](https://img.shields.io/badge/license-MIT-green)
![GitHub last commit](https://img.shields.io/github/last-commit/Trapar-waves/cli-template)

> A CLI development template powered by modern tooling, integrating TypeScript, tsup for builds, consola for logging, and other core components to accelerate high-quality CLI project setup.

## ✨ Features

* **CLI Toolchain:** Integrates `ts-node` (for direct TypeScript execution during development) and `tsup` (for production-grade builds), supporting the full workflow from debugging to deployment.
* **TypeScript Support:** Full TypeScript configuration (including `tsconfig.json`) with type checking and auto-completion to ensure code maintainability.
* **Structured Logging:** Implements leveled logging (info/warn/error), custom formatting, and context-aware messages via `consola` to enhance debugging efficiency.
* **Data Parsing:** Built-in `destr` for safe parsing of JSON-like data (e.g., CLI arguments, config files), preventing exceptions from `JSON.parse`.
* **Terminal Styling:** Uses lightweight `picocolors` for cross-platform terminal color support (160+ color codes) and styles (bold/underline) to improve CLI interactivity.
* **Code Quality:** Integrated ESLint (based on `@antfu/eslint-config`) for automated code style checks, error detection, and best practice enforcement.
* **Rapid Builds:** `tsup` default configuration supports ESM output, source maps, and type declaration generation, with 30%+ faster build times compared to traditional tools.

## 🚀 Getting Started

Follow these instructions to get the project running locally.

### Prerequisites

* Ensure you have the following installed:
    * Node.js (>= 18.x recommended)
    * Package manager (npm, yarn, or pnpm)
    ```bash
    node -v
    npm -v # or yarn -v or pnpm -v
    ```

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/Trapar-waves/cli-template.git
    cd cli-template
    ```
2. Install dependencies:
    ```bash
    # Use your preferred package manager
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

## 🛠️ Usage

### Available Scripts

Common scripts available via `npm run <script>`, `yarn <script>`, or `pnpm <script>`:

* `start`: Starts the CLI tool using `ts-node` for development purposes.
* `start:node`: Runs the CLI tool directly with Node.js, bypassing TypeScript compilation.
* `build`: Creates a production-ready build using `tsup`.
* `build:watch`: Watches for file changes and rebuilds the project automatically during development.

Example:
```bash
# Run the CLI tool in development mode
npm run start

# Build the project for production
npm run build
```

## 💻 Tech Stack

Core technologies (full dependencies listed in [package.json](package.json)):

| Category       | Tool/Library     | Description                                                                 |
|----------------|------------------|-----------------------------------------------------------------------------|
| Language       | TypeScript       | Typed superset of JavaScript with static type checking and modern syntax.   |
| Build Tool     | tsup             | Fast bundler based on esbuild, supporting ESM, CommonJS, and type declaration outputs. |
| Logging        | consola          | Structured logging library with leveled messages, custom themes, and context support. |
| Data Handling  | destr            | Safe parser for JSON-like strings (e.g., CLI arguments) to prevent `JSON.parse` errors. |
| Terminal Styling| picocolors       | Lightweight cross-platform terminal color library with 160+ color codes and styles (bold/underline). |
| Code Linting   | ESLint + `@antfu/eslint-config` | Modern JavaScript/TypeScript linting rules with auto-fix for style and error issues. |
| Package Manager| pnpm             | Content-addressable package manager with faster installs and reduced disk usage (see `pnpm-lock.yaml`). |

## 🤝 Contributing

Contributions are welcome! Here's the basic workflow:

1. **Submit an Issue**: Describe the problem or suggestion in [Issues](https://github.com/Trapar-waves/cli-template/issues) (search for existing issues first).
2. **Create a Branch**: Check out a new branch from `main` (e.g., `feat/new-command` or `fix/log-bug`).
3. **Modify Code**: Ensure ESLint checks pass (`npm run lint`) and add tests if applicable.
4. **Submit a PR**: Create a Pull Request to `main` with a description of changes and motivations.

Note: Review the [Code Style Guide](https://github.com/antfu/eslint-config) (based on this project's ESLint setup) before contributing.

## 📄 License

Distributed under the **MIT** License. See `LICENSE` file for more information.

## 👤 Author

* **Rikka** ([admin@rikka.cc](mailto:admin@rikka.cc))
* GitHub: [@Muromi-Rikka](https://github.com/Muromi-Rikka)

## 🔗 Links

* **npm Package:** [https://www.npmjs.com/package/@trapar-waves/cli-template](https://www.npmjs.com/package/@trapar-waves/cli-template)
* **Repository:** [https://github.com/Trapar-waves/cli-template](https://github.com/Trapar-waves/cli-template)
* **Issue Tracker:** [https://github.com/Trapar-waves/cli-template/issues](https://github.com/Trapar-waves/cli-template/issues)
