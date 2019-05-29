$(document).ready(function () {
    $('#getData').click(function() {
        
        var inputData = {
            name : formatica.userName.value ,
            age : formatica.userAge.value
        };
        debugger;
        console.log(cookieString);
        localStorage.setItem('User1Data', JSON.stringify(inputData));
        var cookieString = formatica.userName.value + '=' + formatica.userAge.value;
        document.cookie = cookieString;
    });
});