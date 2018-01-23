let express = require('express');
let router = express.Router();
let request = require('request-promise-native');
let weatherCtrl = require('../../controllers/weather');


router.get('/sample', weatherCtrl.fetchSampleWeather); 

router.post('/search', weatherCtrl.fetchSearchWeather); 


module.exports = router; 