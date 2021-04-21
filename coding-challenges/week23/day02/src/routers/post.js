const getData = require('../modules/request')
const express = require('express')
const router = new express.Router()

router.use(express.json());

router.get('/', (req, res) => {
    res.render('index', {
        header_title: 'Posts | Home',
        footer_name: 'Akash Verma',
        message_body: 'Please give an id with your get request!!',
        message_comment: 'Any number between 1 to 100'
    });
});

router.get('/post/:id', async (req, res) => {
    const post = await getData(req.params.id);
    if(post === false) {
        return res.redirect('*')
    };
    res.render('post', {
        ...post,
        header_title: 'Posts | Search',
        footer_name: 'Akash Verma'
    });
});

module.exports = router;