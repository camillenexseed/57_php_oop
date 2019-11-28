<?php

// どんなコードを書くか？

// 1. index.phpから渡ってきたidを取得
// 2. クラスをインスタンス化
// 3. メソッドを実行
// 4. index.phpにリダイレクトさせる

require_once('Models/Todo.php');

$id = $_GET['id'];
$todo = new Todo();
$todo->delete($id);

header('Location: index.php');
