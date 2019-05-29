function show(data) {
    console.log(data);
}

function Robot() {
    ;
}
Robot.prototype.setAlert = function(data) {
    alerting = data;
}
Robot.prototype.work = function() {
    console.log(alerting);
}

function CoffeRobot() {
    ;
};
CoffeRobot.prototype = Object.create(Robot.prototype);
CoffeRobot.prototype.consrtructor = CoffeRobot;

function RobotDancer() {
    ;
};
RobotDancer.prototype = Object.create(Robot.prototype);
RobotDancer.prototype.consrtructor = RobotDancer;


function RobotCoocker() {
    ;
};
RobotCoocker.prototype = Object.create(Robot.prototype);
RobotCoocker.prototype.consrtructor = RobotCoocker;



var robot = new Robot();
robot.setAlert("Я Robot – я просто працюю");
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
for (i=0; i < typeRobot.length; i++){
    
    typeRobot[i] = typeRobot[i].work();
}