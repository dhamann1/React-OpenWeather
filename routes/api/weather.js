var express = require('express');
var router = express.Router();
var request = require('request-promise-native');
var weatherCtrl = require('../../controllers/weather');


router.get('/sample', weatherCtrl.fetchSampleWeather); 

router.post('/search', weatherCtrl.fetchSearchWeather); 


module.exports = router; 