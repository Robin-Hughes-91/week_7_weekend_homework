const PubSub = require('../helpers/pub_sub.js');


const PokemonView = function (container, pokemon) {
  this.PokemonContainer = container;
  this.pokemon = pokemon;
};

PokemonView.prototype.bindEvents = function () {
  PubSub.subscribe('Pokemon:Selected-Pokemon-data-ready', (evt) => {
    this.render(evt.detail);
    console.log('Pokemon View data received', evt.detail);
  });

}

// PokemonView.prototype.render = function () {
//   const PokemonContainer = document.createElement('div');
//   PokemonContainer.classList.add('pokemon-div');
//
//   const name = this.createPokemonHeading();
//   PokemonContainer.appendChild(name);
//
//   const PokemonList = this.createPokemonList();
//   PokemonContainer.appendChild(PokemonList);
//
//   this.PokemonContainer.appendChild(PokemonContainer);
// };
//
// PokemonView.prototype.createPokemonHeading = function (pokemon) {
//   console.log(pokemon);
//   const name = document.createElement('h2');
//   name.classList.add('pokemon-name');
//   console.log(this.name);
//   if (!this.name) {
//     name.textContent = "Misc";
//   } else {
//     name.textContent = this.name;
//   }
//   return name;
// };
//
// PokemonView.prototype.createPokemonList = function () {
//   const pokemonList = document.createElement('ul');
//   pokemonList.classList.add('pokemons');
//   this.populateList(pokemonList);
//   return pokemonList;
// };
//
// PokemonView.prototype.populateList = function (list) {
//   console.log(this);
//   this.pokemon.forEach((pokemon) => {
//     const pokemonListItem = document.createElement('li');
//     pokemonListItem.textContent = pokemon.weight;
//     pokemonListItem.textContent = pokemon.height;
//     list.appendChild(pokemonListItem);
//   });
// };


PokemonView.prototype.render = function (pokemon) {
  this.PokemonContainer.innerHTML = " "
  console.log(pokemon);

  const div = document.createElement('div');
  this.PokemonContainer.appendChild(div);

  const name = document.createElement('h1');
  name.textContent = pokemon.name;
  div.appendChild(name);

  const list = document.createElement('ul');
  list.classList.add('pokemons');
  list.textContent = "Pokemon Info";
  div.appendChild(list);
  const weight = document.createElement('li');
  weight.textContent = ` Weight: ${pokemon.weight}`;
  list.appendChild(weight);
  const xp = document.createElement('li');
  xp.textContent = ` XP: ${pokemon.base_experience}`;
  list.appendChild(xp);
  const abilities = document.createElement('li');
  abilities.textContent = ` Abilities: ${pokemon.abilities[0].ability.name} and ${pokemon.abilities[1].ability.name}`;
  list.appendChild(abilities);
  const type = document.createElement('li');
  type.textContent = ` Type: ${pokemon.types[0].type.name}`;
  list.appendChild(type);

  const picture = document.createElement('img');
  picture.setAttribute('src', `${pokemon.sprites.front_default}`);
  picture.setAttribute("height", "400");
  picture.setAttribute("width", "400");
  picture.setAttribute("alt", "suppp");
  picture.setAttribute("id", "image");
  div.appendChild(picture);


      var image = document.getElementById("image");
      var currentPos = 0;
      var images = [ `${pokemon.sprites.back_default}`, `${pokemon.sprites.front_default}`]

      function volgendefoto() {
          if (++currentPos >= images.length)
              currentPos = 0;
          image.src = images[currentPos];
      }
      setInterval(volgendefoto, 2000);



}






module.exports = PokemonView;
