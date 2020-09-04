const express = require('express')
const app = express()

const sessionRoutes = require('../src/routes/sessions')

app.use('/session', sessionRoutes)

module.exports = app