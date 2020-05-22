const express = require('express');
const bodyParser = require('body-parser');
const { readPeople, readPersonById, deletePersonById} = require('./routes/person')
const { readPets, readPetById,readPetByOwnerId, deletePetById} = require('./routes/pet')
const app = express();
app.use(bodyParser.json());
//person
app.route('/person')
 .get((req,res) =>{
    res.send(readPeople());
  })
  .post((req, res)=>{
    const result = createPerson(req.body.name, req.body.username, req.body);
  })
  app.route('/person/:id')
  .get( (req, res) =>{
      res.send(readPersonById(Number(req.params.id)));
  })
  .delete((req, res)=>{
      deletePersonById();
  })
app.listen(8000);
app.get('/',(req,res)=>{
    res.send('Hello world');
})

//pet
app.route('/pet')
 .get((req,res) =>{
    res.send(readPets());
  })
  .post((req, res)=>{
    const result = createPerosn(req.body.name, req.body.username, req.body);
  })
  app.route('/pet/:id')
  .get( (req, res) =>{
      res.send(readPetById(Number(req.params.id)));
  })
  .delete((req, res)=>{
      deletePetById();
  })
app.listen(8000);
app.get('/',(req,res)=>{
    res.send('Hello world');
})