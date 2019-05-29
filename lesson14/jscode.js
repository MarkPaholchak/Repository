function textFilling() {
    var elements = document.getElementsByTagName('li');
    for(var i = 0; i<elements.length; i++){
        elements[i].innerHTML = 'Lorem ipsum lectus nibh arcu eros sem eget cursus rutrum malesuada morbi, diam et mauris.';
    }
    var div = document.createElement('div');
    div.innerHTML ="На сторінці показано " + elements.length +  "  елементів \'li\' .";
    document.body.appendChild(div);
}