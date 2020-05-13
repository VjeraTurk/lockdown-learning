console.log('Before');

setTimeout(()=>{
    console.log('Hello');
},3000);

//don't create timer/clock with this, this ain't a real second:
setInterval(()=>{
    console.log('1 sec has passed');
},1000);
//asyncronously but now
setImmediate(()=> {
    console.log('Now!');
});

console.log('After');