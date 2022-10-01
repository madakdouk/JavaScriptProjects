//creating object constructor function
function store_item (name, price) {
    //placeholders for objects
    this.item_name = name;
    this.item_price = price;
}

//assigning variables to create new objects
var item1 = new store_item ('Chips', 1.50);
var item2 = new store_item ('Cigarettes', 10.00);
var item3 = new store_item ('Coffee', 3.00);

//creating function with nested function to output newly created objects and output total price
function checkout() {
    //displaying list of store items on button click
    document.getElementById('items').innerHTML = item1.item_name + ' $' + item1.item_price + '<br>' + item2.item_name + ' $' + item2.item_price + '<br>' + item3.item_name + ' $' + item3.item_price;
    //assigning variable for total price
    var total
    //creating nested function to output total price
    function add() {total = item1.item_price + item2.item_price + item3.item_price;}
    //calling nested function
    add();
    //output total
    document.getElementById('total').innerHTML = 'Total = $' + total;
}

//creating function to check age of buyer
function age() {
    //assigning variables for age and ability to buy
    var age, can_buy;
    //getting value for age variable from HTMl input
    age = document.getElementById('age').value;
    //checking value of age to decide if item can be bought
    can_buy = (age < 18) ? "You cannot buy this item":"You can buy this item";
    //output results to HTML file
    document.getElementById('buy').innerHTML = can_buy;
}