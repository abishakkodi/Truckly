const express = require('express');

const routes = require('./routes/api');

const bodyParser = require('body-parser');

const mongoose = require('mongoose');

const options = { promiseLibrary: require('bluebird') };

const cors = require('cors');

//set up express
var app = express();
var port = 4001;

mongoose.connect('mongodb://localhost/trucks', options);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('MONGO CONNECTED!');
});

app.use(cors({origin: 'http://localhost:4000'}));

//First middleware hit
app.use(express.static('client'));


//Parses request
app.use(bodyParser.json());

//routes
app.use('/api',routes);

//error handler if previous middleware fails
app.use(function(error, request, response, next){
  console.log(error.message);
  response.status(400).send({error:error.message});

});

//use process.env.port
app.listen(port, function(){
  console.log('Listening for requests on port ' + port);
});



