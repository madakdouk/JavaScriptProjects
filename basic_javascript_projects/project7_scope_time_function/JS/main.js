//assigning a global variable
var global_var = 10;

//creating a function to assign a local variable
function local() {
    var local_var = 3;
}

//creating a function with an intentional error
function error() {
    //attempting to add variables
    var sum = global_var + local_var;
}

//creating a function using an if statement
function rent() {
    var age = document.getElementById('age').value;
    if (age >= 25) {
        document.getElementById('result').innerHTML = 'You may rent a car.';
    }
    else {
        document.getElementById('result').innerHTML = 'You may not rent a car.';
    }
}

//creating a function that tells the time of day
function time_function() {
    //assigning a variable equal to the current time
    var time = new Date().getHours();
    //assingning a variable that will change depending on the current time
    var output;
    //using if, else if, and else to assign string value to output depending on the current time
    if (time < 12 == time > 0) {
        output = 'Good morning!';
    }
    else if (time >= 12 == time < 18) {
        output = 'Good afternoon!';
    }
    else {
        output = 'Good evening!';
    }
    //printing the variable on screen
    document.getElementById('time').innerHTML = output;
}
