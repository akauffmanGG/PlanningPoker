
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var router = require('./router.js');

// used to get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;

// All routes prefixed with /api
app.use('/api', router);

//Start the server
app.listen(port);
console.log('Planning Poker listening on port ' + port);
