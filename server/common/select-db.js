const mongoose = require('mongoose');
const config = require('../config/config');

//Object holding all your connection strings
var connections = {};

module.exports = (clientId) => {
    // const lmsDb = "REMINDER_DB";
    const lmsDb = clientId;
    if (connections[lmsDb]) {
        console.log("returning the Old connection");
        //database connection already exist. Return connection object
        return connections[lmsDb];
    } else if(config.dbuser){
        console.log("Creating new connection with authentication");
        connections[lmsDb] = mongoose.createConnection("mongodb://" + config.dbuser.user + ":" + config.dbuser.pass + "@" + config.connectdbUrl + lmsDb + "?authSource=admin");
        return connections[lmsDb];
    }else{
        console.log("Creating new connection without authentication");
        connections[lmsDb] = mongoose.createConnection(config.dbUrl + '/' + lmsDb);
        return connections[lmsDb];
    }
};
