// Inject modules
const express = require('express');

const app = express();


/**
 * Backend validator for each api token validation can be handled here
 */
app.use((req, res, next) => {
    next();
});

/**
 * ---------------------------------------------------------------
 * Inject all routes like below
 * ---------------------------------------------------------------
 */
// const coreHrRoute = require('./api/core-hr-api');
const healthcareemodule = require('./api/healthcareApi.js');
/* -----------------------------------------------------------  */

// setup all route paths like below

// app.use('/corehr', coreHrRoute);

app.use('/hc',healthcareemodule);




// Export
module.exports = app;