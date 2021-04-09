const express = require('express');
const app = express();

const randomcolor = require('randomcolor');
const rgb = randomcolor({
    format: 'rgb'
});

const fun = require("everyday-fun");
const q = fun.getRandomQuote();
const j = fun.getRandomJoke();
const r = fun.getRandomRiddle()

const d = new Date();

app.get('/', (req, res) => res.send(q.quote));

app.get('/joke', (req, res) => res.send(j.body));

app.get('/riddle', (req, res) => res.send(r.riddle));

app.get('/color', (req, res) => res.send(rgb));

app.get('/date', (req, res) => res.send(d));

app.listen(3000, () => console.log('Sending Request'));