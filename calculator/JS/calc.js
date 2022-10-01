//declaring an object to keep track of values
const calculator = {
    //the value displayed on calculator screen for now
    display_value: '0',
    //the first operand for expressions set to null for now
    first_operand: null,
    //checks for second operand, false for now
    wait_second_operand: false,
    //holds the operator, null for now
    operator: null,
};

//definind function to modify values when input is received
function input_digit(digit) {
    const {display_value, wait_second_operand } = calculator;
    //check if second operand is true+changed display to what was clicked
    if (wait_second_operand === true) {
        calculator.display_value = digit;
        calculator.wait_second_operand = false;
    } else {
        //overwrites display if currently 0, otherwise adds to it
        calculator.display_value = display_value === '0' ? digit : display_value + digit;
    }
}

//this section will handle decimal points
function input_decimal(dot) {
    //the following ensures accidental clicking decimal will not cause problems in operation
    if (calculator.wait_second_operand === true) return;
    if (!calculator.display_value.includes(dot)) {
        //if display doesn't have decimal and it is clicked, add a decimal point
        calculator.display_value += dot;
    }
}

//this section will handle operators
function handle_operator(next_operator) {
    const {first_operand, display_value, operator} = calculator;
    //when operator is pressed, convert current number and store result in first_operand if it doesn't already exist
    const value_of_input = parseFloat(display_value);
    //checks if operator already exists and if second_operand is true, then updates operator and exits function
    if (operator && calculator.wait_second_operand) {
        calculator.operator = next_operator;
        return;
    }
    if (first_operand == null) {
        calculator.first_operand = value_of_input;
    } else if (operator) {
        const value_now = first_operand || 0;
        //if operator exists, property lookup performed in perform_calculation object and function that matches is executed
        let result = perform_calculation[operator](value_now, value_of_input);
        //add fixed amount of numbers after decimal
        result = Number(result).toFixed (9);
        //this will remove trailing 0s
        result = (result*1).toString();
        calculator.display_value = parseFloat(result);
        calculator.first_operand = parseFloat(result);
    }
    calculator.wait_second_operand = true;
    calculator.operator = next_operator;
}

const perform_calculation = {
    '/': (first_operand, second_operand) => first_operand / second_operand,
    '*': (first_operand, second_operand) => first_operand * second_operand,
    '+': (first_operand, second_operand) => first_operand + second_operand,
    '-': (first_operand, second_operand) => first_operand - second_operand,
    '=': (first_operand, second_operand) => second_operand
};

function calculator_reset() {
    calculator.display_value = '0';
    calculator.first_operand = null;
    calculator.wait_second_operand = false;
    calculator.operator = null;
}

//following function updates calculator display
function update_display () {
    //making use of calc display HTML class
    const display = document.querySelector('.calculator-screen');
    display.value = calculator.display_value;
}

update_display();

//this section monitors button clicks
const keys = document.querySelector('.calculator-keys');
keys.addEventListener('click', (event) => {
    //target variable is object representing what was clicked
    const { target } = event;
    //if clicked element is not a button, exit function
    if (!target.matches('button')) {
        return;
    }
    if (target.classList.contains('operator')) {
        handle_operator(target.value);
        update_display();
        return
    }
    if (target.classList.contains('decimal')) {
        input_decimal(target.value);
        update_display();
        return;
    }
    //following condition ensures AC clears all inputs from calculator
    if (target.classList.contains('all-clear')) {
        calculator_reset();
        update_display();
        return;
    }
    input_digit(target.value);
    update_display();
})