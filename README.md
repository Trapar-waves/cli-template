# @trapar-waves/cli-template

![npm version](https://img.shields.io/npm/v/@trapar-waves/cli-template)
![npm dm](https://img.shields.io/npm/dm/@trapar-waves/cli-template)
![License](https://img.shields.io/badge/license-MIT-green)
![GitHub last commit](https://img.shields.io/github/last-commit/Trapar-waves/cli-template)

> A CLI template project built with modern tools and practices.

## ✨ Features

* **CLI Tooling:** Likely provides a command-line interface (CLI) tool using `ts-node` and `tsup`, enabling seamless script execution and build processes.
* **Modern TypeScript Support:** Leverages TypeScript (`typescript`) to ensure type safety and improve code quality during development.
* **Efficient Logging:** Utilizes `consola` for structured and customizable console logging, enhancing the debugging experience.
* **Data Parsing Utilities:** Includes `destr` for parsing and stringifying JSON-like data structures, likely aiding in configuration or data handling tasks.
* **Colorized Output:** Employs `picocolors` for lightweight terminal styling, ensuring clear and visually appealing CLI output.
* **Linting and Code Quality:** Integrates ESLint with `@antfu/eslint-config`, indicating a focus on clean, maintainable, and consistent code.
* **Fast Build Workflow:** Uses `tsup` as a build tool, potentially offering optimized bundling and transpilation for TypeScript projects.

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

Key technologies used in this project include:

* **Framework/Library:** Built as a CLI tool using Node.js.
* **Language:** TypeScript for type-safe and maintainable code.
* **Logging:** Enhanced console output with `consola`.
* **Build Tool:** Optimized builds using `tsup`.
* **Linting:** Ensures code quality with ESLint and `@antfu/eslint-config`.

See the [package.json](package.json) for a full list of dependencies.

## 🤝 Contributing

Contributions are welcome!

## 📄 License

Distributed under the **MIT** License. See `LICENSE` file for more information.

## 👤 Author

* **Rikka** ([admin@rikka.cc](mailto:admin@rikka.cc))
* GitHub: [@Muromi-Rikka](https://github.com/Muromi-Rikka)

## 🔗 Links

* **Repository:** [https://github.com/Trapar-waves/cli-template](https://github.com/Trapar-waves/cli-template)
* **Homepage:** [https://github.com/Trapar-waves/cli-template](https://github.com/Trapar-waves/cli-template)
* **Issues:** [https://github.com/Trapar-waves/cli-template/issues](https://github.com/Trapar-waves/cli-template/issues)
