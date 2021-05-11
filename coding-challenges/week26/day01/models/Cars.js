const mongoose = require('mongoose');

const CarsSchema = new mongoose.Schema({
  carModel: {
    type: String,
    trim: true,
  },
  price: {
    type: Number,
  },
  customer: {
    type: mongoose.Schema.ObjectId,
    ref: 'Customer',
    required: true,
  },
});

module.exports = mongoose.model('Cars', CarsSchema);
