var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Express' });
});


/*���� �������� �� �������*/
router.get('/ezio', function(req, res, next) {
  res.send("<h1>���� �������� �� �������</h1>");
});

/*����� ��������*/
router.get('/mario', function (req, res, next) {
    res.send("<h1>����� ��������</h1>");
});

/*���� �����*/
router.get('/yusuf', function (req, res, next) {
    res.send("<h1>���� �����</h1>");
});

/*����� ������*/
router.get('/sofia', function (req, res, next) {
    res.send("<h1>����� ������</h1>");
});

/*������� �����*/
router.get('/desmond', function (req, res, next) {
    res.send("<h1>������� �����</h1>");
});


module.exports = router;
