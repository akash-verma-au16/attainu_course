const express = require('express')
const router = new express.Router()

router.get('*', (req, res) => {
    res.render('404', {
        header_title: '404',
        footer_name: 'Akash Verma',
        header_message: ' : Page not found!'
    });
});

module.exports = router;