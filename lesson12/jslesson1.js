'use stict'

function show(data) {
    console.log(data)
}

//1

function Person(val1, val2) {
    this.name = val1;
    this.age = val2;
}

var tanya = new Person('Tanya', 18);
var misha = new Person('Mychailo', 22);
var vova = new Person('Volodymyr', 24);
var ira = new Person('Iryna', 20);
var mark = new Person('Markian', 21);

var map = new Map();
map.set(tanya, 123);
map.set(misha, 123);
map.set(vova, 123);
map.set(ira, 123);
map.set(mark, 123);

function returnVal(mapiter) {
    var results = mapiter.keys();
    for (var obj of results) {
        console.log('name: ' + obj.name + ', age:'+ obj.age);
    }
    
    
}

returnVal(map);

//2

function matematic(n1,n2, act) {
    var act1 = 'multiply';
    var act2 = 'divide';
    var act3 = 'add';
    var act4 = 'subtract';
    try {
        if (n1 != 0 || n2 != 0) {
            if(act == act1){
                return n1*n2;
            }else if (act == act2){
                return n1/n2;
            } else if(act == act3){
                return n1 + n2;
            }else if(act == act4) {
                return n1 - n2;
            }else if (act != act1 && act != act2 && act != act3 && act != act4) {
               throw TypeError('Введіть коректну назву математичної операції.');
            }
        }else if(n1 == 0 && n2 == 0) {
            throw Error('Введіть коректні дані математичної операції.');
        }else if(typeof n1 != number && typeof n2 != number){
            throw Error('Введіть коректні дані математичної операції.');
        }
    }catch(exceptions){
        return 'Задані значення введено неправильно.';
    }
}

show(matematic(8, 4, 'subtract'));
show(matematic(8, 4, 'multiply'));
show(matematic(8, 4, 'divide'));
show(matematic(8, 4, 'add'));
show(matematic(8, 4, 'sssubtract'));

















