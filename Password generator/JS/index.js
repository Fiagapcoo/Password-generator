function password(){
    var length = document.getElementById("length").value;
    var upper = document.getElementById("uppercase").checked;
    var lower = document.getElementById("lowercase").checked;
    var number = document.getElementById("numbers").checked;
    var symbol = document.getElementById("symbols").checked;
    var password = "";

    if(upper == true){
        password += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if(lower == true){
        password += "abcdefghijklmnopqrstuvwxyz";
    }
    if(number == true){
        password += "0123456789";
}
    if(symbol == true){
        password += "!@#$%^&*()_+";
    }
    var result = "";
    for(var i = 0; i < length; i++){
        result += password.charAt(Math.floor(Math.random() * password.length));
    }
    document.getElementById("password-display").innerHTML = result;
}