const poke_container = document.getElementById('poke-container');
const pokemon_count = 150;
const colors = {
  fire: '#FDDFDF',
  grass: '#DEFDE0',
  electric: '#FCF7DE',
  water: '#DEF3FD',
  ground: '#f4e7da',
  rock: '#d5d5d4',
  fairy: '#fceaff',
  poison: '#98d7a5',
  bug: '#f8d5a3',
  dragon: '#97b3e6',
  psychic: '#eaeda1',
  flying: '#F5F5F5',
  fighting: '#E6E0D4',
  normal: '#F5F5F5',
};

const mainTypes = Object.keys(colors);

function createPokemonCard(pokemon) {
  const pokemonEl = document.createElement('div');
  pokemonEl.classList.add('pokemon');

  const pokeTypes = pokemon.types.map((type) => type.type.name);
  const type = mainTypes.find((type) => pokeTypes.indexOf(type) > -1);

  pokemonEl.innerHTML = `
  <div class="img-container">
    <img
      src="${pokemon.sprites.other['official-artwork'].front_default}"
      alt="pokemon"
    />
  </div>
  <div class="info">
    <span class="number">#${(pokemon.order + '').padStart(3, 0)}</span>
    <h3 class="name">${pokemon.name}</h3>
    <small class="type">Type: <span>${type}</span></small>
  </div>`;
  pokemonEl.style.backgroundColor = colors[type];
  poke_container.appendChild(pokemonEl);
}

async function getPokemon(id) {
  try {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const res = await fetch(url);
    const data = res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

async function fetchPokemon() {
  let promises = [];
  for (let id = 1; id <= pokemon_count; ++id) {
    promises.push(getPokemon(id));
  }
  const data = await Promise.all(promises);
  for (const pokemon of data) {
    createPokemonCard(pokemon);
  }
}

fetchPokemon();
