<?
    // 他のファイルを呼び出すための組込関数
    // 一回しか実行されない
    require_once('Models/Todo.php');

    $task = $_POST['task'];

    $todo = new Todo();
    // メソッドcreateを使った
    $todo->create($task);

    // 組み込み関数の一種
    // htmlより先に書く
    header('Location: index.php');
