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


const initNewPokemonForm = ()=> {

  //const types = colors
  const newPokemonForm = document.querySelector('.form-wrapper');

  const pokemonEnglishNameElement = document.createElement('input');
  const pokemonJapaneseNameElement = document.createElement('input');
  const pokemonChineseNameElement = document.createElement('input');
  const pokemonFrenchNameElement = document.createElement('input');

  pokemonEnglishNameElement.type = 'text';
  pokemonEnglishNameElement.placeholder = 'English name';

  pokemonJapaneseNameElement.type = 'text';
  pokemonJapaneseNameElement.placeholder = 'Japanese name';

  pokemonChineseNameElement.type = 'text';
  pokemonChineseNameElement.placeholder = 'Chinese name';

  pokemonFrenchNameElement.type = 'text';
  pokemonFrenchNameElement.placeholder = 'French name';

  newPokemonForm.appendChild(pokemonEnglishNameElement);
  newPokemonForm.appendChild(pokemonJapaneseNameElement);
  newPokemonForm.appendChild(pokemonChineseNameElement);
  newPokemonForm.appendChild(pokemonFrenchNameElement);

  console.log(types.types);

  const pokemon1stTypeElement = document.createElement('select');
  const pokemon2ndTypeElement = document.createElement('select');

  const defaultOption = document.createElement('option');
  defaultOption.setAttribute("value", "");
  defaultOption.textContent = "--";

  pokemon1stTypeElement.appendChild(defaultOption);
  pokemon2ndTypeElement.appendChild(defaultOption);

  types.types.forEach((type) => {
    const option = document.createElement('option');
    option.setAttribute("name",type);
    option.setAttribute("id",type);
    option.setAttribute("value",type);
    option.setAttribute("label",type);
    option.textContent= type;

    pokemon1stTypeElement.appendChild(option);
    pokemon2ndTypeElement.appendChild(option); // deappenda iz 1stTypeElement
  })
  newPokemonForm.appendChild(pokemon1stTypeElement);
  newPokemonForm.appendChild(pokemon2ndTypeElement);

  const submitButtonElement = document.createElement('button');

  submitButtonElement.onclick = ()=>{
    console.log('Submit');
    //const type = new Array;
    //if (pokemon1stTypeElement)

    //new Pokemon();
    createPokemon({
      name: {
        english: pokemonEnglishNameElement.value,
        japanese: pokemonJapaneseNameElement.value,
        chinese: pokemonChineseNameElement.value,
        french: pokemonFrenchNameElement.value
      },
      type: ["Grass", // ? length 
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
    });
  }
  submitButtonElement.textContent = "Done";
  newPokemonForm.appendChild(submitButtonElement);

}

const updatePokemonList =  ()=> {

}


const init = () => {
  createPokemonList();
  initSearchBox();
  initNewPokemonForm();
};

init();

// 1. Create a form for new pokemon creation

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

//  deletePokemon(5);

// 3. On every delition or creation of a pokemon, you should update (refetch) the data
//function updatePokemonList that will **do some magic**
