const {readPets, readPetsById} = require('./pet');
let id = 2;

let people = [
    {
        id : 1,
        name : 'David',
        surname : 'Abram',
        age : 30,
    },
    {
        id : 2,
        name : 'John',
        surname : 'Smith',
        age : 35,
    },

]

const readPeople = (req, res)=>{
    const pets = readPets();
    return people;
}
const readPersonById = (id)=>{
    return people.find (person => person.id === id); // will return null if no such id
}
//array.splice + findIndex
const deletePersonById = (id) =>{
    const pets = readPersonByOwnerId(id);
    pets
    const newPeople = people.filter(person => person.id !== id);
    pets.foreach(pet => pet.ownerId = null);
    people = newPeople;
}
const createPerson = (name, surname, age)=>{
    //will increment id manually, because why not
    //const newID = people.map(person => person.id).reduce();
    //const newid = people[people.length-1].id + 1;
    const newPerson ={
        //id = l++id,
        id : ++id,
        name,
        surname,
        age,
    }
    people.add(newPerson);
    return newPerson;
}

module.exports = {
    readPeople,
    readPersonById,
    deletePersonById,
    createPerson
}