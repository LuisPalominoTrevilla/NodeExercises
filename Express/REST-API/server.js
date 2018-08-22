// Import dependencies
const express = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser')
const errorHandler = require('errorhandler')

// Define in-memory data store
let store = {}
store.accounts = []

// Create express app
let app = express()
// apply middleware for body parsing, logging and error handling
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(errorHandler())

// Get accounts
app.get('/accounts', (req, res) => {
    res.status(200).send(store.accounts)
})

// Create an account 
app.post('/accounts', (req, res) => {
    let newAccount = req.body
    let id = store.accounts.length
    store.accounts.push(newAccount)
    res.status(201).send({id: id})
})

// Update account
app.put('/accounts/:id', (req, res) => {
    store.accounts[req.params.id] = req.body
    res.status(200).send(store.accounts[req.params.id])
})

// Remove account
app.delete('/accounts/:id', (req, res) => {
    store.accounts.splice(req.params.id, 1)
    res.status(204).send()
})

app.listen(3000)