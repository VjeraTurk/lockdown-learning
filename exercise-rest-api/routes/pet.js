let pets = [
    {
        id : 1,
        name : 'David',
        surname : 'Abram',
        age : 30,
    },
    {
        id : 1,
        name : 'John',
        surname : 'Smith',
        age : 35,
    },

]

const readPets = (req, res)=>{
    return pets;
}

const readPetByOwnerId = (ownerId)=>{

}
const readPetById = (id)=>{
    return pets.find (Pet => Pet.id === id); // will return null if no such id
}
//array.splice + findIndex
const deletePetById = (id) =>{
    const newPets = pets.filter(Pet => Pet.id !== id);
    pets = newPets;
}
const createPet = (name, species, owner)=>{
    const newid = pets[pets.length-1].id + 1;
    const newPet ={
       // id =++id,
        id : newid,
        name,
        surname,
        age,
    }
    pets.add(newPet);
    return newPet;
}

module.exports = {
    readPets,
    readPetById,
    deletePetById,
    readPetByOwnerId,
    createPet
}