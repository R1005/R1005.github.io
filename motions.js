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

var currentItemNum = 1;
var $slideContainer = $('.slider__container');
var slideItemNum = $('.slider__item').length;
var slideItemWidth = $('.slider__item').innerWidth();
var slideContainerWidth = slideItemWidth * slideItemNum;
var DURATION = 1000;

$slideContainer.attr('style', 'width:' + slideContainerWidth + 'px');

function autoSlide(){

    if(currentItemNum < slideItemNum){

        $slideContainer.animate({left: '-='+slideItemWidth+'px'}, DURATION);
        currentItemNum++;

    }else if(currentItemNum = slideItemNum){

        $slideContainer.css('left', '+='+slideItemWidth*(slideItemNum-1)+'px');
        currentItemNum = 1;//現在のスライド番号を１に戻す
    }
}

setInterval(autoSlide, 5000);
