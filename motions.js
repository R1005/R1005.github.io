function getAccessWay() {

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