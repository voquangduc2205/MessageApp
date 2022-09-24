const express = require('express')
const app = express()
const db = require('./src/config/db/connect');
const port = 3500
var cors = require('cors')

app.use(cors())
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

const user = require('./src/app/controller/user')
const friend = require('./src/app/controller/friend')
const message = require('./src/app/controller/conversation')

db.connect();

app.post('/auth_login', user.authUser);
app.post('/sign_up/check_user', user.checkUser);
app.post('/sign_up', user.addUser);
app.get('/friend_list', friend.friendList);
app.get('/conversation', message.getMessage);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})