exports.comments = function (req, res, next) {
  var data = [{
    avatarUrl: '/static/images/avatar.png',
    user: 'LJade',
    score: 9.6,
    time: '2017-05-08',
    content: '不错，这个课程逼格很高，多学习没坏处，老师声音性感好听，可不可以和老师做个朋友'
  }, {
    avatarUrl: '/static/images/avatar.png',
    user: '四亿年守护',
    score: 8.4,
    time: '2017-04-15',
    content: 'Give Me Five！！！Fighting！'
  }, {
    avatarUrl: '/static/images/avatar.png',
    user: '穿越人潮',
    score: 10,
    time: '2017-02-10',
    content: '其实写个评论也很难啊，好呢还是不好呢，就这吧，我觉得还好啦'
  }, {
    avatarUrl: '/static/images/avatar.png',
    user: '白落衡',
    score: 5.6,
    time: '2017-01-02',
    content: '还行吧，一般般，讲的不够彻底，希望下次改进一下课程'
  }]
  res.json(data)
}
