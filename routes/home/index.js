exports.recommend = function (req,res,next) {
  var data = {
    name: ['JAVA', 'Spring', '开发'],
    title: 'JAVA是本难念的经',
    desc: '学习JAVA，带你装逼带你飞，哈哈哈哈，跟着老司机',
    note: '25478人学习'
  }
  res.json(data)
}
