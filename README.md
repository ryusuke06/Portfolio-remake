# --caution-- 未完成です！！！RemakeではないPortfolioが動作品です。

## nuxt.js✖︎Ruby on Railsによるbackends for frontends環境の移行

### 挑戦理由
- ユーザー体験の向上（ドラッグアンドドロップでデータベース更新するなどの直感的なUI）
- 完全分業によりエラーの切り分けがしやすい、メンテナンスやアップデートが楽になるのではと考えた
- API通信を学ぶ一環
- フロント側と疎結合にすることによってアプリ対応などが比較的容易にできると聞いたため

### なぜnuxt.js?
- 導入のしやすさ。qiitaなどで同環境の文献が散見された。また公式ドキュメントが日本語化されているため。

### なぜド○クエ風？
- 幅広い世代がワクワクとしながら学べる環境といえばこれに違いないという妄言の元に着手
- あと僕が好き


![FireShot Capture 016 - front - localhost](https://user-images.githubusercontent.com/62837064/91458737-d4379a00-e8c0-11ea-99f7-af6aac69ac73.png)

※開発中の画面です。また画像はスマホサイズ版の表示です。

# ITQuest

## 開発環境

### フロントエンド
- nuxt.js @ v2.13.3
- vue.js @ v2.6.11
- node.js @ v12.18.2

### バックエンド
- Ruby @ v2.5.7-p206
- Ruby on Rails @ v5.2.4.3(APIモード)

### 仮想環境
- vagrant
- VirtualBox6.0 @ v6.0.14 r133895 (Qt5.6.3)

## サイト概要
- オンライン飲み会で使うソフトなど、普段利用しないIT技術で悩む人に２択の質問を複数回投げかけて最も適した答えを提示するWebサイト

### サイトテーマ
- 急激なオンライン化に伴って多くのソフトやその使い方に選択肢に悩む人達を助けたい

### テーマを選んだ理由
- IT技術に慣れ親しんでない人は意外にも前職の経験上、若い人にも多くこれから悩める人は増えてくると考えたため。
- もっとラフにIT技術に慣れ親しんで欲しいため。

### ターゲットユーザ
- ２０代後半から４０代後半の男性

### 主な利用シーン
- 例えばオンライン飲み会をしようと企画した際に何を使えばいいのか、どうやって使えばいいのかをサポートしたい。

### 実装機能(実装済)

- Vuetify
- レスポンシブ対応
- JWT認証(AuthModule, devise_token_auth)
- 買い物機能(ゴールドを消費して装備を買う)

## 設計書
https://drive.google.com/drive/folders/1ZC3q2xDVxVeQ57WcEgNPU13ec1KlpEjx
(IT知恵袋のものと同一)

### 機能一覧
https://drive.google.com/file/d/1tMGJcyn4RELr3zyjEn8zflr4nGQtr3V0/view?usp=sharing
(IT知恵袋のものと同一)
