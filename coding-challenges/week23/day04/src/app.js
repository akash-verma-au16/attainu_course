const express = require('express')
const Router = require('./routers/posts')

const app = express()
const port = process.env.PORT

app.use(express.json())
app.use(Router)

app.listen(port, () => console.log(`Server is up on port ${port}`))