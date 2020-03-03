let Temperature = function (number) {
    this.celcius = number;

    this.getCelcius = function () {
        return number;
    };
    this.setCelcius = function (number) {
        this.celcius = number;
    };
    this.convertToF = function () {
        return this.celcius * 33.8;
    };
    this.convertToK = function () {
        return this.celcius * 274.15;
    };
};

let temperature = new Temperature(25);
let fahrelt = parseInt(temperature.convertToF());
let Kenvin = parseInt(temperature.convertToK());
alert("Nhiệt độ F: " + fahrelt + " .Nhiệt độ K: " + Kenvin);