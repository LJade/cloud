var express = require('express');
var router = express.Router();
var Login  = require('./login/index')

/* GET home page. */
module.exports = function (app) {
  app.post('/api/login', Login.login);
};
