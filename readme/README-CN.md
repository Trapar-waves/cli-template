# @trapar-waves/cli-template

![npm 版本](https://img.shields.io/npm/v/@trapar-waves/cli-template)
![npm 月下载量](https://img.shields.io/npm/dm/@trapar-waves/cli-template)
![许可证](https://img.shields.io/badge/license-MIT-green)
![GitHub 最后提交](https://img.shields.io/github/last-commit/Trapar-waves/cli-template)

> 一个由现代工具驱动的CLI开发模板，集成TypeScript、用于构建的tsup、用于日志记录的consola等核心组件，加速高质量CLI项目的搭建。

## ✨ 特性

* **CLI工具链**：集成`ts-node`（开发期直接执行TypeScript）和`tsup`（生产级构建），支持从调试到部署的完整工作流。
* **TypeScript支持**：完整的TypeScript配置（含`tsconfig.json`），提供类型检查和自动补全功能，保障代码可维护性。
* **结构化日志**：通过`consola`实现分级日志（info/warn/error）、自定义格式和上下文感知消息，提升调试效率。
* **数据解析**：内置`destr`用于安全解析JSON-like数据（如CLI参数、配置文件），避免`JSON.parse`引发的异常。
* **终端样式**：使用轻量级`picocolors`库实现跨平台终端颜色支持（160+颜色代码）和样式（加粗/下划线），增强CLI交互性。
* **代码质量**：集成基于`@antfu/eslint-config`的ESLint，自动检查代码风格、检测错误并执行最佳实践。
* **快速构建**：`tsup`默认配置支持ESM输出、源映射和类型声明生成，构建速度较传统工具提升30%以上。

## 🚀 快速开始

按照以下说明在本地运行项目。

### 前置条件

* 确保已安装以下工具：
    * Node.js（推荐版本 >= 18.x）
    * 包管理器（npm、yarn或pnpm）
    ```bash
    node -v
    npm -v # 或 yarn -v 或 pnpm -v
    ```

### 安装

1. 克隆仓库：
    ```bash
    git clone https://github.com/Trapar-waves/cli-template.git
    cd cli-template
    ```
2. 安装依赖：
    ```bash
    # 使用偏好的包管理器
    npm install
    # 或
    yarn install
    # 或
    pnpm install
    ```

## 🛠️ 使用方法

### 可用脚本

通过`npm run <script>`、`yarn <script>`或`pnpm <script>`运行以下脚本：

* `start`：使用`ts-node`启动CLI工具（开发用途）。
* `start:node`：直接通过Node.js运行CLI工具（跳过TypeScript编译）。
* `build`：使用`tsup`构建生产就绪版本。
* `build:watch`：监听文件变化并自动重新构建（开发期持续构建）。

示例：
```bash
# 开发模式运行CLI工具
npm run start

# 构建生产版本
npm run build
```

## 💻 技术栈

核心技术（完整依赖见[package.json](package.json)）：

| 分类         | 工具/库          | 描述                                                                 |
|--------------|------------------|----------------------------------------------------------------------|
| 语言         | TypeScript       | JavaScript的类型化超集，提供静态类型检查和现代语法支持。             |
| 构建工具     | tsup             | 基于esbuild的快速打包工具，支持生成ESM、CommonJS和类型声明文件。       |
| 日志记录     | consola          | 结构化日志库，支持分级消息、自定义主题和上下文支持。                 |
| 数据处理     | destr            | JSON-like字符串的安全解析工具（如CLI参数），防止`JSON.parse`错误。    |
| 终端样式     | picocolors       | 轻量级跨平台终端颜色库，支持160+颜色代码和样式（加粗/下划线）。       |
| 代码检查     | ESLint + `@antfu/eslint-config` | 现代JavaScript/TypeScript linting规则，自动修复代码风格和错误问题。 |
| 包管理器     | pnpm             | 基于内容寻址的包管理器，安装更快且磁盘占用更少（见`pnpm-lock.yaml`）。 |

## 🤝 贡献指南

欢迎贡献！基本流程如下：

1. **提交Issue**：在[Issues](https://github.com/Trapar-waves/cli-template/issues)中描述问题或建议（先搜索是否已有同类Issue）。
2. **创建分支**：从`main`分支检出新分支（如`feat/new-command`或`fix/log-bug`）。
3. **修改代码**：确保通过ESLint检查（运行`npm run lint`），如有需要补充测试。
4. **提交PR**：创建指向`main`分支的Pull Request，描述修改内容和动机。

注：贡献前建议阅读[代码风格指南](https://github.com/antfu/eslint-config)（基于本项目ESLint配置）。

## 📄 许可证

采用**MIT许可证**发布。详见`LICENSE`文件。

## 👤 作者

* **Rikka** ([admin@rikka.cc](mailto:admin@rikka.cc))
* GitHub: [@Muromi-Rikka](https://github.com/Muromi-Rikka)

## 🔗 链接

* **npm包**：[https://www.npmjs.com/package/@trapar-waves/cli-template](https://www.npmjs.com/package/@trapar-waves/cli-template)
* **代码仓库**：[https://github.com/Trapar-waves/cli-template](https://github.com/Trapar-waves/cli-template)
* **问题追踪**：[https://github.com/Trapar-waves/cli-template/issues](https://github.com/Trapar-waves/cli-template/issues)
