const express = require('express')
const app = express()
const start = require('./index')

app.get('/', function (req, res) {
    start()
})

app.listen(3000)