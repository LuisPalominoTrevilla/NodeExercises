## Express Response Object

Used to send the response and to modify HTTP response before sending it

#### Express Response Methods

- **response.redirect(url)**: redirect request
- **response.send(data)**: send response
- **response.json(data)**: send JSON and force proper headers
- **response.sendfile(path, options, callback)**: send a file
- **response.render(templateName, locals, callback)**: render a template
- **response.locals**: pass data to template

#### HTTP Status Code

To Specify a status code use: `response.status(xxxx)`

- **2XX**: for successfully processed requests
- **3XX**: for redirections or cache information
- **4XX** for client-side errors
- **5XX**: for server-side errors

#### Sending an Empty Response

`response.status(204).end()`