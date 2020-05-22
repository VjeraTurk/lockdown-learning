let id = 2;

let pets = [
    {
        id : 1,
        name : 'Tami',
        species : 'dog',
        ownerId : 2
    },
    {
        id : 2,
        name : 'Bela',
        species : 'dog',
        ownerId : 1
    }, //Json doesn't tolerate thees commas
   // , //nor thees
]

const readPets = (req, res)=>{
    return pets;
}
const readPetById = (id)=>{
    return pets.find (pet => pet.id === id); // will return null if no such id
}
const readPetByOwnerId = (id) =>{
    return pets.filter( pet => pet.ownerId === id);
}
//array.splice + findIndex
const deletePetById = (id) =>{
    const pets = readPetByOwnerId(id);
    pets
    const newPets = pets.filter(pet => pet.id !== id);
    pets.foreach(pet => pet.ownerId = null);
    pets = newPets;
}
const createPet = (name, species, ownerId) =>{

    const newPet = {

        id : ++id,
        name,
        species,
        ownerId,
    }

    pets.push(newPet);
    console.log(newPet);
    return newPet;
};
const createPets = (newPets) => {
    console.log(newPets);
    return newPets.map(newPet => createPet(newPet));
};
const updatePet = (id, name, species, ownerId) => {
    const pet = pets.find(pet => pet.id === id);
    pet.name = name ? name : pet.name;
    pet.species = species ? species : pet.species;
    pet.ownerId = ownerId ? ownerId : pet.ownerId;
    return pet;
}

module.exports = {
    readPets,
    readPetById,
    readPetByOwnerId,
    deletePetById,
    createPet,
    createPets,
    updatePet,
}