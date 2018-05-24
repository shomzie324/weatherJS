class Storage {
    constructor() {
        this.locationString;
        this.defaultLocationString = "Toronto, Canada";
    }

    getLocationData(){
        // check if local storage has a location string value
        if (localStorage.getItem("locationString") === null) {
            console.log("using default location string");
            this.locationString = this.defaultLocationString;
        } else{
            this.locationString = localStorage.getItem("locationString");
        }

        return {
            locationString: this.locationString
        }

    }

    setLocationData(locationString){
        localStorage.setItem('locationString', locationString);
        console.log("Preferences saved to local storage.");
    }
}