function show(data) {
    console.log(data);
};

//1

var products = [];
products[500] = true;
show(products.length - 1);

//2

var styles = ["Джаз", "Блюз"];
styles.push("Рок-н-Ролл");
styles[styles.length - 2] = "Класика";
show(styles.shift());
styles.unshift("Реп", "Реггі");

//3

var arr = [1, 2, 3, "Winer"];

function find(arr, values) {

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == values) return i;
    }
    return -1;
}
show(find(arr, 1));
show(find(arr, 5));
show(find(arr, "Winer"));

//4

function filterRange(arr, a, b) {
    var final = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] >= a && arr[i] <= b) {
            final.push(arr[i]);
        }
    }
    return final;
}
var array = [4, 5, 3, 0, 1, 6, 2];
var finale = filterRange(array, 0, 4);
show(finale);

//5 

function camelize (str) {
    var labArr = str.split('-');
    for (var i = 0; i<labArr.length; ++i){
        if (i == 0 ) continue;
        var letter = labArr[i].split('');
        letter[0] = labArr[i].charAt(0).toUpperCase();
        labArr[i] = letter.join('');
    }
    str = labArr.join('');
    return str;
}
var proba = "go-and-come-back";
show(camelize(proba));

















