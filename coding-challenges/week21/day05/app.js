const exp = require('express');
const path = require('path');
const fs = require('fs');

const app = exp();

let counter= 0;

let count = {
    visitCount: 0,
};

app.get('/', (req, res) => {
    count.visitCount = ++counter;
    
    var json = JSON.stringify(count);
    
    fs.writeFile('./test.json', json, 'utf8', err => {
        if (err) throw err;
    });
    res.send(count);
});

app.get('/reset', (req, res) => {
    count.visitCount = 0;

    var json = JSON.stringify(count);

    fs.writeFile('./test.json', json, 'utf8', err => {
        if (err) throw err;
    });
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(5000,() => console.log('Sending request...'));