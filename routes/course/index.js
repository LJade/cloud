var Mock = require('mockjs')
var data = Mock.mock({
  // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
  'list|1-10': [{
    // 属性 id 是一个自增数，起始值为 1，每次增 1
    'id|+1': 1
  }]
})
// 输出结果
console.log(JSON.stringify(data, null, 4))
exports.getPracticeList = function (req, res, next) {
 var  type = req.query.type,
      page = req.query.page;
 switch (type) {
   case 'all':
     break
   case 'front':
     break
   case 'back':
     break
   case 'mobile':
     break
   case 'database':
     break
   case 'test':
     break
 }
}
