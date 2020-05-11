import { ask } from './magical8ball.js';
//let result;
function askCallback() {
    console.log('Before askCallback');
    ask('Should I order a pizza?', (error, answer) => {
        if (error !== null) { //agreement if there's no error callbacks error return null
            console.log('callback',`Error: ${error.message}`);
            //result = answer;
        }else{
            console.log('callback',`Answer: ${answer}`);
        }
    });
    console.log('After askCallback');
}// Callbacks are really, really awful -there's a better way: Promises - but this is not the best way, ther's another way
function askPromise() {
    console.log('Before askPromise');
    ask('Should I order pizza?')
        .then(answer => console.log('promise', `Answer is: ${answer}.`))
        .catch(error => console.log('promise',`Error is: ${error.message}.`));

    console.log('After askPromise');
}

async function askAsync(){
    console.log('Before askAsync');
    try {
        const answer = await ask('Should I order sushi?');//await  waits for function to be done
        console.log('async', `Answer is: ${answer}.`);
    } catch (error){
        console.log('async', `Error is: ${error.message}.`);
    }
    console.log('Before askAsync');
}
/*askCallback();
askPromise();
askAsync();
*/
//fetch can't realy detect what type of data are we getting (text, JSON,HTML, image...)
// transform it to json
fetch('http://localhost:3000/pokemon')
    .then(response => response.json())// it works like map response, what you return in first then
    .then(data => console.log(data))// you will get in second then
    .catch(error =>console.log(error));

async function getPokemon(id){

    try{
    const responce = id
    ? await fetch(`http://localhost:3000/pokemon?id=${id}`)
    : await fetch(`http://localhost:3000/pokemon`);
    const data = await responce.json(); //pars the data to json
    console.log(data);
    } catch (error){
        console.log(error);
    }
}


getPokemon(3);
getPokemon();
//1:00:00 98% per cent of front-end development  is just- okay, I need to get some data, I need to parse that data and show it visually to my client and let my client update the data in some meaningful way
// JavaScript - ONLY ONE THREAD!!
// There are more Promises on back-end than on front-end
    /* function callback(error, result) {
    console.log(error, result);
}

function doStuff(callback) {
    const text = 'some stuff done';
    callback(null, text);
}
console.log('Before');
doStuff(callback);
console.log('After');
 */