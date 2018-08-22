const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())

/**
 * CRUD Functionality with minima Code
 * RESTful HTTP interface
 */

let profile = {
    username: 'luispalominot',
    email: 'luispalominot@hotmail.com',
    url: 'http://gotaroja.com'
}

// Get method
app.get('/profile', (req, res) => {
    res.send(profile)
})

// Post method used to create new entries
app.post('/profile', (req, res) => {
    profile = req.body
    console.log('created', profile)
    // Send status and finish all the response
    res.sendStatus(201)
})

// Put method used for complete or partial replacements
app.put('/profile', (req, res) => {
    // Merge fields
    /**
     * Object.assign() => used to copy the values of all
     * enumerable own properties from one or more 
     * source objects to a target object
     */
    Object.assign(profile, req.body)
    console.log('updated', profile)
    res.sendStatus(204)
})

// Delete method used for removal of exsisting entities
app.delete('/profile', (req, res) => {
    // Simulate
    profile = {}
    console.log('deleted', profile)
    res.sendStatus(204)
})

/**
 * Other HTTP Requests available:
 * 
 *      app.patch() => Used for partial updates
 * 
 *      app.head() => Identical to GET requests without the body
 * 
 *      app.options() => Used to identify allowed methdos
 * 
 *  app.all() => Define request handler for ANY HTTP method
 *  app.all('*', fn) will be used to show 404: Not Found
 */

app.listen(3000)