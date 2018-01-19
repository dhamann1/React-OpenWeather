var express = require('express');
var router = express.Router();
var weatherCtrl = require('../../controllers/weather');


router.get('/sample', weatherCtrl.fetchSampleWeather); 


module.exports = router; 