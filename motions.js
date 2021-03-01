$(function(){
    
    var ua = navigator.userAgent;
    if(ua.indexOf("iPhone") > 0 || ua.indexOf("Android") > 0 && ua.indexOf("Mobile") > 0){
    console.log("スマートフォン用のコードを書く");
    }else{
    console.log("PC/タブレット用のコードを書く");
    }
  });

  <p id = "result"></p>


  // id属性で要素を取得
var textbox_element = document.getElementById('textbox');

// 新しいHTML要素を作成
var new_element = document.createElement('p');
new_element.textContent = '追加テキスト';

// 指定した要素の中の末尾に挿入
textbox_element.appendChild(new_element);


function getAccessWay() {
  var ta = document.getElementById('aff')
  var msg = ""
  var ut = navigator.userAgent;
  
  if(ut.indexOf('iPhone') > 0 || ut.indexOf('iPod') > 0 || ut.indexOf('Android') > 0 && ut.indexOf('Mobile') > 0){
    alert("Phine");
  }
  else if(ut.indexOf('iPad') > 0 || ut.indexOf('Android') > 0){
    alert("ipad");
  }
  else{
    alert("PC");
  }
  
  // ta.textContent = msg
}