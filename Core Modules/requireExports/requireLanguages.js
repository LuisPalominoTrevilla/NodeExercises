const greetings = require('./moduleExports');
console.log('English: ' + greetings.sayHelloInEnglish()
+ '\nSwedish: '+greetings.sayHelloInSwedish()
+ '\nTatar: ' + greetings.sayHelloInTatar());