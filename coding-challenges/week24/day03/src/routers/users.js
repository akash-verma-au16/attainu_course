const session = require('express-session')
const express = require("express")
const Router = express.Router()
const save = require('../middleware/save')
const auth = require('../middleware/auth')

Router.use(express.json())
Router.use(session({
    secret: 'v7O8PbMg1a7bWveCnK4lqVo0hwjfFPRS',
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 90000 }
}))

Router.get('/', (req, res) => {
    res.render('login', {
        header_title: 'Login',
        footer_name: 'Akash Verma'
    })
})

Router.get('/userSignup', (req, res) => {
    res.render('sign_up', {
        header_title: 'Sign Up',
        footer_name: 'Akash Verma'
    })
})

Router.post('/userSignup', save, (req, res) => {
    req.session.isloggedIn = false
    req.session.user = { 
        email: req.body.email,
        password: req.body.password
    }
    res.redirect('/profile');
})

Router.post('/userLogin', (req, res) => {
    req.session.isloggedIn = false
    req.session.user = {
        email: req.body.email,
        password: req.body.password
    }
    res.redirect('/profile') 
})

Router.get('/profile', auth, (req, res) => {
    res.render('profile', {
        ...req.session.user,
        header_title: 'Sign Up',
        footer_name: 'Akash Verma'
    }) 
})

Router.get('*', (req, res) => {
    res.render('404', {
        header_title: '404',
        footer_name: 'Akash Verma',
        header_message: ' : Page not found!'
    })
})

module.exports = Router