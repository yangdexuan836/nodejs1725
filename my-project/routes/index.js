var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: '登录页面' });
});
router.get('/main', function(req, res, next) {
  res.render('main', { title: 'ECSHOP管理中心' });
});

module.exports = router;
