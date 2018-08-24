const mongoose = require('mongoose')

// Connect to the local instance of the database
mongoose.connect('mongodb://localhost:27017/testMongoose', { useNewUrlParser: true })

// Create a mongoose model by defining that the name is a string
// Book is the model
let Book = mongoose.model('Book', { name: String})

// Instantiate a new instance of the model Book
let practicalNotebook = new Book({ name: 'Practical Node.js, 2nd ed' })
// Save the instance of the book in the database
practicalNotebook.save((err, results) => {
    if (err) {
        console.log(err)
    } else {
        console.log('Saved ', results)
        process.exit(0)
    }
})