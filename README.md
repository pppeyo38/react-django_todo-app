## ✅ TODOアプリ

ReactとDjangoのチュートリアルとしてつくるTODOアプリです。


## 🛠 使用ツール

フロントエンド：React, TypeScript, Vite

バックエンド：Django REST framework


## 🌱 ローカル環境構築に関するコマンド

### フロントエンド

フロントエンド用フォルダに移動
```
$ cd react-typescript
```

依存パッケージのインストール
```
$ yarn install
```

立ち上げ
```
$ yarn
```

### バックエンド

バックエンド用フォルダに移動
```
$ cd django_rest_framework_python
```

マイグレーションファイルの作成
```
$ python manage.py makemigrations todo_app
```

マイグレーションファイルをデータベースに適用
```
$ python manage.py migrate
```

サーバーの立ち上げ
```
$ python manage.py runserver
```
