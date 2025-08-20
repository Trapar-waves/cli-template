# @trapar-waves/cli-template

![npm version](https://img.shields.io/npm/v/@trapar-waves/cli-template)
![npm dm](https://img.shields.io/npm/dm/@trapar-waves/cli-template)
![License](https://img.shields.io/github/license/Trapar-waves/cli-template)
![GitHub last commit](https://img.shields.io/github/last-commit/Trapar-waves/cli-template)
![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/Trapar-waves/cli-template/release.yml)
![Renovate](https://img.shields.io/badge/renovate-enabled-blue)

---

[中文](/readme/README-CN.md) | [日本語](/readme/README-JP.md) | [Русский язык](/readme/README-RU.md)

> A CLI development template powered by modern tooling, integrating TypeScript, tsup for builds, consola for logging, and other core components to accelerate high-quality CLI project setup.

## ✨ Features

- **CLI Toolchain:** Integrates `ts-node` (for direct TypeScript execution during development) and `tsup` (for production-grade builds), supporting the full workflow from debugging to deployment.
- **TypeScript Support:** Full TypeScript configuration (including `tsconfig.json`) with type checking and auto-completion to ensure code maintainability.
- **Structured Logging:** Implements leveled logging (info/warn/error), custom formatting, and context-aware messages via `consola` to enhance debugging efficiency.
- **Data Parsing:** Built-in `destr` for safe parsing of JSON-like data (e.g., CLI arguments, config files), preventing exceptions from `JSON.parse`.
- **Terminal Styling:** Uses lightweight `picocolors` for cross-platform terminal color support (160+ color codes) and styles (bold/underline) to improve CLI interactivity.
- **Code Quality:** Integrated ESLint (based on `@antfu/eslint-config`) for automated code style checks, error detection, and best practice enforcement.
- **Rapid Builds:** `tsup` default configuration supports ESM output, source maps, and type declaration generation, with 30%+ faster build times compared to traditional tools.

## 💻 Tech Stack

- **Language:** `TypeScript`: Typed superset of JavaScript with static type checking and modern syntax.
- **Build Tool:** `tsup`: Fast bundler based on esbuild, supporting ESM, CommonJS, and type declaration outputs.
- **Logging:** `consola`: Structured logging library with leveled messages, custom themes, and context support.
- **Data Handling:** `destr`: Safe parser for JSON-like strings (e.g., CLI arguments) to prevent `JSON.parse` errors.
- **Terminal Styling:** `picocolors`: Lightweight cross-platform terminal color library with 160+ color codes and styles (bold/underline).
- **Code Linting:** `ESLint` + `@antfu/eslint-config`: Modern JavaScript/TypeScript linting rules with auto-fix for style and error issues.
- **Package Manager:** `pnpm`: Content-addressable package manager with faster installs and reduced disk usage (see `pnpm-lock.yaml`).

See the [package.json](package.json) for a full list of dependencies.

## 🚀 Getting Started

Follow these instructions to get the project running locally.

### Prerequisites

Ensure you have the following installed:

- Node.js (>= 18.x recommended)
- Package manager (npm, yarn, or pnpm)

```bash
node -v
npm -v
```

### Installation

Using `create-trapar-waves` to scaffold a new project:

```bash
pnpm create trapar-waves
```

Or, if you prefer to manually set up the template:

1. Clone the repository:
   ```bash
   git clone https://github.com/Trapar-waves/cli-template.git
   cd cli-template
   ```
2. Install dependencies:
   ```bash
   pnpm install
   # or
   npm install
   # or
   yarn install
   ```

### Development

To run the CLI in development mode with `ts-node`:
```bash
pnpm start
# or
npm run start
```

### Building

To build the CLI for production with `tsup`:
```bash
pnpm build
# or
npm run build
```

This will output the compiled JavaScript to the `dist` directory.

## 🤝 Contributing

Contributions are welcome and greatly appreciated! Please follow these steps to contribute:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

Please ensure your code adheres to the project's linting rules by running `pnpm lint` before committing.

## 👤 Author

- **Rikka:** (admin@rikka.cc)
- **GitHub Profile:** [Muromi-Rikka](https://github.com/Muromi-Rikka)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔗 Links

- **Repository:** [https://github.com/Trapar-waves/cli-template](https://github.com/Trapar-waves/cli-template)
- **Homepage:** [https://github.com/Trapar-waves/cli-template](https://github.com/Trapar-waves/cli-template)
- **Issues:** [https://github.com/Trapar-waves/cli-template/issues](https://github.com/Trapar-waves/cli-template/issues)
