function show(data) {
    console.log(data);
};

function countYearEarn() {
    var Wage = 0;
    this.setWage = function (data) {
        Wage = data;
    }
    this.count = function() {
        if (1 < Wage && Wage < 100) {
            var countnumber1 = Wage * 40 * 52;
            show("Зарплата працівника з погодинною оплатою праці буде " + countnumber1 + "$ в рік.")
        } else {
            var countnumber2 = Wage * 12;
            show("Зарплата працівника з фіксованою місячною оплатою праці буде " + countnumber2 + "$ в рік.")
        }
    }
};

function employeeHourlywage() {
    countYearEarn.call(this);
};
var firstEmployee = new employeeHourlywage();
firstEmployee.setWage(25);
firstEmployee.count();


function emloeeMonthlyWage(wage) {
    countYearEarn.call(this);
}
var secondEmployee = new emloeeMonthlyWage();
secondEmployee.setWage(2500);
secondEmployee.count();

