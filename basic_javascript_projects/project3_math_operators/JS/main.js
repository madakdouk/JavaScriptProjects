//assingning variables
var x = 10, y = 3;

//establishing math function
function add() {
    //adding variables and sending value to HTML
    document.getElementById('add').innerHTML = '10 + 3 = ' + (x + y);
}

//establishing subtraction function
function sub() {
    //subtracting variables and sending value to HTML
    document.getElementById('sub').innerHTML = '10 - 3 = ' + (x - y);
}

//establishing multiplication function
function mul() {
    //multiplying variables and sending value to HTML
    document.getElementById('mul').innerHTML = '10 * 3 = ' + (x * y);
}

//establishing modulus function
function mod() {
    //getting remainder and sending value to HTML
    document.getElementById('mod').innerHTML = '10 % 3 = ' + (x % y);
}

//establishing increment function
function inc() {
    //incrementing variable x and sending value to HTML
    document.getElementById('inc').innerHTML = '10++ = ' + (x++);
}

//establishing decrement function
function dec() {
    //decrementing variable y and sending value to HTML
    document.getElementById('dec').innerHTML = '3-- = ' + (y--);
}

//establishing random function
function ran() {
    //finding random number between 0 and 100 and sending value to HTML
    document.getElementById('ran').innerHTML = "Random number between 0 and 100: " + (Math.random()*100);
}

