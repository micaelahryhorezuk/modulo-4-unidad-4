var express = require('express');
var router = express.Router();
var session = require('express-session');

/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('login', { 
    title: 'Login', 
    loggedIn: Boolean(req.session.username), 
    username: req.session.username
  });
});

router.post('/', function(req, res, next) {
    if (req.body.username) req.session.username = req.body.username;
    res.redirect('/home');
});

module.exports = router;
