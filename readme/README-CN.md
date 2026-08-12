# @trapar-waves/cli-template

![npm version](https://img.shields.io/npm/v/@trapar-waves/cli-template)
![npm dm](https://img.shields.io/npm/dm/@trapar-waves/cli-template)
![License](https://img.shields.io/github/license/Trapar-waves/cli-template)
![GitHub last commit](https://img.shields.io/github/last-commit/Trapar-waves/cli-template)
![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/Trapar-waves/cli-template/release.yml)
![Renovate](https://img.shields.io/badge/renovate-enabled-blue)

---

[English](../README.md) | [日本語](./README-JP.md) | [Русский язык](./README-RU.md)

> 一个基于现代工具链的 CLI 开发模板，集成了 TypeScript、tsup 构建工具、consola 日志库等核心组件，加速高质量 CLI 项目的搭建。

![cli-template hero](../assets/readme/hero.svg)

![Features](../assets/readme/headers/features.svg)

- **CLI 工具链：** 集成 `ts-node`（用于开发时直接执行 TypeScript）和 `tsup`（用于生产级构建），支持从调试到部署的完整工作流。
- **TypeScript 支持：** 完整的 TypeScript 配置（包括 `tsconfig.json`），提供类型检查和自动补全，确保代码可维护性。
- **结构化日志：** 通过 `consola` 实现分级日志（info/warn/error）、自定义格式化和上下文感知消息，提升调试效率。
- **数据解析：** 内置 `destr`，安全解析类 JSON 数据（如 CLI 参数、配置文件），防止 `JSON.parse` 异常。
- **终端样式：** 使用轻量级 `picocolors` 提供跨平台终端颜色支持（160+ 颜色代码）和样式（粗体/下划线），提升 CLI 交互体验。
- **代码质量：** 集成 ESLint（基于 `@antfu/eslint-config`），自动检查代码风格、检测错误并强制执行最佳实践。
- **Git Hooks：** 集成 `husky` 和 `lint-staged`，在提交前自动执行检查。

![Tech Stack](../assets/readme/headers/tech-stack.svg)

- **语言：** `TypeScript` — JavaScript 的类型超集，支持静态类型检查和现代语法。
- **构建工具：** `tsup` — 基于 esbuild 的快速打包工具，支持 ESM、CommonJS 和类型声明输出。
- **日志库：** `consola` — 结构化日志库，支持分级消息、自定义主题和上下文。
- **数据处理：** `destr` — 安全的类 JSON 字符串解析器（如 CLI 参数），防止 `JSON.parse` 错误。
- **终端样式：** `picocolors` — 轻量级跨平台终端颜色库，支持 160+ 颜色代码和样式（粗体/下划线）。
- **代码检查：** `ESLint` + `@antfu/eslint-config` — 现代 JavaScript/TypeScript 检查规则，支持自动修复。
- **包管理器：** `pnpm` — 内容寻址的包管理器，安装更快，磁盘占用更少。

查看 [package.json](../package.json) 获取完整的依赖列表。

![Getting Started](../assets/readme/headers/getting-started.svg)

### 前置条件

- Node.js（推荐 >= 18.x）
- 包管理器（npm、yarn 或 pnpm）

### 安装

1. 使用模板创建新项目：

   ```bash
   pnpm create trapar-waves
   ```

2. 导航到项目目录并安装依赖：

   ```bash
   pnpm install
   ```

3. 启动开发服务器：

   ```bash
   pnpm start
   ```

![Project Structure](../assets/readme/headers/project-structure.svg)

```
├── bin/                  # CLI 入口点
│   ├── run               # 生产入口脚本
│   └── run.ts            # 开发入口脚本
├── src/                  # 源代码
│   ├── index.ts          # 主应用逻辑
│   └── logger.ts         # 日志配置（consola）
├── dist/                 # 编译输出（由 tsup 生成）
├── tsconfig.json         # TypeScript 配置
├── eslint.config.mjs     # ESLint 配置
├── lint-staged.config.js # Lint-staged 配置
├── renovate.json         # Renovate 机器人配置
└── package.json          # 项目依赖和脚本
```

![Contributing](../assets/readme/headers/contributing.svg)

欢迎贡献，非常感谢！请按照以下步骤贡献：

1. Fork 仓库
2. 创建特性分支（`git checkout -b feature/amazing-feature`）
3. 提交更改（`git commit -m 'Add some amazing feature'`）
4. 推送到分支（`git push origin feature/amazing-feature`）
5. 创建 Pull Request

![License](../assets/readme/headers/license.svg)

MIT License © 2025 Trapar Waves

## 👤 作者

- **Rikka：** [admin@rikka.cc](mailto:admin@rikka.cc)
- **GitHub 主页：** [Muromi-Rikka](https://github.com/Muromi-Rikka)

## 🔗 链接

- **仓库：** [https://github.com/Trapar-waves/cli-template](https://github.com/Trapar-waves/cli-template)
- **Issues：** [https://github.com/Trapar-waves/cli-template/issues](https://github.com/Trapar-waves/cli-template/issues)
