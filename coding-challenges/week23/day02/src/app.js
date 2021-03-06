const path = require('path');
const express = require('express');
const hbs = require('hbs');
const router_404 = require('./routers/404')
const routerPost = require('./routers/post')

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

app.use(express.static(publicDirectoryPath));
app.use(routerPost)
app.use(router_404)

app.listen(port, () => console.log('Server is up on port ' + port));