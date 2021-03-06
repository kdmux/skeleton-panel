var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var passport = require("passport");
var session = require('express-session');

var app = express();

var flash = require('express-flash');
var LocalStrategy = require('passport-local');
var User = require('./models/UserModel');



//Routes
var Login = require('./routes/login');
var Panel = require('./routes/panel');
var Index = require('./routes/index');
var Logout = require('./routes/logout');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser());
app.use(cookieParser());
app.use(session({ secret: 'HW$U3Bb!uZpz+<7ubt4!}4LRtyM994Yd' }));
app.use(flash());

passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
app.use(passport.initialize());
app.use(passport.session());

app.use('/static',express.static(path.join(__dirname, 'public')));
app.use('/',Index);
app.use('/login',Login);
app.use('/logout',Logout);
app.use('/panel', Panel);




// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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

module.exports = app;
