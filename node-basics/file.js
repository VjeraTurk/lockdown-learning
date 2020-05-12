const fs = require('fs'); // import fs from 'fs';

const folderName = './files';

if(!fs.existsSync(folderName)) {
  fs.mkdirSync(folderName);
}

try {
  fs.writeFileSync(`${folderName}/text.txt`, 'Hello, world!', 'utf8');
  const data = fs.readFileSync(`${folderName}/text.txt`, 'utf8');
  console.log(data);
  fs.writeFileSync(`${folderName}/text2.txt`, data, 'utf8');
  fs.appendFileSync(`${folderName}/text2.txt`, data, 'utf8');

  fs.unlinkSync(`${folderName}/text.txt`);

} catch(err) {
  console.log(err);
}

/*
fs.readFile('./text.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
  fs.writeFile('./text2.txt', data, 'utf8', (err, data) => {
    if(err) throw err;
    console.log(data);
  });
  fs.appendFile('./text2.txt', data, 'utf8', (err, data) => {
    if(err) throw err;
    console.log(data);
  });
});
*/