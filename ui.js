class UI {
    constructor() {
        this.location = document.getElementById("w-location"); 
        this.humidity = document.getElementById("w-humidity");
        this.desc = document.getElementById("w-desc"); 
        this.string = document.getElementById("w-string"); 
        this.details = document.getElementById("w-details"); 
        this.icon = document.getElementById("w-icon"); 
        this.feelsLike = document.getElementById("w-feels-like"); 
        this.dewPoint = document.getElementById("w-dewpoint");  
        this.wind = document.getElementById("w-wind"); 
    }

    paint(weather, locationString) {
        this.location.textContent = locationString;
        this.desc.textContent = weather.WeatherText;

        // String for temperature
        this.string.textContent = `${weather.Temperature.Metric.Value} ${weather.Temperature.Metric.Unit}`;

        // Set image source to be icon from response
        this.icon.setAttribute("src", `./img/${weather.WeatherIcon}-s.png`);

        this.humidity.textContent = `Relative Humidity: ${weather.RelativeHumidity}`;

        this.feelsLike.textContent = `Feels Like: ${weather.RealFeelTemperature.Metric.Value} ${weather.RealFeelTemperature.Metric.Unit}`;

        this.dewPoint.textContent = `Dew Point: ${weather.DewPoint.Metric.Value} ${weather.DewPoint.Metric.Unit}`;

        this.wind.textContent = `Wind: ${weather.Wind.Speed.Metric.Value} ${weather.Wind.Speed.Metric.Unit}`;
    }
}