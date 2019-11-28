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

## データの登録(Read)

Todoクラスに全ての登録したデータを呼び出すメソッド追加。
エスケープ処理用のfunction.phpも追加

## データの更新(Update)

タスクの更新処理機能の追加。更新用のページ(UI)のファイルをEdit.php、実際の更新するファイルをupdate.phpとする。
getメソッドを作成し、指定したidのレコードを取得し、updateメソッドで更新処理をします。
処理後はトップページへのリダイレクトさせます。

## データの削除(Delete)

削除機能を追加。Models/Todo.php内にメソッドdeleteを作成。
データの削除後index.phpにリダイレクトさせる。
