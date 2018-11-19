const PokemonListView = require('./views/pokemon_list_view.js');
const SelectView = require('./views/select_view.js');
const PokemonView = require('./views/pokemon_view.js');
const Pokemon = require('./models/pokemon.js');



// const ErrorView = require('./views/error_view.js');

document.addEventListener('DOMContentLoaded', () => {
  

  const pokemon = new Pokemon();
  pokemon.getData();
  pokemon.getData2();

  pokemon.bindEvents();
  console.log(pokemon);

  // const pokemonList = document.querySelector('#pokemon');
  // const pokemonListView = new PokemonListView(pokemonList);
  // console.log(pokemonList);
  // pokemonListView.bindEvents();

  const infoDiv = document.querySelector('#pokemon')
  const pokemonView = new PokemonView(infoDiv);
  pokemonView.bindEvents();

  const selectElement = document.querySelector('select#pokemon-dropdown');
  const pokemonDropdown = new SelectView(selectElement);
  console.log(selectElement);
  pokemonDropdown.bindEvents();

  // const activityTypeForm = document.querySelector('form#activity-type-form');
  // const activityTypeFormView = new ActivityTypeFormView(activityTypeForm);
  // activityTypeFormView.bindEvents();
  //
  // const activityContainer = document.querySelector('#activity-container');
  // const activityView = new ActivityView(activityContainer);
  // activityView.bindEvents();
  //
  // const errorView = new ErrorView(activityContainer);
  // errorView.bindEvents();
});
