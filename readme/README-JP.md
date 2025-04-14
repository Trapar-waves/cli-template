# @trapar-waves/cli-template

![npm version](https://img.shields.io/npm/v/@trapar-waves/cli-template)
![npm dm](https://img.shields.io/npm/dm/@trapar-waves/cli-template)
![License](https://img.shields.io/badge/license-MIT-green)
![GitHub last commit](https://img.shields.io/github/last-commit/Trapar-waves/cli-template)

> 現代的なツールとアプローチを活用して構築されたCLIテンプレートプロジェクトです。

## ✨ 主な特徴

* **CLIツール:** `ts-node` と `tsup` を利用したコマンドラインインターフェース（CLI）ツールを提供し、スクリプトの実行やビルドプロセスを効率化します。
* **モダンなTypeScriptサポート:** TypeScriptを導入し、開発時の型安全性を確保するとともに、コード品質を高めます。
* **効果的なログ管理:** 構造化されたカスタマイズ可能なログ出力を提供する `consola` を使用し、デバッグを効率化します。
* **データ解析の効率化:** JSON形式のデータ構造を解析・文字列化できる `destr` を活用し、設定やデータ処理を支援します。
* **カラフルなターミナル出力:** 軽量なスタイリングライブラリ `picocolors` を採用し、視認性の高いCLI出力を実現します。
* **コードの品質管理:** `@antfu/eslint-config` とESLintを統合し、保守しやすく一貫性のあるクリーンなコードを目指します。
* **高速なビルドプロセス:** TypeScriptプロジェクト向けに `tsup` を活用し、最適化されたビルドを提供します。

## 🚀 始め方

プロジェクトをローカルで実行する手順を説明します。

### 前提条件

以下のツールがインストールされていることを確認してください：
* Node.js（18.x以上を推奨）
* パッケージマネージャ（npm、yarn、またはpnpm）
```bash
node -v
npm -v # または yarn -v または pnpm -v
```

### インストール手順

1. リポジトリをクローンします：
    ```bash
    git clone https://github.com/Trapar-waves/cli-template.git
    cd cli-template
    ```
2. 依存関係をインストールします：
    ```bash
    # 使用したいパッケージマネージャを選択してください
    npm install
    # または
    yarn install
    # または
    pnpm install
    ```

## 🛠️ 使用方法

### 使用可能なスクリプト

`npm run <script>`、`yarn <script>`、または `pnpm <script>` で利用可能な主要なスクリプトを紹介します：

* `start`: 開発用に `ts-node` を使用してCLIツールを起動します。
* `start:node`: TypeScriptのコンパイルを省略し、Node.jsで直接CLIツールを実行します。
* `build`: `tsup` を使用して本番環境向けのビルドを生成します。
* `build:watch`: 開発中にファイルの変更を監視し、自動的に再ビルドを行います。

例：
```bash
# 開発モードでCLIツールを実行
npm run start

# 本番環境向けにプロジェクトをビルド
npm run build
```

## 💻 使用技術

このプロジェクトで採用されている主要な技術スタックは以下の通りです：

* **フレームワーク/ライブラリ:** Node.jsベースで構築されたCLIツール
* **言語:** 型安全性を重視したTypeScript
* **ログ管理:** 高度なログ機能を提供する `consola`
* **ビルドツール:** 効率的なビルドを実現する `tsup`
* **コード品質管理:** `@antfu/eslint-config` とESLintによるクリーンなコードの維持

依存関係の詳細については [package.json](package.json) をご参照ください。

## 🤝 貢献

貢献を歓迎しております！ぜひプロジェクトをフォークしてPull Requestをご送信ください。

## 📄 ライセンス

本プロジェクトは **MITライセンス** の下で配布されています。詳細は `LICENSE` ファイルをご覧ください。

## 👤 作成者

* **Rikka** ([admin@rikka.cc](mailto:admin@rikka.cc))
* GitHub: [@Muromi-Rikka](https://github.com/Muromi-Rikka)

## 🔗 リンク

* **リポジトリ:** [https://github.com/Trapar-waves/cli-template](https://github.com/Trapar-waves/cli-template)
* **ホームページ:** [https://github.com/Trapar-waves/cli-template](https://github.com/Trapar-waves/cli-template)
* **問題報告:** [https://github.com/Trapar-waves/cli-template/issues](https://github.com/Trapar-waves/cli-template/issues)
