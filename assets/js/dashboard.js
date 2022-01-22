var getWeather = function () {
    fetch("https://api.openweathermap.org/data/2.5/onecall?lat=43.04&lon=-87.91&appid=a2acb9c16d4c5fc551b580aca838cb08");
    console.log(data);
}

getWeather();