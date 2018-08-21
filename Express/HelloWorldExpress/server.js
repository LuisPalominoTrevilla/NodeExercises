const express = require('express')
const app = express()

// Simple route /
app.get('/', (req, res) => {
    res.send('Hello World Express')
})

// Server listening on port 3000
app.listen(3000)