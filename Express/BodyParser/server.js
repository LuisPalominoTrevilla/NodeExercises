const express = require('express')
const app = express()
// Import body parser
const bodyParser = require('body-parser')
// Import morgan
const morgan = require('morgan')

// Configure body parser middleware to parse JSON formats
app.use(bodyParser.json())
// Configure body parser for HTML forms with action attributes
//app.use(bodyParser.urlencoded({extended: false}))

app.use(morgan('dev'))

app.use((req, res, next) => {
    console.log(`${req.method}: ${req.url}`)
    next()
})

// Own createdd middleware, you can reuse it as many times as you want
const myMyddleware = (req, res, next) => {
    if(req.query.api_key) {
        next()
    } else {
        res.status(401).send({'msg':'Not authorized'})
    }
}

app.use(myMyddleware)

app.get('/', (req, res) => {
    res.send('Hello World Express')
})

app.get('/accounts', (req, res, next) => {
    console.log('This is an inline middleware')
    next()
}, (req, res) => {
    console.log('This gets called by the next on the inline middleware')
    res.send('accounts')
})

app.post('/transactions', (req, res) => {
    // Get body from request using body-parser middleware
    console.log( "the body is")
    console.log(req.body)
    res.send('transactions')
})

// Error handler
app.use((error, req, res, next) => {
    // Send error with code 500
    res.status(500).send(error)
    console.log(error)
})

app.listen(3000)