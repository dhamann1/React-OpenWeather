let express = require('express');
let path = require('path');
let logger = require('morgan');
let bodyParser = require('body-parser');

require('dotenv').config(); 

let app = express(); 

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'build')));
app.use(bodyParser.json());


app.use('/api/weather', require('./routes/api/weather'));


app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


let port = process.env.PORT || 3001;

app.listen(port, function() {
    console.log(`Express app running on ${port}`)
  });

