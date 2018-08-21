const express = require('express')
const app = express()

// Server could be pre-configured using the set method
// Where the first parameter is the name and second is the value
// None of these configurations are mandatory
app.set('port', process.env.PORT || 3000)
app.set('views', 'templates') // The directory the templates are stored in
app.set('view engine', 'jade')


// Simple route /
app.get('/', (req, res) => {
    res.send('Hello World Express')
})

// Server listening on port 3000
app.listen(3000)