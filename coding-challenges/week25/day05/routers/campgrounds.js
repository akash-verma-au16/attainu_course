const express = require('express');
const isLoggedIn = require('../middleware/auth');

const router = express.Router();

router.get('/campgrounds', (req, res) => {
  res.render('home', req.session.user);
});

router.get('/campgrounds/new', isLoggedIn, (req, res) => {
  res.render('new', req.session.user);
});

module.exports = router;
