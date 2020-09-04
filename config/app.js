const express = require('express')
const app = express()

app.get("/", (req, res) => {
    return res.status(201).send({ Hello: 'World!' })
})

module.exports = app