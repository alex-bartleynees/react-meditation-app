const path = require('path')
const express = require('express')

const meditationRoutes = require('./routes/meditationRoutes')

const server = express()
server.use(express.static(path.join(__dirname, 'public')))
server.use(express.json())

server.use('/v1/meditationRoutes', meditationRoutes)
server.use('/v1/meditationRoutes/addMeditation', meditationRoutes)
server.use('/v1/meditationRoutes/meditations', meditationRoutes)
server.use('/v1/*', (req, res) => res.sendStatus(404))

server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'))
})

module.exports = server
