const express = require('express')
const app = express()
const db = require('./src/config/db/connect');
const port = 3500
var cors = require('cors')

app.use(cors())
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

const user = require('./src/app/controller/user')

db.connect();

app.post('/auth_login', user.authUser)
app.post('/sign_up', user.addUser)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})