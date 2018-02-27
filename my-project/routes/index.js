var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: '登录页面' });
});
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
