<?php

require_once('Models/Todo.php');

$id = $_POST['id'];
$task = $_POST['task'];

// それぞれの値がきちんと取れているか
// var_dumpで確認する
// var_dump($id);
// var_dump($task);

$todo = new Todo();
$todo->update($task, $id);

// トップページに戻す
header('Location: index.php');
