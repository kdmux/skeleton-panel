var express = require('express');
var passport = require('passport');
var router = express.Router();

router.use(authenticated);

router.get('/home', function(req, res, next) {
    res.render('panel-home', {username: req.user.username});
});


function authenticated(req, res, next) {
    if (req.user) {
        next();
    } else {
        res.redirect('/');
    }
}
module.exports = router;

