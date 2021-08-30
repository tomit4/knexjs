const express = require('express')
const app = express()
const knex = require('./db/knex')

// app.use(express.urlencoded({ extended:false }))
// app.use(express.json())

app.get('/', (req, res) => {
    
    // Insert knex queries here
    knex('users').where({username: 'Caspar'}).select('email').then((results) => {
        res.send(results)
    })

})

app.listen(3000, (err) => {
    if(err) console.log(err)
    console.log('Listening on port: 3000')
})