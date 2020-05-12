const events = require('events');

const eventEmitter = new events.EventEmitter();

const listener1 = (text) => {

eventEmitter.on('hello', (text) => {
    console.log(`1: Hello!, ${text}!`);
}); //passed listener function


eventEmitter.on('hello', (text) => {
    console.log(`2: Hello!, ${text}!`);
}); //passed listener function
}
// you can have as may as you like, they will be called in order
// events are important in big applications, distribudeted systems


console.log(eventEmitter.listenerCount('hello'));
eventEmitter.emit('hello', 'David');

eventEmitter.removeListener('hello',listener1); // you need to pest event 'hello', the order differs
console.log(eventEmitter.listenerCount('hello'));
