// connect to mongo db
/* require('./api/data/db.js'); */
var express = require("express");
var app = express();

// Middleware list
var path       = require('path');
var bodyParser = require('body-parser');

// Fetch the routes to be handled
var routes = require('./api/routes');

// application variables
app.set('port', 8080);

// DEBUGGING, define which route exp: '/CSS',
app.use(function(req, res, next){
	console.log(req.method, req.url);
	next();
});

// Express looks for the index.html.  Does not need to be defined.
app.use(express.static(path.join(__dirname, 'public')));
app.use('/node_modules', express.static(__dirname + '/node_modules'));

// set to false to only get strings or arrays
app.use(bodyParser.urlencoded({extended : false}));

// angular posts data json.  Need to post data.
app.use(bodyParser.json());

// Tell app.js to use these routes
app.use('/api', routes);

// Mimic the otherwise functionality. 404 catch.
app.all('/*', function(req, res, next) {  
    res.sendFile('index.html', {root: __dirname + "/public" });
});

var server = app.listen(app.get('port'), function () {
    var port = server.address().port;
    console.log(" Map Quest is here for you! " + port);
});
