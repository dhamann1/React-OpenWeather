let request = require('request-promise-native');
let weatherKey = process.env.WKEY;


function fetchSampleWeather(req, res) {
  request(`https://api.openweathermap.org/data/2.5/weather?id=3882428&APPID=${weatherKey}&units=metric`, function (error, weatherResponse){
    let weather = JSON.parse(weatherResponse.body);
    res.json(weather)
  })
}


function fetchSearchWeather(req, res) {
  request(`https://api.openweathermap.org/data/2.5/weather?q=${req.body.queryLocation},us&APPID=${weatherKey}&units=metric`, function (error, weatherResponse){
    let weather = JSON.parse(weatherResponse.body);
    res.json(weather);
  })
}





  module.exports  = {
    fetchSampleWeather,
    fetchSearchWeather
  }

