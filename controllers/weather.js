var request = require('request-promise-native');
var weatherKey = process.env.WKEY;


function fetchSampleWeather(req, res) {
  request(`https://api.openweathermap.org/data/2.5/forecast?id=3882428&APPID=${weatherKey}`, function (error, weatherResponse){
    var weather = JSON.parse(weatherResponse.body)
    res.json(weather)
  })
}




  module.exports  = {
    fetchSampleWeather
  }

