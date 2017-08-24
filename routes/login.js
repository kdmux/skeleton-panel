var express = require('express');
var passport = require('passport');
var router = express.Router();

router.post('/', passport.authenticate('local',{
    successRedirect: '/panel/home',
    failureRedirect: '/',
    failureFlash: true
}));

module.exports = router;