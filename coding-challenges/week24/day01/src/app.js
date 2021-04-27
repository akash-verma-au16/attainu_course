const path = require('path');
const upload = require('express-fileupload');
const express = require('express');
const hbs = require('hbs');
let user;

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
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('index', {
        header_title: 'Sign Up',
        footer_name: 'Akash Verma'
    });
});

app.post('/userSignup', (req, res) => {
    user = req.body
    user.avatar = 'data:image/jpeg;base64,' + req.files.avatar.data.toString('base64') 
    res.redirect('/userSignin')
});

app.get('/userSignin', (req, res) => {
    res.render('users', {
        ...user,
        header_title: 'Sign Up',
        footer_name: 'Akash Verma'
    });
});

app.get('*', (req, res) => {
    res.render('404', {
        header_title: '404',
        footer_name: 'Akash Verma',
        header_message: ' : Page not found!'
    });
});

app.listen(port, () => console.log('Server is up on port ' + port));