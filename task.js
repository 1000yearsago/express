const express = require('express')
const fs = require('fs')
const app = express()
const port = 3000

const mytext = 'ukd if ua official web site no design yet'

app.get('/', (req, res) => {
    res.send(mytext)
})

app.get('/about', (req, res) => {
        fs.readFile('express/info.html', (err, data) => {
            if (err) {
                res.writeHead(404, {'Content-Type}':'text/html'})
            res.end('404')
        } else {
            res.writeHead(200, {'Content-Type':'text/html'})
            res.end(data)
        }
        })
})

app.get('/artwork', (req, res) => {
    res.sendFile(__dirname + '/pictures/1.jpg')
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})