const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');


const route = require('./route');

const app = express();
app.use(cors());

app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb',extended: false }));

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(logger('dev'));
app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/healthcare/api/v1.0/', route);


// ....Middleware..............
app.use(function(req, res, next) { 
  res.setHeader("Access-Control-Allow-Origin", "*"); 
  res.setHeader("Access-Control-Allow-Methods", "GET, POST");  
  res.setHeader(
    "Access-Control-Allow-Headers",
    "lang_id,ee_id,clientsid,X-Requested-With,x-access-token,Content-Type,Authorization"
  );
  res.setHeader("Access-Control-Expose-Headers", "token");
  res.setHeader("Access-Control-Allow-Credentials", true);
  next(createError(404));
});
// .......................


// error handler
app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error =  err;
    console.log("Api started at port 8000")
    console.log(err)
  res.json({
    status:false,
    code:500,
    error:err.message
  })
});

global.response = require('./response');
module.exports = app;
