const path = require('path');
const upload = require('express-fileupload');
const express = require('express');
const hbs = require('hbs');
const router = require('./routers/users');

const app = express();
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
app.use(upload());
app.use(router);

app.listen(port, () => console.log('Server is up on port ' + port));
