const url = 'http://localhost:3000/pokemon';
 
export async function createPokemon(data = {}) {
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return await response.json(); // parses JSON response into native JavaScript objects
  }
  //takes some data of pokemon, stringifies it and sends to back-end via POST method

export async function deletePokemon(id){
  //if ID is undifiend show error
  if(!id){
    throw new Error('You should pass id');
  } 
 
  const response = await fetch(`${url}/${id}`, {
    method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
    /*headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data) // body data type must match "Content-Type" header
    */
  });
  return await response.json(); // parses JSON response into native JavaScript objects
}