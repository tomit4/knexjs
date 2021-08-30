const express = require('express')
const app = express()
const knex = require('./db/knex')
require('dotenv').config()

app.use(express.urlencoded({
    extended: false
}))
app.use(express.json())

// GET request
app.get('/', (req, res) => {
    // same as SELECT * FROM users;
    knex.select().from('users').then((results) => {
        res.send(results)
    })
})

// POST request
app.post('/', (req, res) => {
    knex('users').insert({
            id: req.body.id,
            username: req.body.username,
            email: req.body.email
        })
        .then(() => {
            knex.select().from('users')
                .then((results) => {
                    res.send(results)
                })
        })
})

// PUT request
app.put('/', (req, res) => {
    knex('users').where('id', req.body.id).update({
            username: req.body.username,
            email: req.body.email
        })
        .then(() => {
            knex.select().from('users')
                .then((results) => {
                    res.send(results)
                })
        })
})

// DELETE request
app.delete('/', (req, res) => {
    knex('users').where('id', req.body.id).del()
        .then(() => {
            knex.select().from('users')
                .then((results) => {
                    res.send(results)
                })
        })
})


app.listen(process.env.EXPRESS_PORT, (err) => {
    if (err) console.log(err)
    console.log(`Listening on port: ${process.env.EXPRESS_PORT}`)
})