var express = require('express');
var passport = require('passport');
var router = express.Router();

router.use('/', authenticated, function(req,res){
    req.flash('status', 'You have been logged out.');
    req.logout();
    res.redirect(307,'/');
});

function authenticated(req, res, next) {
    if (req.user) {
        next();
    } else {
        res.redirect('/');
    }
}

module.exports = router;