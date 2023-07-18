    function landPage(){
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    if (username == 'Keeno123' && password == '1234'){
        window.location.assign('./HTML/empty.html');
        alert("successful");
    }else{
        alert("unsuccessful");
        return;
    }
}
