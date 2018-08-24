## Mongoose Schemas

Class that has information about field types of a document, it can also  
store information about validation/default values.

Mongoose Schema supports:

- **String**: a standard JavaScript/Node.js string (a sequence of characters) type
- **Number**: a standard JavaScript/Node number type up to 253 (64-bit); larger numbers with mongoose-long, Git
- **Boolean**: a standard JavaScript/Node Boolean type—true or false
- **Buffer**: a Node.js binary type (images, PDFs, archives, and so on)
- **Date**: an ISODate formatted date type, such as 2014-12-31T12:56:26.009Z
- **Array**: a standard JavaScript/Node array type
- **Schema.Types.ObjectId**: a typical, MongoDB 24-character hex string of a 12-byte binary number (e.g., 52dafa354bd71b30fa12c441)
- **Schema.Types.Mixed**: any type of data (i.e., flexible free type)