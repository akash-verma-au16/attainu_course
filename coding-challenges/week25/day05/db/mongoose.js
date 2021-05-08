const mongoose = require('mongoose');

mongoose.connect(
  'mongodb://127.0.0.1:27017/yelpcamp',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  },
  async (err) => {
    if (err) throw err;
    console.log('Connected');
  }
);
