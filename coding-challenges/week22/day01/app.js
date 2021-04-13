const { json } = require('express');
const exp = require('express');
const fs = require('fs');

const app = exp();
app.use(exp.json());

let id = 3;

const newUser = (name, age) => {
    return {
        name: name,
        age: age,
        id: ++id,
    };
};

const filter = (query, users) => {
    if(query.name && query.age && query.id) {
        return users.filter(user => (user.name === query.name && user.age === query.age && user.id === query.id));
    } else if(query.name && query.age) {
        return users.filter(user => (user.name === query.name && user.age === query.age));        
    } else if(query.name && query.id) {
        return users.filter(user => (user.name === query.name && user.age === query.age));       
    } else if(query.id && query.age) {
        return users.filter(user => (user.name === query.name && user.age === query.age));        
    } else if(query.name) {
        return users.filter(user => user.name === query.name);        
    } else if(query.age) {
        return users.filter(user => user.age === query.age);        
    } else if(query.id) {
        return users.filter(user => user.id == query.id);        
    } else return users;
};

const addUser = newUser => {
    fs.readFile('./users.json', 'utf-8', (err, data) => {
        if(err) throw err;
        let users = JSON.parse(data);
        users.push(newUser)

        fs.writeFile('./users.json', JSON.stringify(users), 'utf-8', err => {
            if(err) throw err;
        });
    });
};

app.get('/userInfo', (req, res) => {
    const query = req.query;

    fs.readFile('./users.json', 'utf-8', (err, data) => {
        if(err) throw err;
        let users = JSON.parse(data);
        res.send(filter(query, users));        
    });
});

app.post('/userInfo', (req, res) => {
    const newUser = {...req.body};
    newUser.id = ++id;
    addUser(newUser);
    res.json(newUser);
});

app.listen(5000, () => console.log('Server started...'));