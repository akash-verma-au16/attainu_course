const mongoose = require('mongoose');

const CutomerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please add a name'],
      unique: true,
      trim: true,
      maxlength: [50, 'Name can not be more than 50 characters'],
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);
// Reverse populate with virtuals
CutomerSchema.virtual('cars', {
  ref: 'Cars',
  localField: '_id',
  foreignField: 'customer',
  justOne: false,
});
module.exports = mongoose.model('Customer', CutomerSchema);
