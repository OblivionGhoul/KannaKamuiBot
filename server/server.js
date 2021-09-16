const express = require('express')
const app = express()
const path = require('path');

app.use(express.static('public'))

let port = process.env.PORT || 3000

app.get('/', function (req, res) {
    res.sendFile(path.resolve('public/index.html'))
})

app.listen(port, function () {
    console.log('Server is on port', port)
})