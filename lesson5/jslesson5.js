//quest 1

function show(data){
    console.log(data);
}

var user = {};
user.name = "ПИЛИП";
user.surname = "ШЕВЧЕНКО";
show(user);
user["name"] = "СЕРГІЙ";
show(user);
delete user.name;
show(user);

//quest 2

var employeeSalaries = {
    "Salaries0" : 211,
    "Salaries1" : 345.30,
    "Salaries2" : 220.00,
    "Salaries3" : 132,
    "Salaries4" : 335.5
}


var sum = 0;
for (var y in employeeSalaries) {
    sum  += employeeSalaries[y];
}
show(sum);