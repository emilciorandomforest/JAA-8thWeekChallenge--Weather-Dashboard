// The variable declared below logs the developer's API Key.
// It may have to be hidden using Git Ghosts.
const APIKey = "4c4e37224ec7f2e9b92313f00b179fce";

// The variable declared below simplifies the user's input.
const input = document.getElementById('search-input').value;



//const queryURL = "https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&appid=" + APIKey;


// The code below creates Fetch request to OpenWeatherMap API
// via the QueryURL variable declared above.

$("#search-button").on("click", function(event) {
    event.preventDefault();

    const locationURL = "https://api.openweathermap.org/data/2.5/weather?q=" + "London" + "&appid=" + APIKey;
    
    fetch(locationURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data)
    })

    const lat = $(this).data.coord.lat;
    const lon = $(this).data.coord.lon;

//    const newQueryURL = "https//.[LAT][LON][API]";

//    fetch(newQueryURL)
//    .then(function (response) {
//        return response.json();
//    })
//    .then(function (data) {
//        console.log(data)
//    })

// The code below assigns temperature of the city 
// selected to each of 5 cards
//    $(".cityTemp').attr("src", ")

})

