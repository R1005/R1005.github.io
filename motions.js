function sendMsg() {

    if ((document.getElementById('adressTextArea').value == "") && (document.getElementById('questionTextArea').value == "" )) {
        alert('メールアドレスと質問内容を記入してください');
    }

    else if ((document.getElementById('adressTextArea').value == "") && !(document.getElementById('questionTextArea').value == "" )) {
        alert('メールアドレスを記入してください');
    }

    else if (!(document.getElementById('adressTextArea').value == "") && (document.getElementById('questionTextArea').value == "" )) {
        alert('質問内容を記入してください');
    }

    else if (!(document.getElementById('adressTextArea').value == "") && !(document.getElementById('questionTextArea').value == "" )) {
        alert('送信されました');
        location.reload();
    }

}
