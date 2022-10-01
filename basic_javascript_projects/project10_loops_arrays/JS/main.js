//defining function to utilize while loop
function singles() {
    //assigning variable to be used as a counter
    let x = 0;
    //creating array
    let songs = ['Vision of Love', 'Love Takes Time', 'Someday', 'I Don\'t Wanna Cry', 'Emotions'];
    //creating while loop
    while (x < songs.length) {
        //printing one song at a time
        document.getElementById('mariah').innerHTML += songs[x] + '<br>';
        //incrementing counter
        x++;
    }
}

//defining function to utilize for loop
function instr() {
    //assigning var to hold array
    var instruments = ['piano', 'flute', 'guitar'];
    //assigning var to use as loop counter
    let i;
    //creating for loop to print out list
    for (i = 0; i < instruments.length; i++) {
        //sending list to HTML
        document.getElementById('list').innerHTML += instruments[i] + '<br>';
    }
}

//creating object that contains properties and a function
let laptop = {
    //properties
    manufacturer: 'Asus ',
    model: 'ROG Zephyrus G14 ',
    year: '2022 ',
    color: 'White ',
    //function
    desc: function() {
        //function returns this string value
        return 'This laptop is a ' + this.color + this.year + this.manufacturer + this.model;
    }
};
//printing the resulting string
document.getElementById('laptop').innerHTML = laptop.desc();
