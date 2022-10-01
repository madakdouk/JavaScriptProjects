function countdown() {
    //assigning seconds var equal to user's input
    var seconds = document.getElementById("seconds").value;

    //nested function for timer countdown
    function tick() {
        //decrementing timer
        seconds = seconds - 1;
        //setting HTML p element to display seconds variable
        timer.innerHTML = seconds;
        //setting timer to wait 1 second before decrementing
        var time = setTimeout(tick, 1000);
        //display announcement when timer reaches end and clearing timer
        if (seconds == -1) {
            alert("Time's up!");
            clearTimeout(time);
            timer.innerHTML = "";
        }
    }
    //calling the nested function
    tick();
}

//declaring variable to track location in slideshow
let slideIndex = 1;

//move to next/prev slide
function plus_slides(n) {
    showSlides(slideIndex += n);
}

//thumbnail controls
function current_slide(n) {
    //clicking a dot will show a slide
    showSlides(slideIndex = n);
}

function showSlides(n) {
    //declaring variable for later use in loop
    let i;

    //declaring array whose contents are populated from HTML
    let slides = document.getElementsByClassName('slides');

    //conditions to reset slideIndex after it becomes larger/smaller than array size
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}

    //loop to hide inactive slideshow pictures
    for (i=0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    //display current slide
    slides[slideIndex-1].style.display = "block";
}

//start slideshow
showSlides(1);