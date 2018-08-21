const express = require('express')
const app = express()

/**
 * The middleware functions have 3 parametes (req, res, next)
 * If your middleware applies to ALL routes and URL patterns, then use app.use()
 * Otherwise, if it only applies to a specific route, use app.get(req, res, next) called Inline middleware
 * THE ORDER OF THE MIDDLEWARE MATTERS A LOT
 */

app.use((req, res, next) => {
    console.log(`${req.method}: ${req.url}`)
    next()
})

app.use((req, res, next) => {
    if(req.query.api_key) {
        next()
    } else {
        res.status(401).send({'msg':'Not authorized'})
    }
})

app.get('/', (req, res) => {
    res.send('Hello World Express')
})

// Inline middleware example
app.get('/accounts', (req, res, next) => {
    console.log('This is an inline middleware')
    // If we remove the next(), then the /accounts route will not continue and exit
    //next()
    // This is how we terminate everything and call an error handler
    next(new Error('oopsy'))
}, (req, res) => {
    console.log('This gets called by the next on the inline middleware')
    res.send('accounts')
})

app.get('/transactions', (req, res) => {
    res.send('transactions')
})

// Error handler
app.use((error, req, res, next) => {
    // Send error with code 500
    res.status(500).send(error)
    console.log(error)
})

app.listen(3000)