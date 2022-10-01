//declaring variable to keep track of turn
let activePlayer = 'x';
//declaring array to store moves which will determine win conditions
let selectedSquares = [];

//defining function for placing X or O in a square
function placeXorO(squareNumber) {
    //condition to check if a square has already been selected
    //checks each element of selectedSquares array using .some method
    if (!selectedSquares.some(element => element.includes(squareNumber))) {
        //declaring variable to retrieve HTML element
        let select = document.getElementById(squareNumber);
        //Check whose turn it is
        if (activePlayer === 'x') {
            //if it is x, place x.png in HMTL
            select.style.backgroundImage = 'url("images/x_.png")';
            //if active player is o, place o.png
        } else {
            select.style.backgroundImage = 'url("images/o_.png")';
        }
        //then we must concatenate squareNumber and active player to add to array
        selectedSquares.push(squareNumber + activePlayer);
        //call function to check win condition
        checkWinConditions();
        //Changing the active player
        if (activePlayer === 'x') {
            activePlayer = 'o';
        }
        else {
            activePlayer = 'x';
        }
        //play place sound
        audio('./media/place.wav');
        //check to see if it's computer turn
        if (activePlayer === 'o') {
            //disable clicks during comp turn
            disableClick();
            //setting 1 second before computer places img and clicks reenabled
            setTimeout(function () { computersTurn(); }, 1000);
        }
        //need to return value of true for computersTurn function to work properly
        return true;
    }

    //function to select random square by computer
    function computersTurn() {
        //setting boolean variable to be used in while loop
        let success = false;
        //declaring variable to store random number 0 - 8
        let pickASquare;
        //start loop
        while (!success) {
            //random number between 0 - 8 selected
            pickASquare = String(Math.floor(Math.random() * 9));
            //if random number has not already been taken, boolean changes and loop ends
            if (placeXorO(pickASquare)) {
                //calling the function
                placeXorO(pickASquare);
                //changing boolean to end loop
                success = true;
            }
        }
    }
}

//function that checks if anybody won
function checkWinConditions() {
    //x 0, 1, 2 condtion
    if (arrayIncludes('0x', '1x', '2x')) { drawWinLine(50,100,558,100) }
    //x 3, 4, 5 condition
    else if (arrayIncludes('3x', '4x', '5x')) {drawWinLine(50,304,558,304) }
    //x 6, 7, 8 condition
    else if (arrayIncludes('6x', '7x', '8x')) {drawWinLine(50,508,558,508) }
    //x 0, 3, 6 condition
    else if (arrayIncludes('0x', '3x', '6x')) {drawWinLine(100,50,100,558) }
    //x 1, 4, 7 condition
    else if (arrayIncludes('1x', '4x', '7x')) {drawWinLine(304,50,304,558) }
    //x 2, 5, 8 condition
    else if (arrayIncludes('2x', '5x', '8x')) {drawWinLine(508,50,508,558) }
    //x 6, 4, 2 condition
    else if (arrayIncludes('6x', '4x', '2x')) {drawWinLine(100,508,510,90) }
    //x 0, 4, 8 condition
    else if (arrayIncludes('0x', '4x', '8x')) {drawWinLine(100,100,520,520) }
    //o 0, 1, 2 condtion
    if (arrayIncludes('0o', '1o', '2o')) { drawWinLine(50,100,558,100) }
    //o 3, 4, 5 condition
    else if (arrayIncludes('3o', '4o', '5o')) {drawWinLine(50,304,558,304) }
    //o 6, 7, 8 condition
    else if (arrayIncludes('6o', '7o', '8o')) {drawWinLine(50,508,558,508) }
    //o 0, 3, 6 condition
    else if (arrayIncludes('0o', '3o', '6o')) {drawWinLine(100,50,100,558) }
    //o 1, 4, 7 condition
    else if (arrayIncludes('1o', '4o', '7o')) {drawWinLine(304,50,304,558) }
    //o 2, 5, 8 condition
    else if (arrayIncludes('2o', '5o', '8o')) {drawWinLine(508,50,508,558) }
    //o 6, 4, 2 condition
    else if (arrayIncludes('6o', '4o', '2o')) {drawWinLine(100,508,510,90) }
    //o 0, 4, 8 condition
    else if (arrayIncludes('0o', '4o', '8o')) {drawWinLine(100,100,520,520) }
    //checking for tie
    else if (selectedSquares.length >= 9) {
        audio('./media/tie.wav');
        //sets .3 second timer before game resets
        setTimeout(function () { resetGame(); }, 500);
    }
    //function for checking the array for each win condition
    function arrayIncludes(squareA, squareB, squareC) {
        //declare 3 variables to check for 3 x/o in a row
        const a = selectedSquares.includes(squareA);
        const b = selectedSquares.includes(squareB);
        const c = selectedSquares.includes(squareC);
        //if all are included in array, return true and win line is drawn
        if (a === true && b === true && c === true) {return true; }
    }
}

