exports.getCartList = function (req, res, next) {
  var data = [{
    id: 'd4sd7f4',
    checked: false,
    imgUrl: '/static/images/cartpro.jpg',
    name: 'WebApp 书城整站开发',
    price: 239.00
  },
    {
      id: 'cf1d4fsw',
      checked: false,
      imgUrl: '/static/images/cartpro.jpg',
      name: 'Vue 饿了么开发',
      price: 199.00
    }]
  res.json({data:data})
}
