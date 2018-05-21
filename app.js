// init storage controller
const storage = new Storage();

// get stored location data
const weatherLocation = storage.getLocationData();

console.log(weatherLocation.locationString);

// Init weather class
const weather = new Weather("en-us", weatherLocation.locationString);

// init UI Controller
const ui = new UI();

// // Get weather when DOM loads
document.addEventListener('DOMContentLoaded', getWeather);

// Change Location Event
document.getElementById("w-change-button").addEventListener('click', (e) => {
    const city = document.getElementById("city").value;
    const country = document.getElementById("country").value;
    const locationString = `${city}, ${country}`;

    // change location
    weather.changeLocation("en-us", locationString);

    // set location in local storage
    storage.setLocationData(locationString);

    // Get and show new weather
    getWeather();

    // Close modal
    $("#locModal").modal("hide");
});

// async returns promise so must use .then/.catch on it
function getWeather() {
    weather.getLocationCode().then((res) => {
        weather.getWeather(res)
        .then(results => {
            // console log results
            // console.log(results[0])
            // call UI class to update UI
            ui.paint(results[0], weather.locationString);
        })
        .catch(err => console.log(err));
    }
    )
}