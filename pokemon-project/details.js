// get urlParams from url
//https://www.sitepoint.com/get-url-parameters-with-javascript/

function getPokemon(){
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const pokemonId = urlParams.get('pokemon');
  return pokemon[Number(pokemonId)];
}

// get our chosen pokemon
const p = getPokemon();

// create number element wih class number
const pokemonNumberElement = document.createElement('div');
pokemonNumberElement.className = 'number';
pokemonNumberElement.textContent = `#${p.id}`;

// create pokemon image
const pokemonImageElement = document.createElement('img');
pokemonImageElement.src = `./images/${p.id.toString().padStart(3, '0')}.png`;
pokemonImageElement.alt = p.name.english;
pokemonImageElement.id = p.name.english;

// create pokemon name with class name
const pokemonNameElement = document.createElement('div');
pokemonNameElement.className = 'name';
pokemonNameElement.textContent = p.name.english;
// create pokemon types with class types example: <div><span>Grass</span><span>Poison</span></div>
const divElement = document.createElement('div');
divElement.className = 'types';

for(i in p.type){
  const typeElement = document.createElement('span');
  typeElement.textContent = p.type[i];
  typeElement.style.background = `${colors[p.type[i]]}`;
  divElement.appendChild(typeElement);
}

let detailsWrapperElement = document.querySelector('.details-wrapper');

detailsWrapperElement.appendChild(pokemonNumberElement);
detailsWrapperElement.appendChild(pokemonImageElement);
detailsWrapperElement.appendChild(pokemonNameElement);
detailsWrapperElement.appendChild(divElement);

for( key in p.base){
  let statElement = document.createElement('div');
  statElement.textContent = `${key}: ${p.base[key]}`;
  statElement.className = 'stats';
  detailsWrapperElement.appendChild(statElement);
}

const appWrapperElement = document.createElement('div');
appWrapperElement.id = 'app';

//document.body.appendChild(appWrapperElement);
//detailsWrapperElement = appWrapperElement.insertBefore(detailsWrapperElement,null);
//appWrapperElement.appendChild(detailsWrapperElement);
//document.body.appendChild(appWrapperElement);
//appWrapperElement.appendChild(detailsWrapperElement);

// app div se pozicionira sam ?!

//https://lockdown-learning-ix5bxftef.now.sh/pokemon-project/details.html?pokemon=0
