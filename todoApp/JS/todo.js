//get task from input
function get_todos() {
    //create array of inputted tasks
    var todos = new Array;
    //pull task that was stored in browser memory
    var todos_str = localStorage.getItem('todo');
    //if input is not null, JSON.parse will communicate
    //with browser to make task a JS object
    if (todos_str !== null) {
        todos = JSON.parse(todos_str);
    }
    return todos;
}

//adds inputted task to todos array
function add() {
    //create variables of inputted tasks
    var task = document.getElementById('task').value;

    var todos = get_todos();
    //adds new task at the end of the array
    todos.push(task);
    //converst task input to JSON string
    localStorage.setItem('todo', JSON.stringify(todos));
    document.getElementById('task').value = "";
    show();

    return false;
}

//keeps tasks permanently displayed on screen
function show() {
    //sets task that was received as variable
    var todos = get_todos();

    //sets up each task as unordered list
    var html = '<ul>';
    //displays a task to the list in order in order that it was inputted
    for (var i = 0; i < todos.length; i++) {
        html += '<li>' + todos[i] + '<button class="remove" id="' + i + '">x</button></li>';    
    };
    html += '</ul>';
    //displays task as a list
    document.getElementById('todos').innerHTML = html;

    //creating array of x buttons
    var buttons = document.getElementsByClassName("remove");
    //loop to add event listener to each button
    for (var i =0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', remove);
    };
}

//remove items from todo array and view
function remove() {
    //getting value of button id
    var id = this.getAttribute('id')
    //getting array of tasks
    var todos = get_todos();
    //removing task associated with button from array
    todos.splice(id, 1);
    localStorage.setItem('todo', JSON.stringify(todos));
    show();

    return false;
}

//displays inputted task when add item button is clicked
document.getElementById('add').addEventListener('click', add);
//keeps inputs displayed permanently on screen
show();