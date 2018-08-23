const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient
const url = 'mongodb://localhost:27017'
const customers = require('./customer-data.json')
const customerAddresses = require('./customer-address-data.json')
const async = require('async')

let tasks = []
const max_processes = parseInt(process.argv[2], 10) || 1000

MongoClient.connect(url, { useNewUrlParser: true }, (error, client) => {
    if(error) process.exit(1)
    const db = client.db('edx-course-db')

    // go through customer data without the address
    customers.forEach((customer, index, list) => {
        // Merge customer at index with customer addresses at index
        customers[index] = Object.assign(customer, customerAddresses[index])

        // Check when we reached limit number of records to process on single
        // mongodb query
        if (index % max_processes == 0) {
            const start = index
            const end = (start+max_processes > customers.length) ? customers.length-1:start+max_processes; 
            tasks.push((done) => {
                console.log(`Processing ${start} - ${end} out of ${customers.length}`)
                db.collection('customers').insertMany(customers.slice(start, end), (error, results) => {
                    // Callback to the async parallel function
                    done(error, results)
                })
            })
        }
    })

    console.log(`Launching ${tasks.length} parallel task(s)`)
    const startTime = Date.now()
    async.parallel(tasks, (error, results) => {
        if (error) console.error(error)
        const executionTime = Date.now() - startTime
        console.log(`Execution time: ${executionTime}`)
        //console.log(results)
        // Close connection from mongodb client
        client.close()
    })
})