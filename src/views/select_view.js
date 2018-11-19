const PubSub = require('../helpers/pub_sub.js');

const SelectView = function (element) {
  this.element = element;
};

SelectView.prototype.bindEvents = function () {
  PubSub.subscribe('Pokemon:Pokemon-data-ready', (evt) => {
    const allPokemon = evt.detail;
    this.populate(allPokemon);
  });

  SelectView.prototype.populate = function (pokemonData) {
    pokemonData.forEach((pokemon, index) => {
      const option = document.createElement('option');
      option.textContent = pokemon.name;
      option.value = index;
      this.element.appendChild(option);
    });
  };

  this.element.addEventListener('change', (evt) => {
    var selectedIndex = evt.target.value;
    console.log(evt.target.value);
    PubSub.publish('SelectView:change', selectedIndex);
    var newindex = parseInt(selectedIndex, 10)

    const url = "https://pokeapi.co/api/v2/pokemon/" + (newindex += 1);
    console.log(url);
    PubSub.publish('SelectView:change-url', url);
  });
};

























module.exports = SelectView;
