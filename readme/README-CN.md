# @trapar-waves/cli-template

![npm version](https://img.shields.io/npm/v/@trapar-waves/cli-template)
![npm dm](https://img.shields.io/npm/dm/@trapar-waves/cli-template)
![License](https://img.shields.io/github/license/Trapar-waves/cli-template)
![GitHub last commit](https://img.shields.io/github/last-commit/Trapar-waves/cli-template)
![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/Trapar-waves/cli-template/release.yml)
![Renovate](https://img.shields.io/badge/renovate-enabled-blue)

---

[English](../README.md) | [日本語](/readme/README-JP.md) | [Русский язык](/readme/README-RU.md)

> 一个由现代工具驱动的CLI开发模板，集成TypeScript、tsup构建工具、consola日志系统以及其他核心组件，加速高质量CLI项目的搭建。

## ✨ 特性

- **CLI工具链:** 集成`ts-node`（开发时直接执行TypeScript）和`tsup`（生产级构建），支持从调试到部署的完整工作流。
- **TypeScript支持:** 完整的TypeScript配置（包括`tsconfig.json`），带有类型检查和自动补全功能，确保代码可维护性。
- **结构化日志:** 通过`consola`实现分级日志（info/warn/error）、自定义格式化和上下文感知消息，提高调试效率。
- **数据解析:** 内置`destr`用于安全解析类JSON数据（如CLI参数、配置文件），防止`JSON.parse`抛出异常。
- **终端样式:** 使用轻量级`picocolors`提供跨平台终端颜色支持（160+颜色代码）和样式（粗体/下划线），增强CLI交互性。
- **代码质量:** 集成ESLint（基于`@antfu/eslint-config`）实现自动化代码风格检查、错误检测和最佳实践执行。
- **快速构建:** `tsup`默认配置支持ESM输出、源映射和类型声明生成，构建速度比传统工具快30%以上。

## 💻 技术栈

- **语言:** `TypeScript`：JavaScript的类型化超集，具有静态类型检查和现代语法。
- **构建工具:** `tsup`：基于esbuild的快速打包器，支持ESM、CommonJS和类型声明输出。
- **日志系统:** `consola`：具有分级消息、自定义主题和上下文支持的结构化日志库。
- **数据处理:** `destr`：用于类JSON字符串（如CLI参数）的安全解析器，防止`JSON.parse`错误。
- **终端样式:** `picocolors`：轻量级跨平台终端颜色库，支持160+颜色代码和样式（粗体/下划线）。
- **代码检查:** `ESLint` + `@antfu/eslint-config`：现代JavaScript/TypeScript检查规则，支持自动修复样式和错误问题。
- **包管理器:** `pnpm`：内容寻址包管理器，安装速度更快，磁盘占用更少（参见`pnpm-lock.yaml`）。

完整依赖列表参见[package.json](package.json)。

## 🚀 开始使用

按照以下说明在本地运行项目。

### 前提条件

确保已安装以下软件：

- Node.js (推荐 >= 18.x 版本)
- 包管理器 (npm, yarn 或 pnpm)

```bash
node -v
npm -v
```

### 安装步骤

运行脚本

```bash
pnpm create trapar-waves
```

安装依赖

```bash
npm install
yarn install
pnpm install
```

## 🤝 贡献指南

欢迎贡献，非常感谢您的支持！请按照以下步骤进行贡献：

1. Fork 本仓库
2. 创建功能分支（`git checkout -b feature/amazing-feature`）
3. 提交您的更改（`git commit -m 'Add some amazing feature'`）
4. 推送到分支（`git push origin feature/amazing-feature`）
5. 打开Pull Request

## 👤 Author

- **Rikka:** (admin@rikka.cc)
- **GitHub Profile:** [Muromi-Rikka](https://github.com/Muromi-Rikka)

## 🔗 Links

- **仓库:** [https://github.com/cli-template/Trapar-waves](https://github.com/cli-template/Trapar-waves)
- **主页:** [https://github.com/cli-template/Trapar-waves](https://github.com/cli-template/Trapar-waves)
- **问题:** [https://github.com/cli-template/Trapar-waves/issues](https://github.com/cli-template/Trapar-waves/issues)
