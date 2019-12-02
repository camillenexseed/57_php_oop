<?
    // 他のファイルを呼び出すための組込関数
    // 一回しか実行されない
    require_once('Models/Todo.php');

    $task = $_POST['task'];

    $todo = new Todo();
    // メソッドcreateを使った
    $createdTaskId = $todo->create($task);

    $task = $todo->get($createdTaskId);
    // phpの配列をJS(JSON)にエンコードできる
    echo json_encode($task);

    exit();

    // 組み込み関数の一種
    // htmlより先に書く
    // header('Location: index.php');
