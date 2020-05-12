const events = require('events');

const eventEmitter = new events.EventEmitter();

const listener1 = (text) => {
  console.log(`1: Hello, ${text}!`);
}

eventEmitter.on('hello', listener1);

eventEmitter.on('hello', (text) => {
  console.log(`2: Hello, ${text}!`);
});


console.log(events.EventEmitter.listenerCount(eventEmitter, 'hello'));

eventEmitter.emit('hello', 'David');

eventEmitter.removeListener('hello', listener1);


console.log(events.EventEmitter.listenerCount(eventEmitter, 'hello'));

eventEmitter.emit('hello', 'David');