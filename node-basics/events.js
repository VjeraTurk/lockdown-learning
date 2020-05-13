const events = require('events');

const eventEmitter = new events.EventEmitter();

const listener1 = (text) => {
    console.log(`1: Hello!, ${text}!`);
}

eventEmitter.on('hello', listener1); //passed listener function


eventEmitter.on('hello', (text) => {
    console.log(`2: Hello!, ${text}!`);
}); //passed listener function

// you can have as may as you like, they will be called in order
// events are important in big applications, distribudeted systems

eventEmitter.emit('hello', 'David');
console.log(eventEmitter.listenerCount('hello'));


eventEmitter.removeListener('hello',listener1); // you need to pass event 'hello', the order differs
console.log(eventEmitter.listenerCount('hello'));
// What is simmilar to front-end:
/**
 * callbacks
 * URL search params
 * query string
 * setInterval() and setTimeout()
 */

//What is different:
/**
 * no imports -> require
 * rest API
 */