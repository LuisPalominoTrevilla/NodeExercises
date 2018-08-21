var Job = require('./job')
var job = new Job()

// create observer done
job.on('done', function(details){
    console.log('Weekly email job was completed at',
        details.completedOn)
    job.removeAllListeners()
})

// job.process()
job.emit('start')