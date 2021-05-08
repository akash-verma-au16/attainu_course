const express = require('express');
const User = require('../models/User');

const router = express.Router();

router.get('/login', (req, res) => {
  if (req.session.user) {
    res.redirect('/campgrounds');
  }
  res.render('login');
});

router.get('/register', (req, res) => {
  if (req.session.user) {
    res.redirect('/campgrounds');
  }
  res.render('register');
});

router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });

  if (!user && !user.matchPassword(password)) {
    return res.redirect('/login');
  }

  req.session.user = user;
  res.redirect('/campgrounds');
});

router.post('/register', async (req, res) => {
  const user = new User(req.body);
  await user.save();

  req.session.user = user;
  res.redirect('/campgrounds');
});

router.get('/logout', (req, res) => {
  req.session.destroy();
  res.redirect('/campgrounds');
});

module.exports = router;
