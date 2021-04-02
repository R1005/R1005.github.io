function chSession() {

    sessionStorage.setItem('loginUser', 'user');

    var data = sessionStorage.getItem('loginUser');
    console.log(data);

    sessionStorage.removeItem('loginUser');

}