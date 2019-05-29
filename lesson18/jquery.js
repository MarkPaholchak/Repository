$(document).ready(function() {
    $('#needFill').css('margin', '0, auto');
    setTimeout(function() {
        $('#needFill').append('<li>Січень</li>');
    },1000);
    setTimeout(function() {
        $('#needFill').append('<li>Лютий</li>');
    },2000);
    setTimeout(function() {
        $('#needFill').append('<li>Березень</li>');
    },3000);
    setTimeout(function() {
        $('#needFill').append('<li>Квітень</li>');
    },4000);
    setTimeout(function() {
        $('#needFill').append('<li>Травень</li>');
    },5000);
    setTimeout(function() {
        $('#needFill').append('<li>Червень</li>');
    },6000);
    setTimeout(function() {
        $('#needFill').append('<li>Липень</li>');
    },7000);
    setTimeout(function() {
        $('#needFill').append('<li>Серпень</li>');
    },8000);
    setTimeout(function() {
        $('#needFill').append('<li>Вересень</li>');
    },9000);
    setTimeout(function() {
        $('#needFill').append('<li>Жовтень</li>');
    },10000);
    setTimeout(function() {
        $('#needFill').append('<li>Листопад</li>');
    },11000);
    setTimeout(function() {
        $('#needFill').append('<li>Грудень</li>');
    },12000);
    setTimeout(function () {
        $('li:odd').wrap('<div style="color:red"></div>');
    }, 13000)
})