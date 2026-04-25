# @trapar-waves/cli-template

![npm version](https://img.shields.io/npm/v/@trapar-waves/cli-template)
![npm dm](https://img.shields.io/npm/dm/@trapar-waves/cli-template)
![License](https://img.shields.io/github/license/Trapar-waves/cli-template)
![GitHub last commit](https://img.shields.io/github/last-commit/Trapar-waves/cli-template)
![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/Trapar-waves/cli-template/release.yml)
![Renovate](https://img.shields.io/badge/renovate-enabled-blue)

---

[English](../README.md) | [中文](/readme/README-CN.md) | [Русский язык](/readme/README-RU.md)

> 現代的なツールを搭載したCLI開発テンプレートで、TypeScript、tsupビルドツール、consolaログシステム、その他のコアコンポーネントを統合し、高品質なCLIプロジェクトのセットアップを加速します。

## ✨ 特徴

- **CLIツールチェーン:** `ts-node`（開発中のTypeScript直接実行）と`tsup`（本番級ビルド）を統合し、デバッグからデプロイまでのフルワークフローをサポート。
- **TypeScriptサポート:** 型チェックとオートコンプリート機能を備えた完全なTypeScript設定（`tsconfig.json`を含む）で、コードの保守性を確保。
- **構造化ロギング:** `consola`を介したレベル付きロギング（info/warn/error）、カスタムフォーマット、コンテキスト対応メッセージを実装し、デバッグ効率を向上。
- **データ解析:** `destr`を組み込み、JSONライクデータ（CLI引数、設定ファイルなど）を安全に解析し、`JSON.parse`による例外を防止。
- **ターミナルスタイリング:** 軽量な`picocolors`を使用してクロスプラットフォームのターミナルカラーサポート（160+カラーコード）とスタイル（太字/下線）を実現し、CLIのインタラクティビティを向上。
- **コード品質:** `@antfu/eslint-config`に基づくESLintを統合し、自動コードスタイルチェック、エラー検出、ベストプラクティスの適用を実現。
- **高速ビルド:** `tsup`のデフォルト設定はESM出力、ソースマップ、型宣言生成をサポートし、従来のツールより30%以上高速なビルドを実現。

## 💻 技術スタック

- **言語:** `TypeScript`：静的型チェックと現代的な構文を備えたJavaScriptの型付きスーパーセット。
- **ビルドツール:** `tsup`：esbuildに基づく高速バンドラーで、ESM、CommonJS、型宣言出力をサポート。
- **ロギング:** `consola`：レベル付きメッセージ、カスタムテーマ、コンテキストサポートを備えた構造化ロギングライブラリ。
- **データ処理:** `destr`：JSONライク文字列（CLI引数など）の安全なパーサーで、`JSON.parse`エラーを防止。
- **ターミナルスタイリング:** `picocolors`：160+カラーコードとスタイル（太字/下線）を備えた軽量クロスプラットフォームターミナルカラーライブラリ。
- **コードリンティング:** `ESLint` + `@antfu/eslint-config`：スタイルとエラー問題の自動修正機能を備えた現代的なJavaScript/TypeScriptリンティングルール。
- **パッケージマネージャー:** `pnpm`：コンテンツアドレサブルパッケージマネージャーで、インストールが高速でディスク使用量が削減（`pnpm-lock.yaml`を参照）。

依存関係の完全なリストについては[package.json](package.json)を参照してください。

## 🚀 始め方

以下の手順に従ってプロジェクトをローカルで実行してください。

### 前提条件

以下がインストールされていることを確認してください：

- Node.js (推奨バージョン >= 18.x)
- パッケージマネージャー (npm, yarn または pnpm)

```bash
node -v
npm -v
```

### インストール

`create-trapar-waves` を使用して新しいプロジェクトの足場を構築する:

```bash
pnpm create trapar-waves
```

または、手動でテンプレートをセットアップする場合:

1. リポジトリをクローン:
   ```bash
   git clone https://github.com/Trapar-waves/cli-template.git
   cd cli-template
   ```
2. 依存関係をインストール:
   ```bash
   pnpm install
   # or
   npm install
   # or
   yarn install
   ```

### 開発

`ts-node` を使用して開発モードで CLI を実行:

```bash
pnpm start
# or
npm run start
```

### ビルド

`tsup` を使用して本番用 CLI をビルド:

```bash
pnpm build
# or
npm run build
```

これにより、コンパイルされた JavaScript が `dist` ディレクトリに出力されます。

## 🤝 コントリビューション

貢献は歓迎され、非常に高く評価されています！貢献するには以下の手順に従ってください：

1. リポジトリをフォークする
2. 機能ブランチを作成する（`git checkout -b feature/amazing-feature`）
3. 変更をコミットする（`git commit -m 'Add some amazing feature'`）
4. ブランチにプッシュする（`git push origin feature/amazing-feature`）
5. Pull Requestを開く

コミットする前に、`pnpm lint` を実行してコードがプロジェクトの linting ルールに準拠していることを確認してください。

## 👤 Author

- **Rikka:** (admin@rikka.cc)
- **GitHub Profile:** [Muromi-Rikka](https://github.com/Muromi-Rikka)

## 📄 ライセンス

このプロジェクトは MIT ライセンスの下でライセンスされています - 詳細については [LICENSE](../LICENSE) ファイルを参照してください。

## 🔗 Links

- **リポジトリ:** [https://github.com/Trapar-waves/cli-template](https://github.com/Trapar-waves/cli-template)
- **ホームページ:** [https://github.com/Trapar-waves/cli-template](https://github.com/Trapar-waves/cli-template)
- **イシュー:** [https://github.com/Trapar-waves/cli-template/issues](https://github.com/Trapar-waves/cli-template/issues)
