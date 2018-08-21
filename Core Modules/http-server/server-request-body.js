const http = require('http')
const port = 3000

var server = http.createServer((req, res) => {
    // req is the request that is coming to our server
    console.log(req.headers)
    console.log(req.method)
    console.log(req.statusCode)
    console.log(req.url)
    
    // Handle POST requests
    if (req.method == 'POST') {
        let buff = ''
        // Store data from the request
        req.on('data' , function(chunk) {
            buff += chunk
        })
        req.on('end', function () {
            console.log(`Body: ${buff}`)
            res.end('\nAccepted Body\n\n')
        })
    } else {
        res.writeHead(200, {'Content-Type':'text/plain'})
        res.end("Hello World\n")
    }
})

server.listen(port)