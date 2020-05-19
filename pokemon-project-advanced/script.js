import { colors, types } from './data';
import { createPokemon, deletePokemon } from './fetch';

const getBackground = (type) => type.length === 2 ? `linear-gradient(0.625turn, ${colors[type[0]]} 50%, ${colors[type[1]]} 50% 100%)` : colors[type[0]]

const wrapperElement = document.querySelector('#app > .wrapper')
const searchBoxElement = document.querySelector('#app > .search-box')

const pokemonElementList = [];

const filterPokemonList = async (text) => {
  //searches in backend are much cheeper than in frontend and search we made now is more powerful as it searches all pokemon properties, not just english name
  const response = await fetch(`http://localhost:3000/pokemon?q=${text}`);

  const foundPokemon = await response.json();

  const foundPokemonIds = foundPokemon.map(pokemon => pokemon.id);
  const filteredByName = pokemonElementList.filter(p => foundPokemonIds.includes(Number(p.id)));// remember that every property on HTML element will be String!

  filteredByName.forEach(p => p.style.display = '');
  pokemonElementList.filter(p => !filteredByName.includes(p)).forEach(p => p.style.display = 'none');
}


const initSearchBox = () => {
  const searchTextElement = document.querySelector('.search-text');
  searchTextElement.onkeyup = (event) => filterPokemonList(event.target.value);
}

const createPokemonList = async () => {
  const response = await fetch('http://localhost:3000/pokemon');

  const pokemon = await response.json();

  pokemon.forEach((p, i) => {
    const pokemonElement = document.createElement('div');
    pokemonElement.classList.add('pokemon');
    pokemonElement.style.background = getBackground(p.type);

    const pokemonImageElement = document.createElement('img');

    pokemonImageElement.src = `https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/thumbnails/${p.id.toString().padStart(3, 0)}.png`;

    pokemonImageElement.id = p.name.english;

    const pokemonNameElement = document.createElement('span');
    pokemonNameElement.textContent = p.name.english;

    pokemonElement.id = p.id; //document.querySelector('#4'); is not valid, you can use document.querySelector("[id='4']");
    pokemonElement.dataset.id = i;
    pokemonElement.appendChild(pokemonImageElement);
    pokemonElement.appendChild(pokemonNameElement);
    wrapperElement.appendChild(pokemonElement);

    pokemonElement.onclick=() =>{
      console.log(pokemonElement.id);
      deletePokemon(Number(pokemonElement.id));
    };
    pokemonElementList.push(pokemonElement);
  });
};

const initSelectTypeElement = (types) =>{
  const pokemonSelectTypeElement = document.createElement('select');

  types.forEach((type) => {
    const option = document.createElement('option');
    option.name = type;
    option.value= type;
    option.setAttribute('class',type);
    option.textContent= type;
    pokemonSelectTypeElement.appendChild(option);
  })
  return pokemonSelectTypeElement;
}

function hideOption(event) {
  const thisPokemonSelectTypeElement = event.target;
  const otherPokemonSelectTypeElement =  event.target.id === document.querySelector(`#type-1`).id ? document.querySelector(`#type-2`): document.querySelector(`#type-1`);

  const options = otherPokemonSelectTypeElement.children;
    for (let i = 0; i < options.length; i++) {
      options[i].hidden = false;
    }

    try{
    otherPokemonSelectTypeElement.querySelector(`.${thisPokemonSelectTypeElement.value}`).hidden = true;
  }catch(exception){
    console.log('no default option');
  }
}

const initTextElements = (data) => {

  let textElements = new Array();

  data.forEach((item) => {
    const baseElement = document.createElement('input');
    baseElement.type = 'text';
    baseElement.placeholder = item;
    //console.log(item);
    textElements.push(baseElement);
  })
  return textElements;
}

const initCreatePokemonForm = () => {

  const createPokemonForm = document.querySelector('#create-pokemon-form');
  const nameElements = initTextElements (['English name','Japanese name', 'Chinese name', 'French name']);
  nameElements.forEach(nameElement => createPokemonForm.append(nameElement));
  //const types = colors.<var names>

  const pokemon1stTypeElement = initSelectTypeElement(types.types);
  const pokemon2ndTypeElement = initSelectTypeElement(types.types);

  let defaultOption = document.createElement('option');
  defaultOption.textContent = "--";
  defaultOption = pokemon2ndTypeElement.insertBefore(defaultOption, pokemon2ndTypeElement.firstChild);
  pokemon2ndTypeElement.value = defaultOption.textContent;

  pokemon1stTypeElement.id = "type-1";
  pokemon2ndTypeElement.id = "type-2";

  //disable choosing the same type twice:
  pokemon1stTypeElement.onchange = hideOption;
  pokemon2ndTypeElement.onchange = hideOption;

  createPokemonForm.appendChild(pokemon1stTypeElement);
  createPokemonForm.appendChild(pokemon2ndTypeElement);

  const baseElements = initTextElements(['HP','Attack', 'Defense', 'Sp. Attack','Sp. Defense', 'Speed']);
  baseElements.forEach(baseElement => createPokemonForm.append(baseElement));

  const submitButtonElement = document.createElement('button');

  submitButtonElement.onclick = ()=>{
    console.log('Submit');
    createPokemon({
      name: {
        english: nameElements[0].value,
        japanese: nameElements[1].value,
        chinese: nameElements[2].value,
        french: nameElements[3].value
      },
        type : pokemon2ndTypeElement.value == '--' ? [pokemon1stTypeElement.value] : [pokemon1stTypeElement.value, pokemon2ndTypeElement.value]      ,
      base: {
        HP: Number(baseElements[0].value),
        Attack: Number(baseElements[1].value),
        Defense: Number(baseElements[2].value),
        "Sp. Attack": Number(baseElements[3].value),
        "Sp. Defense": Number(baseElements[4].value),
        Speed: Number(baseElements[5].value)
      }
    });
    console.log("created");
  }
  submitButtonElement.textContent = "Done";
  createPokemonForm.appendChild(submitButtonElement);

}

const updatePokemonList =  ()=> {

}


const init = () => {
  createPokemonList();
  initSearchBox();
  initCreatePokemonForm();
};

init();

// 1. Create a form for new pokemon creation
/*
DONE
additional TODOs:
  - check for empty inputs
*/

/*createPokemon({
  name: {
    english: "Bulbclone",
    japanese: "フシギダネ",
    chinese: "妙蛙种子",
    french: "Le Bubclone"
  },
  type: ["Grass",
  "Poison"
],
  base: {
    HP: 45,
    Attack: 49,
    Defense: 49,
    "Sp. Attack": 65,
    "Sp. Defense": 65,
    Speed: 45
  }
});*/

// 2. Delete pokemon on click (including newly created pokemon!)
/*
DONE
*/

//  deletePokemon(5);

// 3. On every delition or creation of a pokemon, you should update (refetch) the data
//function updatePokemonList that will **do some magic**

/*
TODO:
  - updatePokemonList nakon delete
  - izgleda da se nakon create stranica sama refresha
*/
