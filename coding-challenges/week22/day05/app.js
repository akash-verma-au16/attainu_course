const fs = require('fs');
const exp = require('express');
const app = exp();

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/submit', async (req, res) => {
    if(!(__dirname + '/response.json')) {
        fs.mkdir('response.json');
    };
    fs.writeFileSync('./response.json', JSON.stringify(req.query, null, 2));
    res.send('data Saved');
});

app.listen(5000, () => console.log('Server started...'));