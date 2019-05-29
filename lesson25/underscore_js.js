$(document).ready(function () {
    var numberRange = _.range(-50, 30, 4);
    $('.child').append("<p>1. Елементи в впорядкованому списку згідно завдання виглядають так: </p>")
    for (var i = 0; i < numberRange.length; i++){
        if( i == numberRange.length-1) {
            $('.child').append("<span> " + numberRange[i] + ".</span>");
            
        }else {
            $('.child').append("<span> " + numberRange[i] + ",</span>")
        };
        
    };
    var suffleRange = _.shuffle(numberRange);
    $('.child').append("<p>2. Елементи в списку після перемішування виглядають так: </p>")
    for (var i = 0; i < suffleRange.length; i++){
        if( i == suffleRange.length-1) {
            $('.child').append("<span> " + suffleRange[i] + ".</span>");
            
        }else {
            $('.child').append("<span> " + suffleRange[i] + ",</span>")
        };
        
    };
    $('.child').append("<p>3. При цьому індекси крайніх чисел тепер: </p>");
    $('.ulClass').append("<li>Індекс найменшого числа -"+ _.indexOf(suffleRange, _.min(suffleRange))+"</li>");
    $('.ulClass').append("<li>Індекс найбільшого числа -"+ _.indexOf(suffleRange, _.max(suffleRange))+"</li>");
});









