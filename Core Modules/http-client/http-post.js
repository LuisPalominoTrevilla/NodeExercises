const http = require('http')
// stringify data to send to post
const postData = JSON.stringify({ foo: 'bar' })

// Options to send in http post header
const options = {
    hostname: 'mockbin.com',
    port: 80,
    path: '/request?foo=bar&foo=baz',
    method: 'POST',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': Buffer.byteLength(postData)
    }
}

const req = http.request(options, (res) => {
    // Callback when start sending data
    res.on('data', (chunk) => {
        console.log(`BODY: ${chunk}`)
    })
    res.on('end', () => {
            console.log('No more data in response.')
        })
})

// Print if there was a problem with the request
req.on('error', (e) => {
    console.error(`problem with request: ${e.message}`)
})

// Start sending the data
req.write(postData)
// Finish the request
req.end()
