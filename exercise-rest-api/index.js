const express = require('express');
const bodyParser = require('body-parser');
const { readPeople, readPersonById, createPerson, createPeople, deletePersonById, updatePerson} = require('./routes/person')
const { readPets, readPetById, deletePetById, updatePet, createPet, createPets} = require('./routes/pet')
const app = express();
app.use(bodyParser.json());
//person
app.route('/person')
 .get((req,res) => {
    res.send(readPeople());
  })
  .post((req, res)=> {

    if (Array.isArray(req.body)){
      const result = createPeople(req.body);
      res.send(result);
    }else{
      const result = createPerson(req.body.name, req.body.surname, req.body.age); // username instead of surname
      res.send(result); //important! (Insomnia is stuck on *Loading* if this is not included)
    }
  })
  app.route('/person/:id')
  .get( (req, res) => {
    const result = readPersonById(Number(req.params.id));
    result ? res.send(result) : res.status(404).send('We lost your person');
  })
  .put((req, res)=> { //such design (no need to define id in body, updating only single person) is so-so, yet good for some quick changes - design should be discussed within team
    const result = updatePerson(Number(req.params.id), req.body.name, req.body.surname, req.body.age);
    result ? res.send(result): res.status(404).send('We lost your person');
  })
  .delete((req, res)=> {
      deletePersonById();
  })
//pet
app.route('/pet')
 .get((req,res) => {
    res.send(readPets());
  })
  .post((req, res)=> {

    if (Array.isArray(req.body)){
      const result = createPets(req.body);
      res.send(result);
    }else{
      const result = createPet(req.body.name, req.body.species, req.body.ownerId);
      res.send(result); //important! (Insomnia is stuck on *Loading* if this is not included)
    }
  })
  app.route('/pet/:id')
  .get( (req, res) => {
    const result = readPetById(Number(req.params.id));
    result ? res.send(result) : res.status(404).send('');
  })
  .put((req, res)=> { //such design (no need to define id in body, updating only single pet) is so-so, yet good for some quick changes - design should be discussed within team
    const result = updatePet(Number(req.params.id), req.body.name, req.body.surname, req.body.age);
    result ? res.send(result): res.status(404).send('');
  })
  .delete((req, res)=> {
      deletePetById();
  })
app.listen(8000);

app.get('/',(req,res)=> {
    res.send('Hello world');
})
//app.listen(8000);
app.get('/',(req,res)=>{
    res.send('Hello world');
})