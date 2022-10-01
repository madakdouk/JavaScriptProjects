//assigning variables
var x = 'hi', y = 5;

//checking x variable type
document.write(typeof(x) + "<br>");

//demonstrating JS type coercion
document.write(x + y + "<br>");

//assingning more variables
var a = 3, b = 3, c = 'cat', d = 'dog', e = 5, f = 10;

//using == operator
document.write('Is 3 equal to 3? ' + (a == b) + '<br>');

//using === operator
document.write('Is cat equal to dog? ' + (c === d) + '<br>');

//using the > operator
document.write('Is 3 > 3? ' + (a > b) + '<br>');

//using the < operator
document.write('Is 3 < 3? ' + (a < b) + '<br>');

//using the && operator
document.write('Is 3 < 5 and 5 < 10? ' + (a < e && e < f) + '<br>');

//using the || operator
document.write('Is 3 < 5 or 5 < 10? ' + (a < e || e < f) + '<br>');

//using the ! operator
document.write('Is 10 not less than 5? ' + !(10 < 5) + '<br>');