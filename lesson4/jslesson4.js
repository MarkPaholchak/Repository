//first quest

var x = prompt("Введіть число:");

if (x % 2 == 0) {
    alert("Число "+ x +" парне.");
} else {
    alert("Число "+ x +" непарне.");
}

//second quest


var m = prompt("Введіть число 'A':");
var n = prompt("Введіть число 'B':");
var g;
var h;
if (n < 10) {
    g = 10 - n;
} else if (n == 10) {
    g = 0;
} else {
    g = n - 10;
}
if (m < 10) {
    h = 10 - m;
} else if (m == 10) {
    h = 0;
} else {
    h = m - 10;
}
if (g < h) {
    alert("Число 'A'(" + n + ") ближче до 10 ніж число 'B'(" + m + ").")
} else {
    alert("Число 'A'(" + n + ") дальше від 10 ніж число 'B'(" + m + ").")
}

//third quest

var r;
r = 1000
while (r<9997) {
    console.log(r);
    r += 3;
}

//fourth quest

var q = 1;
var w = 0;

while (w < 55) {
    console.log(q);
    q += 2;
    w++;
}

//six quest

var a3, b3, c3, d3;
var x1, x2;
a3 = prompt("Введіть а:");
b3 = prompt("Введіть b: ");
c3 = prompt("Введіть c: ");
d3 = Math.pow(b3, 2) - (4 * a3 * c3);
if (d3 > 0) {
    x1 = ((-1) * b3 + Math.sqrt(d3)) / 2 * a3;
    x2 = ((-1) * b3 - Math.sqrt(d3)) / 2 * a3;
    alert("x1 = " + x1 + " x2 = " + x2);
} else if (d3 == 0) {
    x1 = (-1) * b3;
    alert("x1, x2 = " + x1);
} else {
    alert("Помилка. D менше за 0");
}

//seven quest

var a4;
a4 = 90;
do {
    console.log(a4);
    a4 -= 5;
    
}while(a4>0)

//eight quest

var f1, m1;
f1=2;
m1 = 0;

while (m1<20) {
    console.log(f1);
    f1 *=2;
    m1++;
}

    