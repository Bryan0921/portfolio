function checkForm() {
    var name = $("#name").val();
    var hurigana = $("#hurigana").val();
    var username = $("#username").val();
    var email = $("#email").val();
    var message = $("#message").val();
    var result = true;
    var error = "";

    if (name == "") {
        error += "名前を入力してください\n";
        result = false;
    } else if (name.length > 25) {
        error += "名前は25文字以内で入力してください\n";
        result = false;
    }

    if (hurigana == "") {
        error += "フリガナを入力してください\n";
        result = false;
    } else if (hurigana.length > 25) {
        error += "フリガナは25文字以内で入力してください\n";
        result = false;
    }

    if (username == "") {
        error += "ユーザー名を入力してください\n";
        result = false;
    } else if (username.length > 25) {
        error += "ユーザー名は25文字以内で入力してください\n";
        result = false;
    }

    if (number == "") {
        error += "電話番号を入力してください\n";
        result = false;
    } else if (number.length < 10) {
        error += "電話番号は10桁以上で入力してください\n";
        result = false;
    }

    if (email == "") {
        error += "メールアドレスを入力してください\n";
        result = false;
    } else if (email.length > 25) {
        error += "メールアドレスは25文字以内で入力してください\n";
        result = false;
    } else if (!email.match(/^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/)) {
        error += "正しいメールアドレスを入力してください\n";
        result = false;
    }

    if (message == "") {
        error += "メッセージを入力してください\n";
        result = false;
    }

    if (!error == "") {
        alert(error);
        return result;
    } else {
        alert('メッセージを送信しました');
        return result;
    }

}

$('.container h1').hover(
    function () {
        $('.container p').css('opacity', '1');
    },
    function () {
        $('.container p').css('opacity', '0');
    }
);
