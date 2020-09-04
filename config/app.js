const express = require('express')
const app = express()

const sessionRoutes = require('../src/routes/sessions')
const conversationRoutes = require('../src/routes/conversations')

app.use(express.json())

app.use('/session', sessionRoutes)
app.use('/conversation', conversationRoutes)

module.exports = app