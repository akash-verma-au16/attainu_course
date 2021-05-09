const express = require('express');
const isLoggedIn = require('../middleware/auth');
const Campground = require('../models/Campground');

const router = express.Router();

router.get('/campgrounds', async (req, res) => {
  const campgrounds = await Campground.find({});
  res.render('home', { ...req.session.user, campgrounds });
});

router.get('/campgrounds/new', isLoggedIn, (req, res) => {
  res.render('new', req.session.user);
});

router.post('/campgrounds', isLoggedIn, async (req, res) => {
  const image = req.files.image.data.toString('base64');
  const campground = new Campground({
    ...req.body,
    thumbnail: image,
    createdBy: req.session.user._id,
  });
  await campground.save();
  res.redirect('/campgrounds');
});

router.get('/campgrounds/:id', async (req, res) => {
  let campground = await Campground.findById(req.params.id);
  if (!campground) {
    return res.redirect('/campgrounds');
  }
  if (req.session.user) {
    campground.username = req.session.user.username;
  }
  res.render('camp', campground);
});

module.exports = router;
