const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())

/**
 * Shows how to obtain URL parameters and query strings
 * Data validation included
 */

let profile = [{
    username: 'luispalominot',
    email: 'luispalominot@hotmail.com',
    url: 'http://gotaroja.com'
}]

// Get method using query string
app.get('/profile', (req, res) => {
    // If query string was received, send particular object
    if(req.query.id) return res.send(profile[req.query.id])
    res.send(profile)
})

// Post method used to create new entries
app.post('/profile', (req, res) => {
    // Verify that first name and last name were passed
    // trim() removes white spaces from strings
    if (!req.body.first_name.trim() || !req.body.last_name.trim()) return res.sendStatus(400)
    // Filter junk from body request
    let obj = {
        first_name: req.body.first_name,
        last_name: req.body.last_name
    }
    profile.push(req.body)
    console.log('created', profile)
    // Send status and finish all the response
    res.sendStatus(201)
})

// Specify id to update object
app.put('/profile/:id', (req, res) => {
    // Access URL parameters using req.params
    Object.assign(profile[req.params.id], req.body)
    console.log('updated', profile[req.params.id])
    res.sendStatus(204)
})

// Delete individual object
app.delete('/profile/:id', (req, res) => {
    profile.splice(req.params.id, 1)
    console.log('deleted', profile)
    res.sendStatus(204)
})

app.listen(3000)