# @trapar-waves/cli-template

![npm version](https://img.shields.io/npm/v/@trapar-waves/cli-template)
![npm dm](https://img.shields.io/npm/dm/@trapar-waves/cli-template)
![License](https://img.shields.io/badge/license-ISC-green)
![GitHub last commit](https://img.shields.io/github/last-commit/Trapar-waves/cli-template)

> A CLI template project built with modern tools and frameworks.

## ✨ Features

* **Modern JavaScript Development:** Utilizes TypeScript (`typescript`) to improve code quality and provide type safety during development.
* **CLI Tooling:** Likely provides a command-line interface (CLI) tool based on the presence of `bin` entry in `package.json`, enabling users to execute commands via `cli-template`.
* **Efficient Logging:** Integrates `consola` for clean and customizable logging, likely used for better debugging and user-facing outputs.
* **String Parsing & Manipulation:** Employs `destr` for efficient string deserialization, which could indicate support for complex data handling within CLI arguments or configurations.
* **Colorful Terminal Output:** Uses `picocolors` for lightweight, minimalistic terminal styling, enhancing readability of CLI outputs.
* **Optimized Builds:** Leverages `tsup` as a build tool for bundling TypeScript projects, potentially allowing for fast and optimized production-ready builds.
* **Linting & Code Quality:** Includes `eslint` with an opinionated configuration (`@antfu/eslint-config`), indicating attention to code quality and consistency across the project.

## 🚀 Getting Started

Follow these instructions to get the project running locally.

### Prerequisites

* Ensure you have the following installed:
    * Node.js >= 18.x
    * Package manager (`npm`, `yarn`, or `pnpm`)
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

* `start`: Starts the CLI tool using `ts-node`. Likely runs the CLI in development mode.
* `start:node`: Runs the compiled CLI using Node.js directly.
* `build`: Creates a production-ready build of the CLI using `tsup`.
* `build:watch`: Watches for file changes and continuously rebuilds the CLI during development.

Example:
```bash
# Start the CLI tool in development mode
npm run start 

# Create production build
npm run build 
```

💻 Tech Stack

Key technologies used in this project include:

- Language: `TypeScript`
- Build Tool: `Tsup`
- CLI Framework: Custom-built CLI using Node.js
- Logging Library: `Consola` for clean, colorful terminal output
- String Deserialization: `Destr` for parsing strings efficiently
- Code Quality: ESLint with Antfu's configuration for consistent linting rules
- See the package.json for a full list of dependencies.

🤝 Contributing

Contributions are welcome!

📄 License

Distributed under the ISC License. See LICENSE file for more information.

👤 Author

- Rikka (Muromi-Rikka)
- Email: admin@rikka.cc

🔗 Links

- Repository: https://github.com/Trapar-waves/cli-template
- Homepage: https://github.com/Trapar-waves/cli-template
- Issues: https://github.com/Trapar-waves/cli-template/issues