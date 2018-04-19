const path = require('path')
const express = require('express')

const calendar = require('./routes/calendar')

const server = express()

server.use(express.static(path.join(__dirname, 'public')))

server.use('/calendar', calendar)

server.get('/', (req, res) => {
  res.redirect('/calendar')
})

module.exports = server
