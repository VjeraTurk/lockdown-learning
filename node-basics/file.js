const fs = require('fs');//import fs from 'fs'; Requires a lot of "legwork" to set it up to work this way
// if no encoding is specified, raw buffer is returnes: <Buffer 48 65 6c 6c 6f 21>
//sync has no callback (has to use try catch outside) sometimes sync is prefered, when you are runing scripts locally, don't need speed or scalability. async is prefered for REST API
const folderName = `./files`;

if (!fs.existsSync(folderName)){
    fs.mkdirSync(folderName);
}

try {
    fs.writeFileSync(`${folderName}/text.txt`, 'Hello, world!', 'utf8');
    const data = fs.readFileSync(`${folderName}/text.txt`,'utf8');
    console.log(data);
    fs.writeFileSync(`${folderName}/text2.txt`, data, 'utf8');
    fs.appendFileSync(`${folderName}/text2.txt`, data, 'utf8');

    //fs.rmdirSync(); to remove directory
    fs.unlinkSync(`${folderName}/text.txt`);
} catch (err){
    console.log(err);
}

// Event loop is for sending messages inside your program
// Queue of events FIFO, asyncronus programming won't stop event loop - this is important because Node.js works in 1 Thread
// Node.js will use only 1 core - billions of events will be served slowly, (but will be processd eventualy), while multi-trhread languages will fail ?

/*
fs.readFile('./text.txt','utf8',(err,data)=>{
    if (err) throw WritableStream;
    console.log(data);
    fs.writeFile('./txt2.txt',data,'utf8',(err,data)=>{
        if(err) throw err;
        console.log(data);
    });
    fs.appendFile('./txt2.txt',data,'utf8',(err,data)=>{
        if(err) throw err;
        console.log(data);
    });
});
*/