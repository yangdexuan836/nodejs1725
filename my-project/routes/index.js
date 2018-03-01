var express = require('express');
var router = express.Router();
var UserModel=require('../model/userModel');
var AddMerchandise=require('../model/AddMerchandise');
var multiparty = require('multiparty');
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





router.post("/api/goods_list",function(req,res){
	var keyword=req.body.username;
	console.log(keyword);
	
	AddMerchandise.find({goods_name:{$regex:keyword}}, function(err, docs) {
	
		if(!err && docs.length > 0) {
			console.log("查询成功");
			res.send(docs);
		} else {
			console.log("查询失败");

		}
	})

	// AddMerchandise.find({username:{$regex:keyword}}, function(err, docs){
	// 	console.log(docs)
	// 	if(!err && docs.length > 0) {
	// 		console.log("查询成功");
	// 		res.send(docs);
	// 	} else {
	// 		console.log("查询失败");
	// 		result.status = -109;
	// 		result.message = "查询失败"
	// 		res.send(result);
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
router.post('/api/addMerchandise',function(req,res){


	var form = new multiparty.Form({
		uploadDir: "./public/images"
	})
	form.parse(req,function(err,body,files){
		var goods_name=body.goods_name[0];
		var price=body.goods_price[0];
		var imgName = files.img[0].path;
		imgName = imgName.substr(imgName.lastIndexOf("\\") + 1);
		

		var gm=new AddMerchandise();
		gm.goods_name=goods_name;
		gm.price=price;
		gm.img=imgName;
		gm.save(function(err){
			if(!err){
				res.send("文件传输成功")
			}else{
				res.send("文件保存失败")
			}
		})
		console.log(goods_name,price,imgName);
		
	})

	// form.parse(req, function(err, body, files){
	// 	var goods_name = body.goods_name[0];
	// 	var price = body.price[0];
		
		// var imgName = files.img[0].path;
		// imgName = imgName.substr(imgName.lastIndexOf("\\") + 1);
		// console.log(files)
		// var gm = new AddMerchandise();
		// gm.goods_name = goods_name;
		// gm.price = price;
		// gm.detail = detail;
		// gm.img = imgName;
		// gm.save(function(err){
		// 	if(!err) {
		// 		res.send("商品保存成功");
		// 	} else {
		// 		res.send("商品保存失败");
		// 	}
		// })
	 // })



})



router.get('/productList', function(req, res, next) {

 
  AddMerchandise.find({}, function(err, docs) {
 
		res.render("productList", {list: docs});
	})
});




router.get('/main', function(req, res, next) {
  res.render('main', { title: 'ECSHOP管理中心' });
});
module.exports = router;
