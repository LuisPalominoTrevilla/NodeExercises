// Simulates an http client
const http = require('http')
const url = 'http://nodeprogram.com'

// This client http does a get request without buffering
http.get(url, (response) => {
    let c = 0
    response.on('data', (chunk) => {
        c++
        console.log(chunk.toString('utf-8'))
    })
    response.on('end', () => {
        console.log(`response has ended with ${c} chunk(s)`);
    })
}).on('error', (error) => {
    console.error(`Got an error: ${error.message}`)
})