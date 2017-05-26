var express = require('express')
var Login  = require('./login/index')
var Home  = require('./home/index')
var Comments = require('./comments/index')
var Cart = require('./cart/index')
var Course = require('./course/index')

/* GET home page. */
module.exports = function (app) {
  // 登录相关
  app.post('/api/login', Login.login);
  // 首页相关
  app.get('/api/recommend',Home.recommend)
  // 评论相关
  app.get('/api/comments',Comments.comments)
  // 购物车商品列表
  app.get('/api/cart',Cart.getCartList)
  app.get('/api/addcart',Cart.addToCart)
  // 切换不同分类
  app.get('/api/practiceList',Course.getPracticeList)
  // 搜索
  app.get('/api/search',Course.search)
};
