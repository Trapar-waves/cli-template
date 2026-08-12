# @trapar-waves/cli-template

![npm version](https://img.shields.io/npm/v/@trapar-waves/cli-template)
![npm dm](https://img.shields.io/npm/dm/@trapar-waves/cli-template)
![License](https://img.shields.io/github/license/Trapar-waves/cli-template)
![GitHub last commit](https://img.shields.io/github/last-commit/Trapar-waves/cli-template)
![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/Trapar-waves/cli-template/release.yml)
![Renovate](https://img.shields.io/badge/renovate-enabled-blue)

---

[English](../README.md) | [日本語](./README-JP.md) | [Русский язык](./README-RU.md)

> 别再从零搭建 CLI 项目了。用这个模板，分钟级启动你的命令行工具开发。

![cli-template hero](../assets/readme/hero.svg)

开箱即用的 Node.js CLI 开发模板。TypeScript 编译、打包构建、日志系统、代码规范、Git Hooks —— 全部预配置完毕，你只需要专注于实现 CLI 的核心逻辑。

```bash
# 一键创建你的 CLI 项目
pnpm create trapar-waves

# 立即开始开发
pnpm start
```

```
? Project name? › my-awesome-cli
my-awesome-cli
```

![功能特性](../assets/readme/headers/cn/features.svg)

### 开箱即用的能力

| 特性 | 工具 | 说明 |
|------|------|------|
| **类型安全** | TypeScript | 完整的类型检查 + 现代 ES 语法，编译期捕获运行时错误 |
| **极速构建** | tsup | 基于 esbuild 的打包器 —— 毫秒级生成单个优化 CJS 文件 |
| **结构化日志** | consola | 分级日志（info/warn/error）、交互式提示、美观的终端输出 |
| **安全解析** | destr | 解析 CLI 参数和配置文件，无需担心 `JSON.parse` 抛异常 |
| **终端着色** | picocolors | 跨平台终端颜色输出，160+ 颜色代码，零依赖、极致性能 |
| **代码规范** | ESLint + @antfu/eslint-config | 开箱即用的 lint 规则，覆盖 TypeScript、JSON、Markdown、YAML |
| **Git Hooks** | husky + lint-staged | 提交前自动检查，确保代码入库前始终规范 |
| **CI/CD 就绪** | GitHub Actions | 版本标签触发自动发布 npm + 生成 changelog |

### 为什么选择这个模板？

大多数 CLI 脚手架只给你一个 `console.log("hello")`，剩下的全靠自己。这个模板提供的是**完整的开发环境**：

- **零配置 TypeScript** —— `tsconfig.json` 已针对 CLI 开发场景调优，严格模式全开
- **一条命令构建** —— `pnpm build` 生成单个 `dist/run.js`，直接可发布
- **开发热重载** —— `pnpm start` 通过 ts-node 直接运行 TypeScript，无需等待构建
- **生产入口** —— `bin/run` 是干净的 Node.js 入口，加载编译后的产物
- **依赖自动更新** —— Renovate 机器人自动保持依赖版本最新

![技术栈](../assets/readme/headers/cn/tech-stack.svg)

```
语言       TypeScript 5.9    带类型的 JavaScript，现代语法
打包器     tsup 8.5          基于 esbuild，支持 ESM + CJS 输出
日志       consola 3.4       结构化日志 + 交互式提示
解析       destr 2.0         安全的 JSON 类字符串解析器
着色       picocolors 1.1    轻量级终端颜色库
代码检查   ESLint 10         @antfu/eslint-config 预设
Git Hooks  husky 9           Git 钩子管理
包管理器   pnpm 10           快速、节省磁盘的包管理器
```

完整依赖列表请查看 [package.json](../package.json)。

![快速开始](../assets/readme/headers/cn/getting-started.svg)

### 环境要求

- **Node.js** >= 18.x
- **pnpm**（推荐）或 npm/yarn

### 快速上手

```bash
# 1. 从模板创建新项目
pnpm create trapar-waves

# 2. 进入项目目录
cd your-project-name

# 3. 安装依赖
pnpm install

# 4. 开始开发（直接运行 TypeScript）
pnpm start
```

### 可用脚本

| 脚本 | 命令 | 说明 |
|------|------|------|
| `pnpm start` | `ts-node ./bin/run.ts` | 开发模式运行 CLI（TypeScript 直接执行，无需构建） |
| `pnpm start:node` | `node ./bin/run` | 运行编译后的生产产物 |
| `pnpm build` | `tsup-node` | 生产构建 → `dist/run.js` |
| `pnpm build:watch` | `tsup-node --watch` | 监听模式构建，适合开发调试 |
| `pnpm lint` | `eslint . --cache` | 运行 ESLint 检查 |

### 构建产物

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

构建产物是单个 `dist/run.js` 文件 —— 无外部依赖打包、启动速度快、可直接发布到 npm。

![项目结构](../assets/readme/headers/cn/project-structure.svg)

```
cli-template/
├── bin/
│   ├── run                    # 生产入口 (#!/usr/bin/env node)
│   └── run.ts                 # 开发入口（导入 src/index.ts）
├── src/
│   ├── index.ts               # ← 你的 CLI 逻辑写在这里
│   └── logger.ts              # 日志配置（consola）
├── dist/                      # 编译产物（tsup 生成）
│   └── run.js                 # 单个打包 CJS 文件
├── assets/readme/             # README 视觉资源
├── .github/workflows/         # CI/CD（发布 + npm 发布）
├── .husky/                    # Git 钩子（提交前 lint）
├── tsconfig.json              # TypeScript 配置
├── tsup.config.ts             # 构建配置
├── eslint.config.mjs          # ESLint 配置
├── lint-staged.config.js      # Lint-staged 配置
├── renovate.json              # 依赖更新机器人
└── package.json               # 项目元数据和脚本
```

### 自定义指南

**从这里开始：** `src/index.ts` —— 用你的 CLI 实现替换示例逻辑。

```typescript
// src/index.ts —— 替换为你的 CLI 代码
import { logger } from "./logger";

export async function run() {
  const projectName = await logger.prompt("Project name?", {
    type: "text",
  });

  logger.log(projectName);
}
```

**添加命令：** 安装 CLI 框架如 `commander`、`yargs` 或 `citty`，在 `run()` 函数中接入。

**添加依赖：** `pnpm add <package>` —— tsup 会自动打包。

**修改构建：** 编辑 `tsup.config.ts`，可开启 sourcemap、修改输出格式或添加入口点。

![参与贡献](../assets/readme/headers/cn/contributing.svg)

欢迎贡献！以下是参与方式：

1. Fork 本仓库
2. 创建特性分支（`git checkout -b feature/amazing-feature`）
3. 完成修改并确保 `pnpm lint` 通过
4. 提交更改（`git commit -m 'Add some amazing feature'`）
5. 推送到分支（`git push origin feature/amazing-feature`）
6. 创建 Pull Request

> **提示：** 提交时 pre-commit 钩子会自动对暂存文件执行 lint 检查。


![开源协议](../assets/readme/headers/cn/license.svg)

MIT License © 2025 Trapar Waves

## 👤 作者

- **Rikka：** [admin@rikka.cc](mailto:admin@rikka.cc)
- **GitHub 主页：** [Muromi-Rikka](https://github.com/Muromi-Rikka)

## 🔗 链接

- **仓库：** [https://github.com/Trapar-waves/cli-template](https://github.com/Trapar-waves/cli-template)
- **Issues：** [https://github.com/Trapar-waves/cli-template/issues](https://github.com/Trapar-waves/cli-template/issues)
- **npm：** [https://www.npmjs.com/package/@trapar-waves/cli-template](https://www.npmjs.com/package/@trapar-waves/cli-template)
