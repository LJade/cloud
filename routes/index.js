var express = require('express');
var router = express.Router();
var Login  = require('./login/index')
var Home  = require('./home/index')

/* GET home page. */
module.exports = function (app) {
  // 登录相关
  app.post('/api/login', Login.login);
  // 首页相关
  app.get('/api/recommend',Home.recommend)
};
