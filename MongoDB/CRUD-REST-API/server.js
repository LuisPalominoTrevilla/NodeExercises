const express = require('express')
const logger = require('morgan')
const errorhandler = require('errorhandler')
const mongodb = require('mongodb')
const bodyParser = require('body-parser')
const MongoClient = mongodb.MongoClient

// Instantiate express
let app = express()

// Apply middleware for logging and body parsing
app.use(logger('dev'))
app.use(bodyParser.json())

const url = 'mongodb://localhost:27017'

//Connect to the database
MongoClient.connect(url, { useNewUrlParser: true } ,(error, Client) => {
    if(error) return process.exit(1)
    // Get db from Client
    const db = Client.db('edx-course-db')

    // Get sorted accounts
    app.get('/accounts', (req, res) => {
        db.collection('accounts')
            .find({}, {sort: {_id: -1}})
            .toArray((error, accounts) => {
                if(error) return next(error)
                res.send(accounts)
            })
    })

    // Get specific account ID
    app.get('/accounts/:id', (req, res) => {
        db.collection('accounts')
            .find({_id: mongodb.ObjectID(req.params.id)})
            .toArray((error, accounts) => {
                if(error) return next(error)
                res.send(accounts)
            })
    })

    // Post accounts
    app.post('/accounts', (req, res) => {
        let newAccount = req.body
        db.collection('accounts').insertOne(newAccount, (error, results) => {
            if(error) return next(error)
            res.send(results)
        })
    })

    // Put route
    app.put('/accounts/:id', (req, res) => {
        db.collection('accounts')
            // Use mongodb.ObjectID to convert string id to obejct id
            .updateOne({_id: mongodb.ObjectID(req.params.id)},
            {$set: req.body},
            (error, results) => {
                if(error) return next(error)
                res.send(results)
            }
        )
    })

    // Delete route
    app.delete('/accounts/:id', (req, res) => {
        db.collection('accounts')
            .deleteOne({_id: mongodb.ObjectID(req.params.id)}, (error, results) => {
                if (error) return next(error)
                res.send(results)
            }
        )
    })

    app.use(errorhandler())
    app.listen(3000)
})