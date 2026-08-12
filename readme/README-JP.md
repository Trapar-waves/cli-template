# @trapar-waves/cli-template

![npm version](https://img.shields.io/npm/v/@trapar-waves/cli-template)
![npm dm](https://img.shields.io/npm/dm/@trapar-waves/cli-template)
![License](https://img.shields.io/github/license/Trapar-waves/cli-template)
![GitHub last commit](https://img.shields.io/github/last-commit/Trapar-waves/cli-template)
![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/Trapar-waves/cli-template/release.yml)
![Renovate](https://img.shields.io/badge/renovate-enabled-blue)

---

[English](../README.md) | [中文](./README-CN.md) | [Русский язык](./README-RU.md)

> モダンなツールチェーンを活用した CLI 開発テンプレート。TypeScript、tsup ビルドツール、consola ロギングライブラリなどのコアコンポーネントを統合し、高品質な CLI プロジェクトのセットアップを加速します。

![cli-template hero](../assets/readme/hero.svg)

![Features](../assets/readme/headers/features.svg)

- **CLI ツールチェーン：** `ts-node`（開発時の TypeScript 直接実行用）と `tsup`（プロダクションビルド用）を統合し、デバッグからデプロイまでのフルワークフローをサポート。
- **TypeScript サポート：** `tsconfig.json` を含む完全な TypeScript 設定。型チェックと自動補完により、コードの保守性を確保。
- **構造化ログ：** `consola` を使用したレベル付きログ（info/warn/error）、カスタムフォーマット、コンテキスト対応メッセージでデバッグ効率を向上。
- **データパース：** 組み込みの `destr` で JSON ライクなデータ（CLI 引数、設定ファイルなど）を安全にパースし、`JSON.parse` の例外を防止。
- **ターミナルスタイリング：** 軽量な `picocolors` でクロスプラットフォームのターミナルカラー（160+ カラーコード）とスタイル（太字/下線）をサポートし、CLI のインタラクティビティを向上。
- **コード品質：** ESLint（`@antfu/eslint-config` ベース）を統合し、コードスタイルの自動チェック、エラー検出、ベストプラクティスの適用を実現。
- **Git Hooks：** `husky` と `lint-staged` を統合し、コミット前チェックを実行。

![Tech Stack](../assets/readme/headers/tech-stack.svg)

- **言語：** `TypeScript` — 静的型チェックとモダンな構文を備えた JavaScript の型付きスーパーセット。
- **ビルドツール：** `tsup` — esbuild ベースの高速バンドラー。ESM、CommonJS、型宣言出力をサポート。
- **ロギング：** `consola` — レベル付きメッセージ、カスタムテーマ、コンテキストサポートを備えた構造化ロギングライブラリ。
- **データ処理：** `destr` — JSON ライクな文字列（CLI 引数など）の安全なパーサー。`JSON.parse` エラーを防止。
- **ターミナルスタイリング：** `picocolors` — 160+ カラーコードとスタイル（太字/下線）を備えた軽量クロスプラットフォームターミナルカラーライブラリ。
- **コードリント：** `ESLint` + `@antfu/eslint-config` — スタイルとエラー問題の自動修正を備えたモダンな JavaScript/TypeScript リントルール。
- **パッケージマネージャー：** `pnpm` — 高速インストールとディスク使用量削減を実現するコンテンツアドレス型パッケージマネージャー。

依存関係の完全なリストは [package.json](../package.json) を参照してください。

![Getting Started](../assets/readme/headers/getting-started.svg)

### 前提条件

- Node.js（>= 18.x 推奨）
- パッケージマネージャー（npm、yarn、または pnpm）

### インストール

1. テンプレートを使用して新しいプロジェクトを作成：

   ```bash
   pnpm create trapar-waves
   ```

2. プロジェクトディレクトリに移動し、依存関係をインストール：

   ```bash
   pnpm install
   ```

3. 開発サーバーを起動：

   ```bash
   pnpm start
   ```

![Project Structure](../assets/readme/headers/project-structure.svg)

```
├── bin/                  # CLI エントリーポイント
│   ├── run               # 本番エントリースクリプト
│   └── run.ts            # 開発エントリースクリプト
├── src/                  # ソースコード
│   ├── index.ts          # メインアプリケーションロジック
│   └── logger.ts         # ロガー設定（consola）
├── dist/                 # コンパイル出力（tsup で生成）
├── tsconfig.json         # TypeScript 設定
├── eslint.config.mjs     # ESLint 設定
├── lint-staged.config.js # Lint-staged 設定
├── renovate.json         # Renovate ボット設定
└── package.json          # プロジェクトの依存関係とスクリプト
```

![Contributing](../assets/readme/headers/contributing.svg)

コントリビュートを歓迎します！以下の手順に従ってコントリビュートしてください：

1. リポジトリをフォーク
2. 機能ブランチを作成（`git checkout -b feature/amazing-feature`）
3. 変更をコミット（`git commit -m 'Add some amazing feature'`）
4. ブランチにプッシュ（`git push origin feature/amazing-feature`）
5. Pull Request を作成

![License](../assets/readme/headers/license.svg)

MIT License © 2025 Trapar Waves

## 👤 作者

- **Rikka：** [admin@rikka.cc](mailto:admin@rikka.cc)
- **GitHub プロフィール：** [Muromi-Rikka](https://github.com/Muromi-Rikka)

## 🔗 リンク

- **リポジトリ：** [https://github.com/Trapar-waves/cli-template](https://github.com/Trapar-waves/cli-template)
- **Issues：** [https://github.com/Trapar-waves/cli-template/issues](https://github.com/Trapar-waves/cli-template/issues)
