function Robot() {
    var alerting = "Я Robot – я просто працюю";
    this.work = function() {
        console.log(alerting);
    }
    this.getAlerting = function() {
        return alerting;
    }
    this.setAlerting = function(data) {
        alerting = data;
    }
}
var robot = new Robot();
robot.getAlerting();
robot.work();

function CoffeRobot() {
    Robot.call(this);
}
var cfrobot = new CoffeRobot();
cfrobot.setAlerting("Я CoffeRobot – я варю каву");
cfrobot.work();