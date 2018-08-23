// Import mongodb driver
const {MongoClient} = require('mongodb')

// Connection to mongod service by using a url
const url = 'mongodb://localhost:27017'
// use connect method from MongoClient to connect to the Server
// Connect receives a url for the database and returns the reference to the CLIENT
MongoClient.connect(url, { useNewUrlParser: true }, (error, client) => {
    if (error) return process.exit(1)
    console.log('Connection is okay')
    const db = client.db('edx-course-db')
    // Show mongo operations using own created methods
    // By passing client reference and callbacks:
    insertDocuments(db, () => {
        updateDocument(db, () => {
            removeDocument(db, () => {
                findDocuments(db, (doc) => {
                    // Close the database connection at the end
                    client.close()
                })
            })
        })
    })
})


/**
 * Define method used to show basic mongo operations:
 */

const insertDocuments = (db, callback) => {
    // Get reference to edx-course-docs collection inside db
    const collection = db.collection('edx-course-docs')
    // Clean documents inside collection
    collection.deleteMany({}).then(result => {
        // Insert 3 documents by using insertMany
        // Otherwise use insertOne
        collection.insertMany([
            {name: 'Bob'}, {name: 'John'}, {name: 'Peter'}  // 3 documents inside array (collection)
        ]).then((result) => {
            console.log(result.result.n)
            console.log(result.ops.length)
            console.log('Inserted 3 documents into the edx-course-docs collection')
            callback(result)
        }).catch((error) => {
            console.log('caught', error.message)
            process.exit(1)
        })
    })
}

const updateDocument = (db, callback) => {
    // Get reference to edx-course-docs collection inside db
    const collection = db.collection('edx-course-docs')
    // Update document where a is 2, set b equal to 1
    const name = 'Peter'
    collection.updateMany({name: name}, {$set: {grade: 'A'}})
    .then((result) => {
        console.log(result.result.n)
        console.log(`Updated the student document where name = ${name}`)
        callback(result)
    })
    .catch((error) => {
        console.log('caught', error.message)
        process.exit(1)
    })
}

const removeDocument = (db, callback) => {
    // Get reference to edx-course-docs collection inside db
    const collection = db.collection('edx-course-docs')
    const name = 'Bob'
    collection.deleteOne(
        {name: name}
    ).then(result => {
        console.log(result.result.n)
        console.log(`Removed the document where name = ${name}`)
        callback(result)
    }).catch((error) => {
        console.log('caught', error.message)
        process.exit(1)
    })
}

const findDocuments = (db, callback) => {
    // Get reference to edx-course-docs collection inside db
    const collection = db.collection('edx-course-docs')
    // Find some documents
    collection.find({}).toArray((error, docs) => {
        if(error) return process.exit(1)
        console.log(2, docs.length)
        console.log('Found the following documents')
        console.dir(docs)
        callback(docs)
    })
}