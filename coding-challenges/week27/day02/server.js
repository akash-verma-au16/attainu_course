const express = require('express');
const mysql = require('mysql');
const hbs = require('hbs');

const app = express();

const db = mysql.createConnection({
  host: 'localhost',
  user: 'bRabbit',
  password: '7410',
  database: 'sakila',
});

db.connect();

// Set static folder
app.use(express.static('./public'));

// Set Template Engine
app.set('view engine', 'hbs');
app.set('views', './templates/views');
hbs.registerPartials('./templates/partials');

// Body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/country', (req, res) => {
  const sql = 'SELECT country FROM sakila.country';
  db.query(sql, (err, countries) => {
    if (err) throw err;
    res.render('view', countries);
  });
});

app.post('/country', (req, res) => {
  const sql = `INSERT INTO sakila.country (country,last_update) values ('${req.body.country}' ,now())`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send({ success: true });
  });
});

app.post('/delete', (req, res) => {
  const id = `SELECT country_id FROM sakila.country WHERE country= '${req.body.country}'`;
  db.query(id, (err, result) => {
    if (err) throw err;
    const country = `DELETE FROM sakila.country WHERE country_id = ${result[0].country_id}`;
    db.query(country, (err, result2) => {
      if (err) throw err;
      res.send({
        success: true,
      });
    });
  });
});

app.put('/country', (req, res) => {
  const sql = `UPDATE sakila.country SET country = '${req.body.country}' WHERE country_id = ${req.body.id};`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.send({ success: true });
  });
});
app.listen(3000, () => console.log('Server Started'));
