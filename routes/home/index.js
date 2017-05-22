exports.recommend = function (req,res,next) {
  console.log(req.query.type)
  var type = req.query.type;
  switch (type) {
    case 'recommend':
      res.json([{
        id: 'e1r4w34w',
        name: ['PHP'],
        title: 'PHP实战开发',
        desc: '一体式web网站，从前到后，彻底搞懂PHP',
        note: '1240人学习',
        isCharge: false
      },{
        id: 'e1r4w34w',
        name: ['JAVA', 'Spring', '开发'],
        title: 'JAVA是本难念的经',
        desc: '学习JAVA，带你装逼带你飞，哈哈哈哈，跟着老司机',
        note: '25478人学习',
        isCharge: false
      },{
        id: 'e1r4w34w',
        name: ['NodeJS开发'],
        title: 'JAVA是本难念的经',
        desc: '学习JAVA，带你装逼带你飞，哈哈哈哈，跟着老司机',
        note: '25478人学习',
        isCharge: false
      },{
        id: 'e1r4w34w',
        name: ['Angular'],
        title: 'JAVA是本难念的经',
        desc: '学习JAVA，带你装逼带你飞，哈哈哈哈，跟着老司机',
        note: '25478人学习',
        isCharge: false
      },{
        id: 'e1r4w34w',
        name: ['Python', 'web', 'MongoDB'],
        title: 'JAVA是本难念的经',
        desc: '学习JAVA，带你装逼带你飞，哈哈哈哈，跟着老司机',
        note: '25478人学习',
        isCharge: false
      },{
        id: 'e1r4w34w',
        name: ['Vue', 'Vue全家桶'],
        title: 'JAVA是本难念的经',
        desc: '学习JAVA，带你装逼带你飞，哈哈哈哈，跟着老司机',
        note: '25478人学习',
        isCharge: false
      },{
        id: 'e1r4w34w',
        name: ['CSS', '前端工具', 'VueJS', 'VueX'],
        title: '使用2.0实现购物车和地址选配功能,还有很多功能是很炫酷',
        desc: '本视频教程集合案例贯穿各个知识点，轻松玩转vue2,实现各种牛逼功能',
        note: '1125人学习',
        isCharge: false
      }])
      break;
    case 'practice':
      res.json([{
        id: 'e1r4w34w',
        name: ['PHP'],
        title: 'PHP实战开发',
        desc: '一体式web网站，从前到后，彻底搞懂PHP',
        note: '1240人学习',
        price: 451,
        isCharge: true
      },{
        id: 'e1r4w34w',
        name: ['JAVA', 'Spring', '开发'],
        title: 'JAVA是本难念的经',
        desc: '学习JAVA，带你装逼带你飞，哈哈哈哈，跟着老司机',
        note: '25478人学习',
        price: 68,
        isCharge: true
      },{
        id: 'e1r4w34w',
        name: ['NodeJS开发'],
        title: 'JAVA是本难念的经',
        desc: '学习JAVA，带你装逼带你飞，哈哈哈哈，跟着老司机',
        note: '25478人学习',
        price: 100,
        isCharge: true
      },{
        id: 'e1r4w34w',
        name: ['Angular'],
        title: 'JAVA是本难念的经',
        desc: '学习JAVA，带你装逼带你飞，哈哈哈哈，跟着老司机',
        note: '25478人学习',
        price: 299,
        isCharge: true
      },{
        id: 'e1r4w34w',
        name: ['Python', 'web', 'MongoDB'],
        title: 'JAVA是本难念的经',
        desc: '学习JAVA，带你装逼带你飞，哈哈哈哈，跟着老司机',
        note: '25478人学习',
        price: 599,
        isCharge: true
      },{
        id: 'e1r4w34w',
        name: ['Vue', 'Vue全家桶'],
        title: 'JAVA是本难念的经',
        desc: '学习JAVA，带你装逼带你飞，哈哈哈哈，跟着老司机',
        note: '25478人学习',
        price: 1242,
        isCharge: true
      },{
        id: 'e1r4w34w',
        name: ['CSS', '前端工具', 'VueJS', 'VueX'],
        title: '使用2.0实现购物车和地址选配功能,还有很多功能是很炫酷',
        desc: '本视频教程集合案例贯穿各个知识点，轻松玩转vue2,实现各种牛逼功能',
        note: '1125人学习',
        price: 1000,
        isCharge: true
      }])
      break;
  }
}

