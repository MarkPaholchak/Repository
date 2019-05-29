function show(data) {
    console.log(data);
}

var Student = [];
Student[0] = {
    name: "Fray",
    sex: 'male',
    age: 16
};
Student[1] = {
    name: "Taras",
    sex: 'male',
    age: 19
};
Student[2] = {
    name: "Elis",
    sex: 'female',
    age: 24
};
Student[3] = {
    name: "Margaret",
    sex: 'female',
    age: 17
};
Student[4] = {
    name: "Vlad",
    sex: 'male',
    age: 19
};
Student[5] = {
    name: "Adel",
    sex: 'female',
    age: 23
};
Student[6] = {
    name: "Adel",
    sex: 'male',
    age: 23
};
Student[7] = {
    name: "Alexis",
    sex: 'female',
    age: 15
};
Student[8] = {
    name: "Richard",
    sex: 'male',
    age: 20
};
Student[9] = {
    name: "Elon",
    sex: 'male',
    age: 21
};

var filetrObject = Student.filter(function (el) {
    if (el.sex === "male") {
        return el.age < 21;
    }
});

filetrObject.map(function (element) {
    element.yearsUnderAge = 21 - element.age;
});

Student.forEach(show);

show('\n');

function comparison(obj1, obj2) {
    if (obj1.age == obj2.age && obj1.name == obj2.name) {
        return obj1.yearsUnderAge - obj2.yearsUnderAge;
    } else if (obj1.age == obj2.age) {
        obj1.name - obj2.name;
    } else {
        return obj1.age - obj2.age
    }
}

Student.sort(comparison);
Student.forEach(show);
