let pokemon = document.querySelector(".pokemon");

let out = ``;

fetch(`./pokemon.json`)
  .then((response) => response.json())
  .then((pokemons) => {
    for (let pokemon of pokemons) {
      out += `
      <div class = "pokedexcontainer">
      <div class = "pokedex">
     
        <div class = "pokemonimgcard" >
        <img class = "pokemonimg" src="${pokemon.img}"></img>
        </div>
        <div class = "pokemontitle">
        <p>${pokemon.name}</p>
        </div>
        </div>
        </div>
        `;
    }
    pokemon.innerHTML = out;
  });
