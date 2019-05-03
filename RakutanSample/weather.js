var unirest = require('unirest');
var city_name = "Chennai"
unirest.get("https://community-open-weather-map.p.rapidapi.com/weather?callback=test&id=2172797&units=%22metric%22+or+%22imperial%22&mode=xml%2C+html&q="+city_name)
    .header("X-RapidAPI-Host", "community-open-weather-map.p.rapidapi.com")
    .header("X-RapidAPI-Key", "ShKBPBYKIeq8Y0ZB1ocil2iRrvESZomk")
    .end(function (result) {
        //  console.log(result.status, result.headers, result.body);
        console.log(result.body);
    });
