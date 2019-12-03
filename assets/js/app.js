// DOMが読み込まれてから実行する
$(function () {

    // 正規表現
    // [id^="js-delete-btn-"]
    $(document).on('click', '[id^="js-delete-btn-"]', function (e) {
        //eはクリックされた要素
        //クリックされた要素のデフォルトの機能(別ページへ飛ぶ)を無効にする
        e.preventDefault();

        // 削除したいレコードのID
        // id >>> 属性/ class >>> 属性
        // .attr()jQueryのメソッド
        // この # の 　番目より後ろの文字を使う
        let id = $(this).attr('id').substr('14');
        deleteTask(id);
    });

    // 削除するための関数を作成します
    function deleteTask(id) {
        $.ajax({
            url: 'delete.php?id=' + id,
            type: 'GET',
            dataType: 'json'
        })
            .then(

            )
    }


    //この文書上で　#js-add-task　が クリックされたら
    $(document).on('click', '#js-add-task', function (e) {
        //GETの送信をやめさせるために
        e.preventDefault();
        let task = $('#js-task');
        // .val()
        // value属性を取得している
        // console.log(task.val());
        createTask(task.val())
    });

    function createTask(task) {
        $.ajax({
            url: 'create.php',//ファイル名
            type: 'POST',//レスポンスの種類
            dataType: 'json',//使いやすいものに
            data: {
                task: task//格納される場所
            }
        })
            .then(
                //成功した時の処理
                function (task) {
                    // console.log(task);
                    renderTask(task)
                },
                //失敗したら
                function () {

                }
            )
    }

    //画面に追加したtaskを表示する
    function renderTask(task) {
        // ある要素の中の後ろにhtmlを追加
        // prependは前
        $('tbody').append(
            `<tr><td>${task.name}</td>
                <td>${task.due_date}</td>
                <td></td>
                <td></td>
            </tr>`
        )
    }
});
