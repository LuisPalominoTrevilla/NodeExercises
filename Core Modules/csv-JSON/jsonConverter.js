const fs = require('fs')
const path = require('path')
const csv = require('csvtojson')

const convertCsvJSON = (filename) => {
    let res = []
    csv()
        .fromFile(filename)
        .on('json', (jsonObj) => {
            res.push(jsonObj)
        })
        .on('done', (error) => {
            if(error) return console.error(error)
            console.log(res)
            fs.writeFile(path.join(__dirname, 'customer-data.json'), JSON.stringify(res, null, 2), (error) => {
                if(error) return console.error(error)
                console.log('all good')
            })
        })
}

convertCsvJSON('customer-data.csv')