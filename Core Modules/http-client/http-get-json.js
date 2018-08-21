const https = require('https')
const url = 'https://gist.githubusercontent.com/azat-co/a3b93807d89fd5f98ba7829f0557e266/raw/43adc16c256ec52264c2d0bc0251369faf02a3e2/gistfile1.txt'

// Make a get request
https.get(url, (response) => {
    // Response will contain JSON format
    let rawData = ''
    response.on('data', (chunk) => { 
    rawData += chunk 
    })
    // Once all the raw data has been collected
    response.on('end', () => {
    try {
        // Parse data to JSON
        const parsedData = JSON.parse(rawData)
        console.log(parsedData)
    } catch (e) {
        // If there was an error parsing raw data to JSON format print it
        console.error(e.message)
    }
    })
}).on('error', (error) => {
    console.error(`Got error: ${error.message}`)
})
