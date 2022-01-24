var getWeather = function () {

    var apiUrl = "http://api.openweathermap.org/geo/1.0/direct?q=name&timezone&main.temp&wind&main.humidity&limit=5&appid=a2acb9c16d4c5fc551b580aca838cb08";

    fetch(apiUrl).then(function(data) {
        console.log(data);
    });
};

console.log("outside");


getWeather();