function disableClick() {
    body.style.pointerEvents = 'none';
    //makes body clickable again after 1 second
    setTimeout(function () { body.style.pointerEvents = 'auto'; }, 1000);
}

function audio(audioURL) {
    let audio = new Audio(audioURL);
    audio.play();
}

//draw line on canvas when there is a victor
function drawWinLine(coordX1, coordY1, coordX2, coordY2) {
    //declaring variable that accesses HTML canvas element
    const canvas = document.getElementById('win-lines');
    //declaring another variable that will let us access methods and properties to use on canvas
    const c = canvas.getContext('2d');
    //declaring variables that tell us where the start/end of a lines x/y-axis are
    let x1 = coordX1, y1 = coordY1, x2 = coordX2, y2 = coordY2;
    //declaring 2 variables to temporatily store x and y axis
    let X = x1, Y = y1;
    //declaring function that interacts with the canvas
    function animateLineDrawing() {
        //declaring variable that creates a loop
        const animationLoop = requestAnimationFrame(animateLineDrawing);
        //following method clears content from the last loop iteration
        c.clearRect(0, 0, 608, 608);
        //following method starts a new path
        c.beginPath();
        //following method moves to a starting point in our line
        c.moveTo(x1, y1);
        //following method indicates end point of line
        c.lineTo(X, Y);
        //following method sets width of line
        c.lineWidth = 10;
        //following method sets color of our line
        c.strokeStyle = 'goldenrod';
        //following method draws everything laid out above
        c.stroke();
        //following condition checks if we've reached endpoints
        if (x1 <= x2 && y1 <= y2) {
            //following condition adds 10 to previous x endpoint
            if (X < x2) { X += 10; }
            //following condition adds 10 to previous y endpoint
            if (Y < y2) { Y += 10; }
            //this is necessary for the 6, 4, 2 win condition
            if (X >= x2 && Y >= y2) { cancelAnimationFrame(animationLoop); }
        }
        //this condition is similar to above and necessary for 6, 4, 2 condition
        if (x1 <= x2 && y1 >= y2) {
            if (X < x2) { X += 10; }
            if (Y > y2) { Y -= 10; }
            if (X >= x2 && Y <= y2) { cancelAnimationFrame(animationLoop); }
        }
    }
    //following function clears canvas after win line is drawn
    function clear() {
        //this line starts animation loop
        const animationLoop = requestAnimationFrame(clear);
        //this line clears the canvas
        c.clearRect(0,0,608,608);
        //this line stops our animation loop
        cancelAnimationFrame(animationLoop);
    }
    //following line does not allow clicking while win sound is playing
    disableClick();
    //this line plays win sound
    audio('./media/success.wav');
    //this line calls our main animation loop
    animateLineDrawing();
    //this line waits 1 second then clears the canvas, resets game, and allows clicking again
    setTimeout(function () {clear(); resetGame(); }, 1000);
}

//function to reset the game
function resetGame() {
    //for loop to clear each HTML square element
    for (let i = 0; i < 9; i++) {
        //get HTML element
        let square = document.getElementById(String(i));
        //removes bg image
        square.style.backgroundImage = '';
    }
    //reset our array so it's empty
    selectedSquares = [];
}