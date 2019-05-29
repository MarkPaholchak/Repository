//quest 1.1

function checkAge(age) {
    return (age > 18) ? true : confirm('Do You have permission?');
}

var agt = prompt('How old are you?', '')
checkAge(agt);


//quest 1.2

function CheckAge(age) {
    age > 18 || confirm('Do You have permission?');
}

var agr = prompt('How old are you?', '')
CheckAge(agr);

//second quest

function min(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}