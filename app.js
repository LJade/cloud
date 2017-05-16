var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var route = require('./routes/index');

var app = express();


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(__dirname + '/'));
app.set('views',path.join(__dirname , '/') );
app.engine('.html', require('ejs').__express);
app.set('view engine', 'html');
route(app)
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler

var server = app.listen(1234, function () {
  var host = '127.0.0.1';
  var port = server.address().port;
  console.log('app listening at http://%s:%s', host, port);
});

module.exports = app;
