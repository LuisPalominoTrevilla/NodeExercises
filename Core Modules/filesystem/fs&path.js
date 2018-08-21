// Full documentation: http://nodejs.org/api/fs.html

const fs = require('fs');
const path = require('path');

// Writes data to file asynchronously
fs.writeFile('./message.txt', 'HOLA MUNDO!', function (error) {
    if (error) return console.error(error);
    console.log('Writing is done.');
});

// Reads data from file asynchronously
fs.readFile(path.join(__dirname, 'message.txt'), {encoding: 'utf-8'}, function(error, data) {
    if (error) return console.error(error)
    console.log(data)
});

console.log(path.join('app', 'server.js'));