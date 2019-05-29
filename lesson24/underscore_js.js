$(document).ready(function () {
    var carTable = [
        {
            brandName: 'Acura',
            model: 'NSX',
            productionYear: '2006'
        },
        {
            brandName: 'BMW',
            model: 'X6',
            productionYear: '2008'
        },
        {
            brandName: 'Honda',
            model: 'Odyssey',
            productionYear: '2006'
        },
        {
            brandName: 'Honda',
            model: 'Civic',
            productionYear: '2006'
        },
        {
            brandName: 'Audi',
            model: 'Q7',
            productionYear: '2018'
        },
        {
            brandName: 'Audi',
            model: 'A8',
            productionYear: '2009'
        },
        {
            brandName: 'BMW',
            model: 'M-Series',
            productionYear: '2018'
        },
        {
            brandName: 'Buick',
            model: 'Lucerne',
            productionYear: '2015'
        },
        {
            brandName: 'Cadilac',
            model: 'XLR',
            productionYear: '2001'
        }
    ];
    $('.father').append("<li>Сам об'єкт виглядає от так: <br>" + JSON.stringify(carTable) + "</li>");
    var groupByBrand = _.groupBy(carTable, 'brandName');
    console.log(groupByBrand);
    $('.father').append("<li> Список, відсортований за назвами брендів, присутніх у списку, виглядає ось так: <br>" + Object.keys(groupByBrand) + "</li>");

    var groupByModel = _.groupBy(carTable, 'model');
    console.log(groupByModel);
    $('.father').append("<li>Список, відсортований за моделями машин, які присутні у списку, виглядає так: <br>" + Object.keys(groupByModel) + "</li>");

    var groupByYear = _.groupBy(carTable, 'productionYear');
    console.log(groupByYear);
    var minYear = _.min(carTable, function (o) {
        return o.productionYear;
    });
    var maxYear = _.max(carTable, function (o) {
        return o.productionYear;
    });
    $('.father').append("<li> Список, відсортований за датою випуску машини, виглядає от так: <br>" + Object.keys(groupByYear) + "</li>");
    $('.father').append("<li>Об'єкт з найстарішою машиною з колекції - " + JSON.stringify(minYear) + " ,<br> з найновішою - " + JSON.stringify(maxYear) + " .</li>");

    $("input[type='button']").on("click", function () {
        _.each(carTable, function (o) {
            o.productionYear = prompt('Потрібно ввести 9 нових дат');
        });
        var groupByYear2 = _.groupBy(carTable, 'productionYear');
        console.log(groupByYear2);
        $('.father').append("<li class='newLi'> Список, відсортований за датою випуску машини, після додаткового введення дати випуску,  виглядає от так: <br>" + Object.keys(groupByYear2) + "</li>");
        $('.father>li:last-child').addClass('newLi');
        var minYear2 = _.min(carTable, function (o) {
            return o.productionYear;
        });
        var maxYear2 = _.max(carTable, function (o) {
            return o.productionYear;
        });

        $('.father').append("<li> Після додаткового введення дати випуску, об'єкт з найстарішою машиною з колекції - " + JSON.stringify(minYear2) + " ,<br> з найновішою - " + JSON.stringify(maxYear2) + " .</li>");
        $('.father>li:last-child').addClass('newLi');
    })

});









//    $('.father').append("<li>1 car</li>");
//    $('.father>li:nth-child(1)').append("<ul class='li1class'></ul>");
//    $('.li1class').append('<li>Brand name: ' + carTable[0].brandName + '</li>');
//    $('.li1class').append('<li>Model: ' + carTable[0].model + '</li>');
//    $('.li1class').append('<li>Production year: ' + carTable[0].productionYear + ' ' + '</li>');
//    $('.father').append("<li>2 car</li>");
//    $('.father>li:nth-child(2)').append("<ul class='li2class'></ul>");
//    $('.li2class').append('<li>Brand name: ' + carTable[1].brandName + '</li>');
//    $('.li2class').append('<li>Model: ' + carTable[1].model + '</li>');
//    $('.li2class').append('<li>Production year: ' + carTable[1].productionYear +' ' + '</li>');
//    $('.father').append("<li>3 car</li>");
//    $('.father>li:nth-child(3)').append("<ul class='li3class'></ul>");
//    $('.li3class').append('<li>Brand name: ' + carTable[2].brandName + '</li>');
//    $('.li3class').append('<li>Model: ' + carTable[2].model + '</li>');
//    $('.li3class').append('<li>Production year: ' + carTable[2].productionYear +' ' + '</li>');
//    $('.father').append("<li>4 car</li>");
//    $('.father>li:nth-child(4)').append("<ul class='li4class'></ul>");
//    $('.li4class').append('<li>Brand name: ' + carTable[3].brandName + '</li>');
//    $('.li4class').append('<li>Model: ' + carTable[3].model + '</li>');
//    $('.li4class').append('<li>Production year: ' + carTable[3].productionYear +' ' + '</li>');
//    $('.father').append("<li>5 car</li>");
//    $('.father>li:nth-child(5)').append("<ul class='li5class'></ul>");
//    $('.li5class').append('<li>Brand name: ' + carTable[4].brandName + '</li>');
//    $('.li5class').append('<li>Model: ' + carTable[4].model + ' </li>');
//    $('.li5class').append('<li>Production year: ' + carTable[4].productionYear +' ' + '</li>');
//    $('.li1class>li:last-child').append('<input type="button" value="ChangeYear" id="button1">');
//    $('.li2class>li:last-child').append('<input type="button" value="ChangeYear" id="button2">');
//    $('.li3class>li:last-child').append('<input type="button" value="ChangeYear" id="button3">');
//    $('.li4class>li:last-child').append('<input type="button" value="ChangeYear" id="button4">');
//    $('.li5class>li:last-child').append('<input type="button" value="ChangeYear" id="button5">');
