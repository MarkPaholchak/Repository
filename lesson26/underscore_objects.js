class Automobile {
    constructor(brandName){
        this.brandName = brandName;
    }
    setModel(model) {
        this.model = model;
    }
    setProductionYear(year) {
        this.productionYear = year;
    }
};
var autocar = _.create(Automobile.prototype, {brandName: 'Toyota', model: 'L500', productionYear: 2006});
console.log(autocar);
var invertCar = _.invert(autocar);
console.log(invertCar);
console.log(_.pick(autocar, 'brandName', 'productionYear'));
console.log(_.omit(autocar, 'model'));

$(document).ready(function () {
    $('.child').append("<p>1. Елементи в об'єкті згідно завдання виглядають так: </p>" + "<p>"+JSON.stringify(autocar)+"</p>")
    $('.child').append("<p>2. Елементи в об'єкті після інверсії виглядають так: </p> " + "<p>"+JSON.stringify(invertCar)+"</p>")
    $('.child').append("<p>3. При цьому виведені поля об'єкта окрім model виглядають так (насправді вони однакові) : </p>");
    $('.ulClass').append('<li>Використовуючи метод <span class="pick">pick</span>'+ JSON.stringify(_.pick(autocar, 'brandName', 'productionYear'))+"</li>" );
    $('.ulClass').append('<li>Використовуючи метод <span class="omit">omit</span>'+ JSON.stringify(_.omit(autocar, 'model'))+"</li>");
});
