//creating dictionary
function dictionary() {
    //assigning KVPs;
    var mariah_no_1 = {
        song:'Vision of Love',
        album: 'Mariah Carey',
        date: 'May 15, 1990'
    };
    //deleting KVP before it is displayed
    delete mariah_no_1.song;
    //attempting to send value to HTML
    document.getElementById('dictionary').innerHTML = mariah_no_1.song;
}