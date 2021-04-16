const exp = require('express');
const app = exp();

app.use(exp.static('public'));

app.get('/', async (req, res) => {
    res.sendFile(__dirname + '/public/home.html');
});

app.get('/about', async (req, res) => {
    res.sendFile(__dirname + '/public/about.html');
});

app.get('/contact-me', async (req, res) => {
    res.sendFile(__dirname + '/public/contact-me.html');
});

app.listen(5000, () => console.log('Server started...'));