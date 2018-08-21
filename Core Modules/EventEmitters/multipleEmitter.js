const EventEmitter = require('events');

class Emitter extends EventEmitter {}
emitter = new Emitter()

// The order in which you define the event emitters matters!

emitter.on('knock', () => {
    console.log('Who is there?')
})

emitter.on('knock', ()=> {
    console.log('Go away!')
})

emitter.once('hello', () => {
    console.log('This observer will be executed only once, no matter how many times it was triggered')
})

emitter.emit('hello')
// The following line won't execute the observer hello anymore
emitter.emit('hello')

emitter.emit('knock')
// The line below removes events/observers listeners
emitter.removeAllListeners()
// If line above is not commented, the knock event will not work anymore
emitter.emit('knock')


