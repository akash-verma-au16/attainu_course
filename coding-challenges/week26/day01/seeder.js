require('./db');
const fs = require('fs');
const colors = require('colors');
const dotenv = require('dotenv');

// Load env vars
dotenv.config({ path: './config/config.env' });

// Load models
const Customer = require('./models/Customer');
const Cars = require('./models/Cars');

// Read JSON files
const cars = JSON.parse(
  fs.readFileSync(`${__dirname}/_data/cars.json`, 'utf-8')
);

const customer = JSON.parse(
  fs.readFileSync(`${__dirname}/_data/customer.json`, 'utf-8')
);

// Import into DB
const importData = async () => {
  try {
    await Customer.create(customer);
    await Cars.create(cars);
    console.log('Data Imported...'.green.inverse);
    process.exit();
  } catch (err) {
    console.error(err);
  }
};

// Delete data
const deleteData = async () => {
  try {
    await Customer.deleteMany();
    await Cars.deleteMany();
    console.log('Data Destroyed...'.red.inverse);
    process.exit();
  } catch (err) {
    console.error(err);
  }
};

if (process.argv[2] === '-i') {
  importData();
} else if (process.argv[2] === '-d') {
  deleteData();
}
