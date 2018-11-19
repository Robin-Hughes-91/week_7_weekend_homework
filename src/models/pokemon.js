const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');
const PokemonView = require('../views/pokemon_view.js');

const Pokemon = function () {
  this.pokemon = [];
};


Pokemon.prototype.getData = function () {
const url = ('https://pokeapi.co/api/v2/pokemon-species/');
  const request_helper = new RequestHelper(url);
  console.log(url);

  request_helper.get()
  .then((pokemon)=>{
    console.log(pokemon);

    this.data = pokemon.results
    console.log(pokemon.results);
    PubSub.publish('Pokemon:Pokemon-data-ready', this.data);
    console.log(this.data);

  })
};



Pokemon.prototype.getData2 = function () {
  PubSub.subscribe('SelectView:change-url', (evt) => {
    console.log('Pokemon url data in getdata2', evt.detail);

    const url = evt.detail;
      const request_helper = new RequestHelper(url);
      console.log(url);

      request_helper.get()
      .then((pokemon)=>{

        this.data = pokemon
        console.log(pokemon);
        PubSub.publish('Pokemon:Selected-Pokemon-data-ready', this.data);
        console.log(this.data);

      })
  });
};

Pokemon.prototype.bindEvents = function(){
  this.data = this.pokemon;
  PubSub.subscribe('SelectView:change', (evt) => {
    const selectedIndex = evt.detail;
    console.log(evt.detail);
    console.log(this.data);
    console.log(this.pokemon);

    const selectedPokemon = this.data[selectedIndex];
    console.log(selectedPokemon);

    PubSub.publish('Pokemon:selected-pokemon-ready', selectedPokemon)
  });
};

// Continents.prototype.handleDataReady = function (countries) {
//   const continentNames = this.getContinentNames(countries);
//   this.modelContinents(countries, continentNames);
// };
//
// Continents.prototype.getContinentNames = function (countries) {
//   return countries
//     .map(country => country.region)
//     .filter((region, index, regions) => regions.indexOf(region) === index);
// };
//
// Continents.prototype.modelContinents = function (countries, continentNames) {
//   this.continents = continentNames.map((continentName) => {
//     return {
//       name: continentName,
//       countries: this.countriesByContinent(countries, continentName)
//     };
//   });
// };
//
// Continents.prototype.countriesByContinent = function (countries, continent) {
//   return countries.filter(country => country.region === continent);
// };

module.exports = Pokemon;
