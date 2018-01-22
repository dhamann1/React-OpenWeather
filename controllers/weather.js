var request = require('request-promise-native');
var weatherKey = process.env.WKEY;


function fetchSampleWeather(req, res) {
  request(`https://api.openweathermap.org/data/2.5/forecast?id=3882428&APPID=${weatherKey}&units=metric`, function (error, weatherResponse){
    var weather = JSON.parse(weatherResponse.body);
    res.json(weather)
  })
}


function fetchSearchWeather(req, res) {
  console.log(`We are in the controller: ${req.body.location}`);
  request(`https://api.openweathermap.org/data/2.5/forecast?q=${req.body.name}id=3882428&APPID=${weatherKey}&units=metric`, function (error, weatherResponse){
    var weather = JSON.parse(weatherResponse.body);
    res.json(weather);
  })
}





  module.exports  = {
    fetchSampleWeather,
    fetchSearchWeather
  }

