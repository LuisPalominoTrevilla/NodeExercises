// Node observer pattern
const EventEmitter = require('events')

class Job extends EventEmitter {}
// Instantiate job class which inherits from eventemitter
job = new Job()

// Set up event/observer listener done
job.on('done', (timeDone) => {
    console.log('Job was pronounced done ar', timeDone);
})

// Emit/trigger event done by passing current time
job.emit('done', new Date());
job.removeAllListeners();