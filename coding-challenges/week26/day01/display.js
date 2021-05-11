require('./db');
const Customer = require('./models/Customer');

const displayCustomer = async function () {
  const owner = await Customer.findById('5d7a514b5d2c12c7449be085').populate({
    path: 'cars',
    select: 'carModel price',
  });
  console.log(owner);
  process.exit();
};

const displayAllCustomer = async function () {
  const all = await Customer.find({}).populate({
    path: 'cars',
    select: 'carModel price',
  });

  console.log(all);
  process.exit();
};

// displayAllCustomer();
displayCustomer();
