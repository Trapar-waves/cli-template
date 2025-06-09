# @trapar-waves/cli-template

![npm version](https://img.shields.io/npm/v/@trapar-waves/cli-template)
![npm dm](https://img.shields.io/npm/dm/@trapar-waves/cli-template)
![License](https://img.shields.io/badge/license-MIT-green)
![GitHub last commit](https://img.shields.io/github/last-commit/Trapar-waves/cli-template)

> 現代的なツールと実践に基づいて構築されたCLI開発テンプレートです。TypeScriptサポート、tsupによるビルド、consolaによるロギング、destrによるデータ解析、picocolorsによるターミナルカラー出力、ESLintによるコードチェックなどの機能を統合し、高品質なCLIプロジェクトのセットアップを加速します。

## ✨ 特徴

* **CLIツールチェーン:** 開発時のTypeScript直接実行に使用する`ts-node`と、本番環境向けビルドに使用する`tsup`を統合し、デバッグからデプロイまでのフルワークフローをサポートします。
* **TypeScriptサポート:** 完全なTypeScript構成（`tsconfig.json`を含む）で、型チェックと自動補完を実装し、コードの保守性を確保します。
* **構造化ロギング:** `consola`を通じてレベル別ロギング（info/warn/error）、カスタムフォーマット、コンテキスト認識メッセージを実装し、デバッグ効率を向上させます。
* **データ解析:** CLI引数や設定ファイルなどのJSONライクデータを安全に解析する`destr`を組み込み、`JSON.parse`による例外を防ぎます。
* **ターミナルスタイリング:** クロスプラットフォーム対応の軽量ライブラリ`picocolors`を使用し、160種類以上のカラーコードとスタイル（太字/下線）をサポートし、CLIのインタラクティブ性を向上させます。
* **コード品質:** `@antfu/eslint-config`ベースのESLintを統合し、自動コードスタイルチェック、エラー検出、ベストプラクティスの適用を実現します。
* **高速ビルド:** `tsup`のデフォルト設定でES出力、ソースマップ、型宣言生成をサポートし、従来ツール比30%以上高速なビルドを実現します。

## 🚀 始め方

プロジェクトをローカルで実行する手順を以下に示します。

### 前提条件

以下がインストールされていることを確認してください：
* Node.js（推奨バージョン：18.x以上）
* パッケージマネージャ（npm、yarn、またはpnpm）
```bash
node -v
npm -v # または yarn -v または pnpm -v
```

### インストール

1. リポジトリをクローンします：
    ```bash
git clone https://github.com/Trapar-waves/cli-template.git
cd cli-template
```
2. 依存関係をインストールします：
    ```bash
# 好みのパッケージマネージャを使用
npm install
# または
yarn install
# または
pnpm install
```

## 🛠️ 使用方法

### 利用可能なスクリプト

`npm run <script>`、`yarn <script>`、または`pnpm <script>`で利用できる主要なスクリプト：

* `start`: 開発用に`ts-node`を使用してCLIツールを起動します。
* `start:node`: TypeScriptコンパイルをスキップし、Node.jsで直接CLIツールを実行します。
* `build`: `tsup`を使用して本番環境向けのビルドを生成します。
* `build:watch`: 開発中にファイル変更を監視し、自動的に再ビルドします。

例：
```bash
# 開発モードでCLIツールを実行
npm run start

# 本番環境向けにプロジェクトをビルド
npm run build
```

## 💻 技術スタック

コアテクノロジー（詳細な依存関係は[package.json](package.json)を参照）：

| カテゴリ         | ツール/ライブラリ   | 説明                                                                 |
|------------------|----------------------|----------------------------------------------------------------------|
| 言語             | TypeScript           | 静的型チェックと現代表記を備えたJavaScriptの型付きスーパーセット。       |
| ビルドツール     | tsup                 | esbuildベースの高速バンドラーで、ES、CommonJS、型宣言出力をサポート。     |
| ロギング         | consola              | レベル別メッセージ、カスタムテーマ、コンテキストサポートを備えた構造化ロギングライブラリ。 |
| データハンドリング | destr                | CLI引数などのJSONライク文字列を安全に解析し、`JSON.parse`エラーを防ぐ。   |
| ターミナルスタイリング | picocolors         | 160種類以上のカラーコードとスタイル（太字/下線）をサポートする軽量クロスプラットフォームターミナルカラーライブラリ。 |
| コードリンティング | ESLint + `@antfu/eslint-config` | スタイルとエラーの自動修正機能を備えた最新のJavaScript/TypeScriptリンティングルール。 |
| パッケージマネージャ | pnpm               | 高速インストールとディスク使用量削減を実現するコンテンツアドレス可能パッケージマネージャ（`pnpm-lock.yaml`参照）。 |

## 🤝 貢献

貢献を歓迎します！基本的なワークフローは以下の通りです：

1. **Issueの提出:** 問題または提案を[Issues](https://github.com/Trapar-waves/cli-template/issues)に記述してください（既存のIssueを確認してください）。
2. **ブランチの作成:** `main`ブランチから新しいブランチをチェックアウトします（例：`feat/new-command`または`fix/log-bug`）。
3. **コードの修正:** ESLintチェックを通過することを確認し（`npm run lint`）、必要に応じてテストを追加します。
4. **PRの提出:** 変更内容と目的を説明したPull Requestを`main`ブランチに作成してください。

注：貢献前に[コードスタイルガイド](https://github.com/antfu/eslint-config)（本プロジェクトのESLint設定に基づく）を確認してください。

## 📄 ライセンス

MITライセンスの下で配布されています。詳細は`LICENSE`ファイルを参照してください。

## 👤 作成者

* **Rikka** ([admin@rikka.cc](mailto:admin@rikka.cc))
* GitHub: [@Muromi-Rikka](https://github.com/Muromi-Rikka)

## 🔗 リンク

* **npmパッケージ:** [https://www.npmjs.com/package/@trapar-waves/cli-template](https://www.npmjs.com/package/@trapar-waves/cli-template)
* **リポジトリ:** [https://github.com/Trapar-waves/cli-template](https://github.com/Trapar-waves/cli-template)
* **Issueトラッカー:** [https://github.com/Trapar-waves/cli-template/issues](https://github.com/Trapar-waves/cli-template/issues)
