
console.log('Before');

setTimeout(() => {
  console.log('Hello');
}, 0);

setTimeout(() => {
  console.log('Hello');
}, 0);

setTimeout(() => {
  console.log('Hello');
}, 0);

setTimeout(() => {
  console.log('Hello');
}, 0);

setImmediate(() => {
  console.log('Now!');
});

console.log('After');