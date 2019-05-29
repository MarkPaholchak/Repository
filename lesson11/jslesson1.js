function show(data) {
    console.log(data)
}

//1

function myFunct(textval) {
    var Arrtext = textval.split('');
    for (var i = 0; i<Arrtext.length; ++i) {
        if (i == 0) { 
            Arrtext[0] = Arrtext[i].charAt(0).toUpperCase();   
        } else { continue}
        
    }
    textval = Arrtext.join('');
    return textval
}

show(myFunct('terry'));

//2

function truncate (str, maxlength) {
    if (str.length > maxlength) {
        str = str.substring(0, maxlength - 3);
        str = str.concat('...');
        return str
    } else { return str}
}

show(truncate("Ось, що мені хотілося б сказати на цю тему:", 20));

//3

function extractCurrencyValue(str) {
    var check = str.indexOf('$') + 1;
    return parseInt(str.substr(check));
}
show(extractCurrencyValue('$120'))

















