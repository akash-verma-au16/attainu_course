const fs = require('fs')
const express = require("express")
const Router = express.Router()
const users = require('../db/users.json')
let temp

Router.use(express.json())

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

Router.post('/userSignup', (req, res) => {
    let user = req.body
    user.avatar = 'data:image/jpeg;base64,' + req.files.avatar.data.toString('base64') 
    users.push(user)
    fs.writeFileSync(__dirname + '/../db/users.json', JSON.stringify(users, null, 4))
    temp = user
    const exprireDate = new Date('2021-04-30')
    res.cookie('userIdentified', user.email, { expires: exprireDate })
    res.redirect('/profile');
})

Router.post('/userLogin', (req, res) => {
    let found = false
    const {email, password} = req.body
    users.forEach(user => {
        if(user.email === email && user.password === password) {
            found = true
            temp = user
            const exprireDate = new Date('2021-04-30')
            res.cookie('userIdentified', user.email, { expires: exprireDate })
            return res.redirect('/profile') 
        }
    })
    if(!found) res.send('User Not Found');
})

Router.get('/profile', (req, res) => {
    try {
        if (req.headers.cookie.includes('userIdentified') === true) {
            res.render('profile', {
                ...temp,
                header_title: 'Sign Up',
                footer_name: 'Akash Verma'
            })   
        }
    } catch (error) {
        res.redirect('/')
    }
})

Router.get('*', (req, res) => {
    res.render('404', {
        header_title: '404',
        footer_name: 'Akash Verma',
        header_message: ' : Page not found!'
    })
})

module.exports = Router