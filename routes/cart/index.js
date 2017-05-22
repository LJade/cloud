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
exports.addToCart = function (req, res, next) {
  var id = req.query.id;
  if( id ==='woujdj0'){
    res.json({status:200,data:{
      id: 'cf1d4fsw',
      checked: false,
      imgUrl: '/static/images/cartpro.jpg',
      name: 'Vue 饿了么开发',
      price: 199.00
    },message:'添加成功'})
  }else if(id ==='54755d5c'){
    res.json({status:301,message:'重复添加'})
  }
  else{
    res.json({status:304,message:'添加失败'})
  }
}
