const {readPets, readPetById, readPetByOwnerId} = require('./pet');
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
    //return people.map(person => ({...person,pets: pets.filter(pet => pet.ownerId === person.id)}));
    return people.map(person => ({...person, pets: readPetByOwnerId(person.id)}));

}
const readPersonById = (id)=>{
    return {...people.find (person => person.id === id), pets : readPetByOwnerId(id)}; // will return null if no such id
}
//array.splice + findIndex
const deletePersonById = (id) =>{
    const pets = readPetByOwnerId(id);
    pets.foreach(pet => pet.ownerId = null);
    people = people.filter(person => person.id !== id);
}
const createPerson = (name, surname, age)=>{
    //will increment id manually, because why not
    //const newID = people.map(person => person.id).reduce();
    //const newID = people[people.length-1].id + 1;
    const newPerson = {
        //id = l++id,
        id : ++id,
        name,
        surname,
        age,
    }

    people.push(newPerson);
    return newPerson;
};
const createPeople = (newPeople) => {
    return newPeople.map(newPerson => createPerson(newPerson));
};
const updatePerson = (id, name, surname, age) => {
    const person = people.find(person => person.id === id);
    person.name = name ? name : person.name;
    person.surname = surname ? surname : person.surname;
    person.age = age ? age : person.age;
    return person;
}

module.exports = {
    readPeople,
    readPersonById,
    deletePersonById,
    createPerson,
    createPeople,
    updatePerson,
}