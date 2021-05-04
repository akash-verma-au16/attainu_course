const express = require('express');
const router = new express.Router();
const User = require('../models/user');
const multer = require('multer');

var curr_user;

const upload = multer({
  limits: {
    fileSize: 2000000,
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
      return cb(new Error('Please upload an Image File'));
    }
    cb(undefined, true);
  },
});

router.get('/', async (req, res) => {
  res.render('signup');
});

router.post('/', async (req, res) => {
  const user = new User(req.body);
  curr_user = user;
  await user.save();
  req.session.user = req.body;
  res.redirect('/profile');
});

router.get('/login', async (req, res) => {
  res.render('login');
});

router.post('/login', async (req, res) => {
  try {
    const user = await User.findByCredentials(
      req.body.email,
      req.body.password
    );
    curr_user = user;
    req.session.user = req.body;
    res.redirect('/profile');
  } catch (e) {
    res.redirect('/login');
  }
});

router.get('/profile', async (req, res) => {
  if (!req.session.user) {
    res.redirect('/');
    return;
  }
  res.render('profile', curr_user);
});

router.post(
  '/profile',
  upload.single('avatar'),
  async (req, res) => {
    const image = req.file.buffer.toString('base64');
    const email = curr_user.email;
    const user = await User.findOne({ email });
    user.images = user.images.concat({ image });

    await user.save();
    curr_user = user;
    res.redirect('/profile');
  },
  (error, req, res, next) => {
    res.status(400).send({ error: error.message });
  }
);

module.exports = router;
