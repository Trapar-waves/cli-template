# @trapar-waves/cli-template

![npm version](https://img.shields.io/npm/v/@trapar-waves/cli-template)
![npm dm](https://img.shields.io/npm/dm/@trapar-waves/cli-template)
![License](https://img.shields.io/github/license/Trapar-waves/cli-template)
![GitHub last commit](https://img.shields.io/github/last-commit/Trapar-waves/cli-template)
![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/Trapar-waves/cli-template/release.yml)
![Renovate](https://img.shields.io/badge/renovate-enabled-blue)

---

[English](../README.md) | [中文](./README-CN.md) | [Русский язык](./README-RU.md)

> ゼロからのセットアップはもう不要。数分で CLI ツールの開発を始められます。

![cli-template hero](../assets/readme/hero.svg)

すぐに使える Node.js CLI 開発テンプレート。TypeScript コンパイル、バンドル、ログシステム、コード品質管理、Git Hooks —— すべて設定済み。CLI のコアロジックの実装に集中できます。

```bash
# CLI プロジェクトを即座に作成
pnpm create trapar-waves

# すぐに開発開始
pnpm start
```

```
? Project name? › my-awesome-cli
my-awesome-cli
```

![機能](../assets/readme/headers/jp/features.svg)

### 標準装備の機能

| 機能 | ツール | 説明 |
|------|--------|------|
| **型安全** | TypeScript | 完全な型チェック + モダン ES 構文、コンパイル時にランタイムエラーを検出 |
| **高速ビルド** | tsup | esbuild ベースのバンドラー — ミリ秒単位で最適化された CJS ファイルを生成 |
| **構造化ログ** | consola | レベル付きログ（info/warn/error）、インタラクティブプロンプト、美しいターミナル出力 |
| **安全なパース** | destr | CLI 引数や設定ファイルを安全にパース、`JSON.parse` の例外を心配する必要なし |
| **ターミナルカラー** | picocolors | クロスプラットフォーム対応のターミナルカラー、160+ カラーコード、ゼロ依存 |
| **コード品質** | ESLint + @antfu/eslint-config | TypeScript、JSON、Markdown、YAML をカバーする即効性のある lint ルール |
| **Git Hooks** | husky + lint-staged | コミット前に自動チェック、リポジトリに常にクリーンなコードを保証 |
| **CI/CD 対応** | GitHub Actions | バージョンタグで npm 自動公開 + changelog 生成 |

### なぜこのテンプレートなのか？

多くの CLI スターターは `console.log("hello")` を渡すだけで、あとは全て自力で解決する必要があります。このテンプレートが提供するのは**完全な開発環境**です：

- **ゼロコンフィグ TypeScript** —— `tsconfig.json` は CLI 開発向けにチューニング済み、strict モード完全有効
- **ワンコマンドビルド** —— `pnpm build` で `dist/run.js` を生成、そのまま公開可能
- **開発ワークフロー** —— `pnpm start` が ts-node 経由で TypeScript を直接実行、ビルド不要
- **プロダクションエントリ** —— `bin/run` はコンパイル済み出力を利用するクリーンな Node.js エントリポイント
- **依存関係の自動更新** —— Renovate ボットが依存関係を自動的に最新に保ちます

![技術スタック](../assets/readme/headers/jp/tech-stack.svg)

```
言語       TypeScript 5.9    型付き JavaScript、モダン構文
バンドラー tsup 8.5          esbuild ベース、ESM + CJS 出力
ロギング   consola 3.4       構造化ログ + インタラクティブプロンプト
パース     destr 2.0         安全な JSON ライク文字列パーサー
カラー     picocolors 1.1    軽量ターミナルカラーライブラリ
リンティング ESLint 10       @antfu/eslint-config プリセット
Git Hooks  husky 9           Git フック管理
マネージャー pnpm 10         高速・ディスク効率の高いパッケージマネージャー
```

完全な依存関係の一覧は [package.json](../package.json) を参照してください。

![はじめに](../assets/readme/headers/jp/getting-started.svg)

### 前提条件

- **Node.js** >= 18.x
- **pnpm**（推奨）または npm/yarn

### クイックスタート

```bash
# 1. テンプレートから新しいプロジェクトを作成
pnpm create trapar-waves

# 2. プロジェクトディレクトリに移動
cd your-project-name

# 3. 依存関係をインストール
pnpm install

# 4. 開発開始（TypeScript を直接実行）
pnpm start
```

### 利用可能なスクリプト

| スクリプト | コマンド | 説明 |
|-----------|---------|------|
| `pnpm start` | `ts-node ./bin/run.ts` | 開発モードで CLI を実行（TypeScript 直接実行、ビルド不要） |
| `pnpm start:node` | `node ./bin/run` | コンパイル済みのプロダクション出力を実行 |
| `pnpm build` | `tsup-node` | プロダクションビルド → `dist/run.js` |
| `pnpm build:watch` | `tsup-node --watch` | ウォッチモードでビルド、開発デバッグに最適 |
| `pnpm lint` | `eslint . --cache` | ESLint チェックを実行 |

### ビルド出力

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

ビルド产物は単一の `dist/run.js` ファイル —— 外部依存のバンドルなし、高速スタートアップ、npm にそのまま公開可能。

![プロジェクト構成](../assets/readme/headers/jp/project-structure.svg)

```
cli-template/
├── bin/
│   ├── run                    # プロダクションエントリ (#!/usr/bin/env node)
│   └── run.ts                 # 開発エントリ（src/index.ts をインポート）
├── src/
│   ├── index.ts               # ← あなたの CLI ロジックをここに記述
│   └── logger.ts              # ロガー設定（consola）
├── dist/                      # コンパイル出力（tsup で生成）
│   └── run.js                 # バンドル済み CJS ファイル
├── assets/readme/             # README ビジュアルアセット
├── .github/workflows/         # CI/CD（リリース + npm 公開）
├── .husky/                    # Git フック（コミット前 lint）
├── tsconfig.json              # TypeScript 設定
├── tsup.config.ts             # ビルド設定
├── eslint.config.mjs          # ESLint 設定
├── lint-staged.config.js      # Lint-staged 設定
├── renovate.json              # 依存関係更新ボット
└── package.json               # プロジェクトメタデータとスクリプト
```

### カスタマイズガイド

**ここから始めましょう：** `src/index.ts` —— デモロジックをあなたの CLI 実装に置き換えます。

```typescript
// src/index.ts —— あなたの CLI コードに置き換えてください
import { logger } from "./logger";

export async function run() {
  const projectName = await logger.prompt("Project name?", {
    type: "text",
  });

  logger.log(projectName);
}
```

**コマンドを追加：** `commander`、`yargs`、`citty` などの CLI フレームワークをインストールし、`run()` 関数に接続します。

**依存関係を追加：** `pnpm add <package>` —— tsup が自動的にバンドルします。

**ビルドを変更：** `tsup.config.ts` を編集して、sourcemap の有効化、出力フォーマットの変更、エントリポイントの追加ができます。

![コントリビュート](../assets/readme/headers/jp/contributing.svg)

コントリビュートを歓迎します！以下の手順で参加してください：

1. リポジトリをフォーク
2. 機能ブランチを作成（`git checkout -b feature/amazing-feature`）
3. 変更を加え、`pnpm lint` が通ることを確認
4. 変更をコミット（`git commit -m 'Add some amazing feature'`）
5. ブランチにプッシュ（`git push origin feature/amazing-feature`）
6. Pull Request を作成

> **注意：** コミット時に pre-commit フックがステージされたファイルに対して自動的に lint を実行します。

![ライセンス](../assets/readme/headers/jp/license.svg)

MIT License © 2025 Trapar Waves

## 👤 作者

- **Rikka：** [admin@rikka.cc](mailto:admin@rikka.cc)
- **GitHub プロフィール：** [Muromi-Rikka](https://github.com/Muromi-Rikka)

## 🔗 リンク

- **リポジトリ：** [https://github.com/Trapar-waves/cli-template](https://github.com/Trapar-waves/cli-template)
- **Issues：** [https://github.com/Trapar-waves/cli-template/issues](https://github.com/Trapar-waves/cli-template/issues)
- **npm：** [https://www.npmjs.com/package/@trapar-waves/cli-template](https://www.npmjs.com/package/@trapar-waves/cli-template)
