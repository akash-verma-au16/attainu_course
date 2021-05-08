require('./db/mongoose');
const express = require('express');
const expHbs = require('express-handlebars');
const session = require('express-session');
const userRouter = require('./routers/user');
const campgroundRouter = require('./routers/campgrounds');
const { urlencoded } = require('express');

const app = express();
app.use(express.static('./public'));
app.use(
  session({
    secret: 'this is a secret',
    resave: false,
    saveUninitialized: false,
  })
);
app.use(express.urlencoded({ extended: true }));

app.engine('hbs', expHbs({ extname: 'hbs' }));
app.set('view engine', 'hbs');

app.get('/', (req, res) => res.render('landing'));

app.use(userRouter);
app.use(campgroundRouter);

app.listen(3000, () => console.log('Server Started on 3000'));
