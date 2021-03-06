function getAccessWay() {

  var textbox_element = document.getElementById('aff');

// 新しいHTML要素を作成
  var new_element = document.createElement('div');
  new_element.textContent = '<div id = "aff"><div class = "aff_left"><a href = "pc.moppy.jp/entry/invite.php?invite=T63de169&type=service" target = "_blank" rel = "noopener noreferrer"><img src = "img.moppy.jp/pub/pc/friend/120x600-11.jpg" class = "aff_img"></a></div><div class = "aff_right"><a href = "pc.moppy.jp/entry/invite.php?invite=T63de169&type=service" target = "_blank"><img src = "img.moppy.jp/pub/pc/friend/120x600-3.jpg" class = "aff_img"></a></div></div>';

// 指定した要素の中の末尾に挿入
  textbox_element.appendChild(new_element);

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

}