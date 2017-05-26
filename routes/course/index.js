let Mock = require('mockjs')
let allData = Mock.mock({
  'list|35': [{
    'id|+1': 1,
    'title|1-3': 'ES6零基础教学',
    'price|100-200.2': 150.0,
    'imgUrl': '/static/images/es6.jpg'
  }]
}),
frontData = Mock.mock({
  'list|45': [{
    'id|+1': 1,
    'title|1-3': 'AngulartJS开发SPA',
    'price|100-200.2': 150.0,
    'imgUrl': '/static/images/angular.jpg'
  }]
}),
backData = Mock.mock({
  'list|25': [{
    'id|+1': 1,
    'title|1-3': 'Yii框架',
    'price|100-200.2': 150.0,
    'imgUrl': '/static/images/php.jpg'
  }]
}),
mobileData = Mock.mock({
  'list|40': [{
    'id|+1': 1,
    'title|1-3': 'Vue开发移动应用',
    'price|100-200.2': 150.0,
    'imgUrl': '/static/images/ele.jpg'
  }]
}),
databaseData = Mock.mock({
  'list|30': [{
    'id|+1': 1,
    'title|1-3': 'MongoDB',
    'price|100-200.2': 150.0,
    'imgUrl': '/static/images/java.jpg'
  }]
}),
testData = Mock.mock({
  'list|37': [{
    'id|+1': 1,
    'title|1-3': '大数据运维',
    'price|100-200.2': 200.0,
    'imgUrl': '/static/images/react.jpg'
  }]
});
exports.getPracticeList = function (req, res, next) {
  let type = req.query.type,
    page = req.query.page,
    pageSize = 10,
    totalPage = 0;
  switch (type) {
    case 'all':
      sendData(allData);
      break;
    case 'front':
      sendData(frontData);
      break;
    case 'back':
      sendData(backData);
      break;
    case 'mobile':
      sendData(mobileData);
      break;
    case 'database':
      sendData(databaseData);
      break;
    case 'test':
      sendData(testData);
      break;
  }
  function sendData(dataSource) {
    totalPage = Math.ceil(dataSource.list.length / pageSize);
    if (page > totalPage) {
      res.json(JSON.stringify([]))
    } else {
      res.json(JSON.stringify(dataSource.list.slice((page - 1) * pageSize, page * pageSize)))
    }
  }
};
exports.search = function (req, res, next) {
  let keyword  = req.query.keyword
  console.log(keyword)
  if (keyword==='vue') {
    res.json({status:200,message:'搜索成功',data:[{id:'1445',title:'vue全家桶系列课程',price:199,imgUrl:'/static/images/ele.jpg'}]})
  }else if(keyword === 'angular'){
    res.json({status:200,message:'搜索成功',data:[{id:'2544',title:'angular打造一体化系统',price:100,imgUrl:'/static/images/angular.jpg'},
      {id:'6587',title:'angular 6到飞起',price:234,imgUrl:'/static/images/react.jpg'}]})
  }
  else{
    res.json({status:304,message:'没有查询到结果'})
  }
}
