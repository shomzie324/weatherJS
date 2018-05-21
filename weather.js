class Weather {
    constructor(language, locationString) {
        // api key and search params go here
        this.apiKey = "CqRYKDAwJJ5dUsuVGOzDuKFAXBwDrfki";
        this.language = language;
        this.locationString = locationString;

    }

    // Get location code from API to use for getWeather function

    async getLocationCode() {
        const response = await fetch(`http://dataservice.accuweather.com/locations/v1/search?apikey=${this.apiKey}&q=${this.locationString}&language=${this.language}`);

        return await response.json();
    }

    // Get weather from API

    async getWeather(cityCode) {

        // cityCode is a promise, need to get data inside but trying use .then
        // and a function that then makes the next request doesn't work
        // because await can't be used outside of an async function and
        // the .then function isn't async
        const key = cityCode[0].Key;
        console.log(key);

        const response = await fetch(`http://dataservice.accuweather.com/currentconditions/v1/${key}?apikey=${this.apiKey}&language=${this.language}&details=true`);

        return await response.json();

		}

    // Change weather location or language
    changeLocation(language, locationString) {
        this.language = language;
        this.locationString = locationString;
    }
}