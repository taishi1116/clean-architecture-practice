# what is clean-architecture-practice

クリーンアーキテクチャの学習リポジトリ

# ディレクトリ構成

- domain
  - クリーンアーキテクチャの`entity`に該当する
  - ドメインに関するロジックしか持たず、ソフトウェアには一切依存しない
  - ドメインどうしをまたぐのはあり
- application
  - クリーンアーキテクチャの`usecases`に該当する
  - ソフトウェア独自のロジックをもつ(バリデーションとか)
- interface
  - クリーンアーキテクチャの`interface & adapters`に該当する
  - 外部要件(DBとかUI)とドメインの変換を実施する場所
- infrastructure
  - クリーンアーキテクチャの`frameworks & drivers`に該当する
  - 実際のDBやサードパーティ製ツール、フレームワークなど

# 作るもの

todoリストの管理API
