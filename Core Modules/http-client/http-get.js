const http = require('http')
const url = 'http://nodeprogram.com'

// Use buffer before displaying the results from get request
http.get(url, (response) => {
    // Store raw data in buffer
    let buff = ''
    let c = 0
    response.on('data', (chunk) => {
        buff += chunk
        c++
    })
    response.on('end', () => {
        // Display raw data once every data had been gathered
        console.log(buff, c)
    })
    // Handles error on response
    response.on('error', () => {
        console.error('Second error', error)
    })
}).on('error', (error) => {
    console.error(`Got error: ${error.message}`)
})