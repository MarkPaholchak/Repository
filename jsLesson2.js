var login = prompt('Enter Login');

if ( login == "Admin") {
    
    alert("Password?");
    var password = prompt('Enter Password');
    if (password == "TheMaster") {
        alert("Welcome!")
    } else if(password == null) {
        alert("Canceled.")
    }else {
        alert("Wrong password")
    }   
} else if(login == null){
    alert("Canceled.");
} else {
    alert("I don't know you.");
}

//new row