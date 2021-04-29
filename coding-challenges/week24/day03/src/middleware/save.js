const fs = require('fs')
const users = require('../db/users.json')

const save = (req, res, next) => {
    console.log(req.body);
    req.body.avatar = 'data:image/jpeg;base64,' + req.files.avatar.data.toString('base64') 
    users.push(req.body)
    fs.writeFileSync(__dirname + '/../db/users.json', JSON.stringify(users, null, 4))

    req.body.avatar = ''
    next()
}

module.exports = save