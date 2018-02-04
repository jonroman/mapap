// Reusable Connection to Mongo
var MongoClient = require('mongodb').MongoClient;
var dburl = 'mongodb://localhost:27017/meanHotel';
var _connection = null;
// used for open connection to mongodb
var open = function(){
    // get _connection
    MongoClient.connect(dburl, function(err, db){
        if (err) {
            console.log("DB connection failed!");
            return;
        }
        _connection = db;
        console.log('DB connection open', db);
    });
};

var get = function(){
    return _connection;
};

// Makes these functions available upon request
module.exports = {
    open : open,
    get  : get
};
