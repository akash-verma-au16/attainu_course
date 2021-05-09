const mongoose = require('mongoose');

const CampgroundSchema = new mongoose.Schema({
  camp_name: {
    type: String,
    unique: true,
  },
  price: Number,
  location: String,
  description: String,
  thumbnail: String,
  created: {
    type: Date,
    default: Date.now,
  },
  createdBy: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true,
  },
});

module.exports = mongoose.model('Campground', CampgroundSchema);
