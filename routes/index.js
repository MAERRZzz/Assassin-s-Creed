var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Assassin\'s Creed' });
});


/*Эцио Аудиторе да Фиренце*/
router.get('/ezio', function(req, res, next) {
  res.send("<h1>Эцио Аудиторе да Фиренце</h1>");
});

/*Марио Аудиторе*/
router.get('/mario', function (req, res, next) {
    res.send("<h1>Марио Аудиторе</h1>");
});

/*Юсуф Тазим*/
router.get('/yusuf', function (req, res, next) {
    res.send("<h1>Юсуф Тазим</h1>");
});

/*София Сартор*/
router.get('/sofia', function (req, res, next) {
    res.send("<h1>София Сартор</h1>");
});

/*Дезмонд Майлс*/
router.get('/desmond', function (req, res, next) {
    res.send("<h1>Дезмонд Майлс</h1>");
});


module.exports = router;
