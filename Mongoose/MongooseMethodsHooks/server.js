/**
 * The main idea of mongoose is that you don't work 
 * with the database directly, you work instead with
 * objects
 */

const mongoose = require('mongoose')
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost:27017/testMongoose', { useNewUrlParser: true })

// Create a schema
const bookSchema = mongoose.Schema({ name: String })

// Invoke method on bookSchema
bookSchema.method({
    buy(quantity, customer, callback) {
        var bookToPurchase = this
        console.log('buy')
        return callback()
    },
    refund(customer, callback) {
        console.log('refund')
        return callback()
    }
})

bookSchema.static({
    getZeroInventoryReport(callback) {
        // Use a query to get books with zero inventory
        console.log('getZeroInventoryReport')
        let books = []
        return callback(books)
    },
    getCountOfBooksById(bookId, callback) {
        // Use a query to get number of books left for a given bookid
        console.log('getCountOfBooksById')
        let count = 0
        return callback(count)
    }
})

// Hooks for business logic
// Always define them before compiling shcemas to models
/* bookSchema.post('save', function(next) {
    // Prepare for saving
    console.log('post save')
    return next()
})

bookSchema.pre('remove', function(next) {
    // Prepare for removing
    console.log('pre remove')
    return next()
}) */ 

// Create a Book model using the schema defined above
let Book = mongoose.model('Book', bookSchema)
// Invoke static methods that work on entire set of documents
// So you don't need an exact instance of a book to invoke them
Book.getZeroInventoryReport(()=>{})
Book.getCountOfBooksById(123, ()=>{})

// Create a new book instance using the Book model (Schema)
let practicalNotebook = new Book({ name: ' Practical Node.js, 4th Edition'})

// Call schema methods (not static ones)
practicalNotebook.buy(1, 2, ()=>{})
practicalNotebook.refund(1, () => {})

practicalNotebook.save((err, results) => {
    if (err) {
        console.log(err)
        process.exit(1)
    } else {
        console.log('Saved ', results)
        practicalNotebook.remove((error, results) => {
            if (error) {
                console.log(error)
                process.exit(1)
            }else {
                process.exit(0)
            }
        })
    }
})