<?
    // 他のファイルを呼び出すための組込関数
    // 一回しか実行されない
    require_once('Models/Todo.php');

    $task = $_POST['task'];

    $todo = new Todo();
    $todo->create($task);
