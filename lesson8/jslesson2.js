function show(data) {
    console.log(data);
};

function SteeringWheel(width, nspoke) {
    var hoopWidth = width;
    var NumberofSpoke = nspoke;
    this.SteeringWheeldecription = function() {
        return "Це - руль автомобіля з шириною обруча " + hoopWidth + "см. і з " + NumberofSpoke + "ма спицями."
    };
    
    this.gethoopWidth = function() {
        return hoopWidth;
    }
    
    this.sethoopWidth = function(data) {
        hoopWidth = data;
    }
    this.getNumberofSpoke = function() {
        return NumberofSpoke;
    }
    
    this.setNumberofSpoke = function(data) {
        NumberofSpoke = data;
    }
}
function Wheel(diameter, nbolts) {
    var wheelDiameter = diameter;
    var NumberofBolts = nbolts;
    this.wheeldecription = function() {
        return "Це - колесо автомобіля з діаметром " + wheelDiameter + "см. і з " + NumberofBolts + "ма кріпильними болтами."
    };
    
    this.getwheelDiameter = function() {
        return wheelDiameter;
    }
    
    this.setwheelDiameter = function(data) {
        if (typeof data === "number") { 
            wheelDiameter = data;
        } else {
            show("Неправильне значення")
        }
    }
    this.getNumberofBolts = function() {
        return NumberofBolts;
    }
    
    this.setNumberofBolts = function(data) {
        NumberofBolts = data;
    }
    this.setwheeldiametermultiplier = function(number) {
        if (typeof number === "number" && number < 10) { 
            wheelDiameter = number*wheelDiameter;
        } else if(number > 10) {
            show("Завелике значення")
        }else {
            show("Неправильне значення")
        }
    }
}
function CarBody(btype) {
    var Bodytype = btype;
    this.bodydecription = function() {
        return "Це - автомобіль з кузовом типу " + Bodytype + ".";
    };
    
    this.getBodytype = function() {
        return Bodytype;
    }
    
    this.setBodytype = function(data) {
        Bodytype = data;
        return "Тип кузову автомобіля змінено на"+ Bodytype + "."
    }
}

function Machine(name, years) {
    var Companyname = name;
    var timeOfCreate = years;
    
    SteeringWheel.call(this);
    Wheel.call(this);
    CarBody.call(this);
    
    this.MachineDescription = function() {
        return "Це автомобіль марки " + Companyname + ", який використовується з " + timeOfCreate +" року, у автомобіля кузов типу " + this.getBodytype() + ", колеса діаметром " + this.getwheelDiameter() + "см і руль з шириною обруча " + this.gethoopWidth() + "см."
    }
    
    this.getCompanyname = function() {
        return Companyname;
    }
    
    this.setCompanyname = function(data) {
        Companyname = data;
    }
    this.getTimeOfCreate = function() {
        return timeOfCreate;
    }
    
    this.setTimeOfCreate = function(data) {
        timeOfCreate = data;
    }
    
}

var car = new Machine("Ford", 2002);
show(car.getCompanyname());
show(car.getTimeOfCreate());
car.setTimeOfCreate(2005);
car.setCompanyname("Aston Martin");
show(car.getCompanyname());
show(car.getTimeOfCreate());
car.setBodytype("Sedan");
show(car.bodydecription());
car.setwheelDiameter(50);
car.setwheeldiametermultiplier(1.2);
car.setNumberofBolts(4);
show(car.wheeldecription());
car.sethoopWidth(40);
car.setNumberofSpoke(2);
show(car.SteeringWheeldecription());
car.MachineDescription();










