var mongoose = require('mongoose');
var dburl    = 'mongodb://localhost:27017/meanHotel';

mongoose.connect(dburl);

mongoose.connection.on('connected', function(){
    console.log("Mongoose is now connected to " + dburl);
});
mongoose.connection.on('disconnected', function(){
    console.log("Mongoose is now disconnected!");
});
mongoose.connection.on('error', function(err){
    console.log("Mongoose connection ERRROR: " + err);
});

// ctrl C in the command line event
process.on('SIGINT', function(){
    mongoose.connection.close(function(){
        console.log("Mongoose discounted through app termination. (SIGINT)"); 
        process.exit(0);
    });
});

// Event to do with Heroku??? 
process.on('SIGTERM', function(){
    mongoose.connection.close(function(){
        console.log("Mongoose discounted through app termination. (SIGTERM)"); 
        process.exit(0);
    });
});

// Let nodemon pick it up again 'rs' restart
process.once('SIGUSR2', function(){
    mongoose.connection.close(function(){
        console.log("Mongoose discounted through app termination. (SIGUSR2)"); 
        process.kill(process.pid, 'SIGUSR2');
    });
});

// BRING in the Schemas and Models.  Tell the application about these models.
require('./hotels.model.js');
