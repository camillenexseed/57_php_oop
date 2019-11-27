# TODOアプリ作成

* 下準備
* DB連携
* タスク追加機能作成

## DB連携

DB連携できるようにDbConnectというクラスを作成する

## データの登録(Create)

create.php を作成し Todo.phpからTodoクラスを呼び出す
index.php から送られてきた値を取得し、Todoクラスを使ってレコードを追加する
index.phpにリダイレクトする

#データの登録(Read)

Todoクラスに全ての登録したデータを呼び出すメソッド追加。
エスケープ処理用のfunction.phpも追加
