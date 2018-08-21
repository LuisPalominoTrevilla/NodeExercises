const http = require('http')
const port = 3000

// Create server and make it listen on port 3000
http.createServer((req, res) => {
    // Send a response when there's a request
    res.writeHead(200, {'Content-Type': 'text-plain'})
    res.end('Hello World\n')
}).listen(port)

console.log(`Server running at http://localhost:${port}`)