const express = require('express');
const Router = express.Router()

Router.use(express.json())

Router.get('/', (req, res) => {
    res.render('home', {
        page_header_title: 'Utilities & Games',
        header_title: 'Applications',
        footer_name: 'Akash Verma'
    })
})

Router.get('/hoverboard', (req, res) => {
    res.render('hoverboard', {
        page_header_title: 'Utility | Hoverboard',
        header_title: 'HoverBoard',
        footer_name: 'Akash Verma'
    })
})

Router.get('/tictactoe', (req, res) => {
    res.render('tic_tac_toe', {
        page_header_title: 'Game | Tic-Tac-Toe',
        header_title: 'Tic Tac Toe',
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