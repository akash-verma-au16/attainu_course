const fs = require('fs');
const path = require('path');
const express = require('express');
const hbs = require('hbs');
const dog = require('../database/dog.json');

const app = express();
app.use(express.urlencoded({ extended: true }));
const port = process.env.PORT || 3000;

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

// Setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

// Setup static directory to serve
app.use(express.static(publicDirectoryPath));

app.get('', (req, res) => {
    res.render('index', {
        title: 'Entry',
        myName: 'Akash Verma'
    });
});

app.post('/show', (req, res) => {
    dog.push(req.body)
    res.render('show', {
        ...req.body,
        title: 'Result',
        myName: 'Akash Verma'
    });
    fs.writeFileSync(__dirname + '/../database/dog.json', JSON.stringify(dog, null, 4))
});

app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        myName: 'Akash Verma',
        errorMessage: ' : Page not found!'
    });
});

app.listen(port, () => console.log('Server is up on port ' + port));