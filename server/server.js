require('dotenv').config()
const express = require('express')
const ctrl = require('./controller')
const massive = require('massive')

const {CONNECTION_STRING} = process.env

const app = express()

const {SERVER_PORT} = process.env

// MIDDLEWARE
app.use(express.json())

// ENDPOINTS

massive(CONNECTION_STRING)
    .then(db => {
        app.set('db', db)
        app.listen(SERVER_PORT, () => {
            console.log(`${SERVER_PORT} puppies on parade`)
        })
    })
    .catch(err => console.log(`Can't connect to db!`, err))

app.get('/api/books', ctrl.getBooks)