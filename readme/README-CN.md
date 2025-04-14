# @trapar-waves/cli-template

![显示 npm 版本](https://img.shields.io/npm/v/@trapar-waves/cli-template)
![显示 npm 每月下载量](https://img.shields.io/npm/dm/@trapar-waves/cli-template)
![许可证](https://img.shields.io/badge/license-MIT-green)
![GitHub 最后提交](https://img.shields.io/github/last-commit/Trapar-waves/cli-template)

> 一个基于现代工具和最佳实践构建的命令行界面（CLI）模板项目。

## ✨ 主要特性

* **强大的 CLI 工具支持：** 提供基于 `ts-node` 和 `tsup` 的命令行工具，能够轻松运行脚本并处理构建任务，提升开发效率。
* **现代 TypeScript 支持：** 使用 TypeScript 进行开发，确保代码具备类型安全，同时提升代码质量与可维护性。
* **高效的日志记录：** 集成 `consola`，提供结构化且可定制的日志功能，让调试过程更加直观和高效。
* **灵活的数据解析工具：** 内置 `destr`，用于解析和序列化 JSON 格式的数据，方便处理配置或数据转换任务。
* **终端彩色输出：** 使用 `picocolors` 实现轻量级的终端样式美化，确保 CLI 输出清晰且视觉效果更佳。
* **代码检查与质量保障：** 配置了 ESLint 和 `@antfu/eslint-config`，专注于保持代码的整洁性、一致性和可维护性。
* **高效的构建流程：** 使用 `tsup` 作为构建工具，为 TypeScript 项目提供快速的打包和编译功能。

## 🚀 快速开始

以下是运行本项目的步骤，请参考以下方法完成本地安装和配置。

### 前置条件

* 请确认您已安装以下软件：
    * Node.js（推荐版本 >= 18.x）
    * 包管理工具（如 npm、yarn 或 pnpm）
    ```bash
    node -v
    npm -v # 或 yarn -v 或 pnpm -v
    ```

### 安装

1. 克隆代码库：
    ```bash
    git clone https://github.com/Trapar-waves/cli-template.git
    cd cli-template
    ```
2. 安装依赖：
    ```bash
    # 使用你喜欢的包管理工具
    npm install
    # 或
    yarn install
    # 或
    pnpm install
    ```

## 🛠️ 使用方法

### 常用脚本

通过 `npm run <script>`、`yarn <script>` 或 `pnpm <script>` 可运行以下脚本：

* `start`: 使用 `ts-node` 启动 CLI 工具，适合开发阶段使用。
* `start:node`: 直接通过 Node.js 运行 CLI 工具，无需 TypeScript 编译。
* `build`: 使用 `tsup` 构建生产环境版本。
* `build:watch`: 监听文件变化并自动重新构建，适用于开发过程中持续构建。

示例：
```bash
# 在开发模式下运行 CLI 工具
npm run start 

# 构建生产环境版本
npm run build 
```

## 💻 技术栈

本项目使用的核心技术包括：

* **框架/库：** 基于 Node.js 构建的命令行工具。
* **语言：** 使用 TypeScript 编写，确保类型安全和代码可维护性。
* **日志记录：** 集成 `consola`，增强日志输出的可读性和灵活性。
* **构建工具：** 使用 `tsup` 提供高效的构建和打包功能。
* **代码检查：** 配置了 ESLint 和 `@antfu/eslint-config`，确保代码风格一致且易于维护。

更多依赖详情，请查看 [package.json](package.json) 文件。

## 🤝 贡献指南

欢迎任何形式的贡献！如果您有兴趣，请查阅项目的贡献指南并参与其中。

## 📄 许可证

本项目采用 **MIT** 许可证发布，详情请参见 `LICENSE` 文件。

## 👤 作者

* **Rikka** ([admin@rikka.cc](mailto:admin@rikka.cc))
* GitHub: [@Muromi-Rikka](https://github.com/Muromi-Rikka)

## 🔗 相关链接

* **代码库：** [https://github.com/Trapar-waves/cli-template](https://github.com/Trapar-waves/cli-template)
* **主页：** [https://github.com/Trapar-waves/cli-template](https://github.com/Trapar-waves/cli-template)
* **问题反馈：** [https://github.com/Trapar-waves/cli-template/issues](https://github.com/Trapar-waves/cli-template/issues)
