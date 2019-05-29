function show(data) {
    console.log(data);
}

function Robot() {
    var alerting = "Я Robot – я просто працюю";
    var self = this;
    self.work = function() {
        console.log(alerting);
    }
    self.setAlert = function(data) {
        alerting = data;
    }
}

function CoffeRobot() {
    Robot.call(this);
}


function RobotDancer() {
    Robot.call(this);
}


function RobotCoocker() {
    Robot.call(this);
}

var robot = new Robot();
robot.work();

var cofferobot = new CoffeRobot();
cofferobot.setAlert("Я CoffeRobot – я варю каву");
cofferobot.work();

var robotdancer = new RobotDancer();
robotdancer.setAlert("Я RobotDancer – я просто танцюю");
robotdancer.work();

var robotcooker = new RobotCoocker();
robotcooker.setAlert("Я RobotCoocker – я просто готую");
robotcooker.work();

var typeRobot = [
    robot,
    cofferobot,
    robotdancer,
    robotcooker
]
for (i=0; i<typeRobot.length; i++){
    typeRobot[i] = typeRobot[i].work();
}