const users = require('../db/users.json')

const auth = (req, res, next) => {
    try {
        const { email, password } = req.session.user
        const user = users.filter(user => user.email === email && user.password === password)

        if (user.length === 0) {
            return res.redirect('/')
        }
    
        req.session.isLoggedIn = true
        req.session.user = user[0] 
        next()
    } catch (error) {
        res.redirect('/')
    }
}

module.exports = auth