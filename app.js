var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var heroes = require('./routes/heroes');

var routes = require('./routes/index');
var users = require('./routes/users');
var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/AC')
var session = require('express-session');
var MongoStore = require('connect-mongo');

var app = express();

// view engine setup
app.engine('ejs', require('ejs-locals'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use('/heroes', heroes);
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'bower_components')));
app.use(session({
  secret: "AC",
  cookie: { maxAge: 60 * 1000 },
  store: MongoStore.create({ mongoUrl: 'mongodb://localhost/AC' })
}))

app.use('/', routes);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// view engine setup
app.engine('ejs',require('ejs-locals'));
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'bower_components')));
app.set('view engine', 'ejs');




module.exports = app;
