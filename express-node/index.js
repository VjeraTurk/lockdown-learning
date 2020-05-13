const express = require('express');
const bodyParser = require('body-parser'); //what types of data can you send from front-end to back-end for your rest API to read it without problems.
const multer = require('multer');

//const upload = multer({dest: 'public/'});
//endpoint for diskstorage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'public/')
    },
    filename: (req, file, cb) => {
      cb(null, file.originalname)
    }
  })
const upload = multer({storage: storage});

const app = express();
app.use(bodyParser.json());//You should  limit this types of data, and in this example we'll be using json, mostly

app.use(express.static('public')); //public folder on our server
//it is important to add  enctype = "multipart/form-data" in <form></form>
app.post('/upload', upload.single('image'), (req, res)=>{ //upload.single('image') is "middleware function" -it's in between path and callback
    console.log(req.file, req.body);
    res.send('Uploaded');
})

app.get('/',  (req, res) => {
    console.log('Hello!');
    res.send('GET request to homepage')
  });

app.get('/users', (req, res)=>{ //array
    res.send([
        {
        name: 'David',
        surname: 'Abram'
        }
    ])
});
//http://localhost:3000/users/1?date=12-5-2020
app.get('/users/:id',(req, res) => {// just one user
    res.send({
        id: req.param.id,
        name: 'David',
        surname: 'Abram',
        username: req.params.username,
        query:req.query,
    })
});
/*
//keep slash at the begining!
app.all('/get-*', (req, res) => { //every method
    //res.send('This starits with get-');
    res.send(`This starts with get-${req.url} and it is called by ${req.method}`);
})
*/
const getFunc = (req, res) => {
    res.send(`This is ${req.url} and is called by ${req.method}`);
  };
app.all('/get-*', getFunc);

app.post('/users', (req, res) => {
//    console.log(req.body);
//    console.log(Number(req.body.a) * Number(req.body.b));
    res.send({ number: Number(req.body.a) * Number(req.body.b)});
})

app.get('/*', (req, res) => {
    res.send('Nothing here'); //404
})

// starting a server
app.listen(3000, () => {
    console.log('Your server has started');
})
//fetch('http://localhost:3000').then(response => response.text()).then(console.log);
//GET request to homepage

// always put headers inhere:
//fetch('http://localhost:3000/users', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({a : 4, b : 3})}).then(response => response.text()).then(console.log);