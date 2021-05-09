require('./db/mongoose');
const express = require('express');
const hbs = require('hbs');
const session = require('express-session');
const upload = require('express-fileupload');
const userRouter = require('./routers/user');
const campgroundRouter = require('./routers/campgrounds');

const app = express();
app.use(express.static('./public'));
app.use(upload());
app.use(
  session({
    secret: 'this is a secret',
    resave: false,
    saveUninitialized: false,
  })
);
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'hbs');
hbs.registerPartials('./views/partials');

app.get('/', (req, res) => res.render('landing'));

app.use(userRouter);
app.use(campgroundRouter);

app.listen(3000, () => console.log('Server Started on 3000'));
