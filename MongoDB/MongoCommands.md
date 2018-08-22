## MongoDB Shell

To start mongod service use: `mongod`  

To launch MongoDB shell, open a new terminal and run `mongo`

To test the database:

`> db.test.save({a:1})`  
`> db.test.find()`

Useful MongoDB Shell commands:

- **help**: List of available Mongo shell commands
- **show dbs**: List all the databases in this DB server/instance
- **use board**: Work on a specific database named board
- **show collections**: List all collections in this database
- **db.messages.remove();**: Remove all documents from messages collection
- **var a=db.messages.findOne();**
- **printjson(a);**
- **a.message="hi";**
- **db.messages.save(a);**: Save method
- **db.messages.find({});**: A read query
- **db.messages.update({name:"John"},{$set:{message:"bye"}});**: An update documents query
- **db.messages.find({name:"John"});**: A read query with a specific condition/query which matches only documents with property name which equals to value John
- **db.messages.remove({name:"John"});**: A remove query with a condition