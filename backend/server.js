require('dotenv').config()

const mongoose = require('mongoose')
const express = require('express')


const app = express()

// allow the server to handle json req body
app.use(express.json())

// log request details to console
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        //listen for requests
        app.listen(process.env.PORT, () => {
            console.log('listening on port ', process.env.PORT)
        })
    })
    .catch((err) => console.log(err))