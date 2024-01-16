// The variable declared below logs the developer's API Key.
// It may have to be hidden using Git Ghosts.
const APIKey = "4c4e37224ec7f2e9b92313f00b179fce";

// The variable declared below simplifies the user's input.
const input = document.getElementById('search-input').value;
console.log(input)

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
        console.log(data);

        var lat = data.coord.lat;
        var lon = data.coord.lon;
    
        const newQueryURL = "https://api.openweathermap.org/data/2.5/weather?&metric&lat=" + lat + "&lon=" + lon + "&appid=" + APIKey; 

        fetch(newQueryURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data)

            var cityTemp = data.main.temp;
            var humidity = data.main.humidity;
            var atmosPressure = data.main.pressure;

            const leadTemp = $(".leadTemp").text("Temperature: " + cityTemp);
            const leadHumidity = $(".leadHumidity").text("Humidity: " + humidity + "%");
            const leadAtmosphere = $(".leadAtmosphere").text("Atmospheric Pressure: " + atmosPressure + "kPa");
        })
    })
    

    
    

// The code below assigns temperature of the city 
// selected to each of 5 cards
//    $(".cityTemp').attr("src", ")

})

