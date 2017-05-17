exports.login = function(req,res,next){
  let username = req.body.username;
  let password = req.body.password;
  console.log(res.body);
  if(username==='admin' && password==='123456'){
    res.jsonp({status:200,message:'登录成功',data:{token:'012445544'}})
  }else{
    res.jsonp({status:101,message:'用户名或密码错误'})
  }
};
