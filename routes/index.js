var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    req.session.greeting = "Hi!!!!"
        res.render('index', {
            title: 'Assassin\'s Creed',
            counter: req.session.counter
        });
});
/* GET login/registration page. */
router.get('/logreg', function(req, res, next) {
    res.render('logreg',{title: 'Вход'});
    });   
router.post('/logreg', function(req, res, next) {
    var username = req.body.username
    var password = req.body.password    
});
     

module.exports = router;
