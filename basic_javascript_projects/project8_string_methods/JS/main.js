//assinging string values to variables
var statement = 'Mariah is an icon.';
var a = 'Hel', b = 'lo, W', c = 'orld!';

//creating concatenate function
function concat() {
    //concatenating var a, b, and c and displaying in alert
    document.getElementById('concatenate').innerHTML = (a.concat(b, c));
}

//creating slice function
function slice() {
    //assinging variable to result of slice method
    var section = statement.slice(0,7);
    //printing result on screen
    document.getElementById('slice').innerHTML = section;
}

//assinging variables number values
var x = 3;
var y = 9.1245090320153209;

//creating function for toString method
function string() {
    //converting variable from integer to string
    document.getElementById('tostring').innerHTML = x.toString();
}

//creating function for toPrecision method
function precision() {
    document.getElementById('precise').innerHTML = y.toPrecision(4);
}