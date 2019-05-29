var login = prompt('Enter Login');

switch (login) {
    case "Admin":
        alert("Password?");
        var password = prompt('Enter Password');
        switch (password) {
            case "TheMaster":
                alert("Welcome!");
                break;
            case null:
                alert("Canceled.");
                break;
            default : 
                alert("Wrong password");
                break;  
        } break;  
    case null:
        alert("Canceled.");
        break;
    default :
        alert("I don't know you.");
        break;
}
