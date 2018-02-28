var express = require('express');
var router = express.Router();
var UserModel=require('../model/userModel')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: '登录页面' });
});

router.post("/api/login",function(req,res){
	var username=req.body.username;
	var psw=req.body.psw;

	var result={
		status:1,
		message:"登陆成功"
	}
	UserModel.find({username: username, psw: psw}, function(err, docs){
		if(!err && docs.length > 0) {
			console.log("登录成功");
			res.send(result);
		} else {
			console.log("登录失败，请检查您的用户名或者密码");
			result.status = -109;
			result.message = "登录失败，请检查您的用户名或者密码"
			res.send(result);
		}
	})
	// UserModel.find({username:username,psw:psw},function(err,docs){
	// 	console.log(err)
	// 	if(err){
	// 		console.log("登录失败，请检查您的用户名或者密码");
	// 		result.status = -109;
	// 		result.message = "登录失败，请检查您的用户名或者密码"
			
	// 	}else if(!err&&docs.length>0){
	// 		console.log("登录成功");
	// 		res.send(result.status);
	// 	}
	// })

})




router.get('/mainTop', function(req, res, next) {
  res.render('mainTop', { title: 'ECSHOP管理中心top' });
});
router.get('/mainLeft', function(req, res, next) {
  res.render('mainLeft', { title: 'ECSHOP管理中心left' });
});
router.get('/middle', function(req, res, next) {
  res.render('middle', { title: '缩放' });
});
router.get('/mainRight', function(req, res, next) {
  res.render('mainRight', { title: 'ECSHOP管理中心right' });
});
router.get('/addMerchandise', function(req, res, next) {
  res.render('addMerchandise', { title: '商品添加' });
});
router.get('/productList', function(req, res, next) {
  res.render('productList', { title: '商品列表' });
});




router.get('/main', function(req, res, next) {
  res.render('main', { title: 'ECSHOP管理中心' });
});
module.exports = router;
