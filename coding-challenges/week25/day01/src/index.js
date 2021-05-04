const express = require('express');
require('./db/mongoose')
const User = require('./models/user');
const userRouter = require('./routers/userRouters');
const port = process.env.PORT;
const app = express();
const hbs = require('hbs')
const path = require('path'); 

const session = require('express-session');

app.use(session({
    secret: 'iAmIronMan',
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge:900000
    }
}))


const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

app.use(express.urlencoded({extended:true}));
app.use(express.static(publicDirectoryPath))
app.use(express.json())
app.use(userRouter)

app.listen(port,()=>{
    console.log(`Server Started on port : ${port}`);
})

