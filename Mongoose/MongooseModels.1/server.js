/**
 * The main idea of mongoose is that you don't work 
 * with the database directly, you work instead with
 * objects
 */

const mongoose = require('mongoose')
mongoose.Promise = global.Promise
// Connect to the local instance of the database
mongoose.connect('mongodb://localhost:27017/testMongoose', { useNewUrlParser: true })

// Create a mongoose model
let Book = mongoose.model('Book', {
    name: String,
    published: Boolean,
    createdAst: Date,
    updatedAt: {type: Date, default: Date.now()}
})

// Instantiate a new instance of the model Book
// This instace will not have the fields that are not defined
// on the schema above
let practicalNotebook = new Book({
    name: 'Practical Node.js, 2nd ed',
    author: 'Azar',
    link: 'https://asat.com',
    createdAt: Date.now()
})

// Check if it is new object
console.log('Is new? ', practicalNotebook.isNew)

// Save the instance of the book in the database
practicalNotebook.save((err, results) => {
    if (err) {
        console.log(err)
        process.exit(1)
    } else {
        console.log('Saved ', results)
        // Next line should output false since it was already saved
        console.log('Is new? ', practicalNotebook.isNew)
        // Find a Book document (object) to update it:
        // findOne will cast string id to an ObjectID
        Book.findOne({_id: practicalNotebook.id}, (error, bookDoc) => {
            console.log("ENtro")
            console.log(bookDoc.toJSON())
            console.log(bookDoc.id)
            // Edit directly the mongoose object to update in db
            bookDoc.published = 0
            // Save the updated book
            //bookDoc.save(console.log)
            bookDoc.deleteOne(process.exit)

        })
    }
})