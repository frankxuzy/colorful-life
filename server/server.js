const path = require('path')
const express = require('express')

const calendar = require('./routes/calendar')
const calendarApi = require('./routes/calendarApi')

const server = express()

server.use(express.static(path.join(__dirname, 'public')))

// need include this to parse json
server.use(express.json())

server.use('/calendar', calendar)
server.use('/api/v1/', calendarApi)

server.get('/', (req, res) => {
  res.redirect('/calendar')
})



module.exports = server
