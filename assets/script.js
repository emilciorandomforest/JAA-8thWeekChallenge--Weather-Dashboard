// The variable declared below logs the developer's API Key
const APIKey = "4c4e37224ec7f2e9b92313f00b179fce";

const queryURL = "https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=${`APIKey`}";


// The code below creates Fetch request to OpenWeatherMap API
// via the QueryURL variable declared above.

$("#search-button").on("click", function() {
    fetch(queryURL)
    .then(function (response) {
        return response.json();
    })
    .then(data)
    response(data)

    const latLonURL = ""
})

