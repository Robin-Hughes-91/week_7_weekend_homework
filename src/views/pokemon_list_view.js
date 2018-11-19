// const PokemonView = require('./pokemon_view.js');
// const PubSub = require('../helpers/pub_sub.js');
//
//
// const PokemonListView = function(container){
//   this.contaainer = container;
//   // this.data = [];
// }
//
//
// // PokemonListView.prototype.bindEvents = function () {
// //   PubSub.subscribe('Continents:continents-data-ready', (evt) => {
// //     this.continents = evt.detail;
// //     this.render();
// //   });
// // };
//
// PokemonListView.prototype.bindEvents = function () {
//   PubSub.subscribe('Pokemon:Selected-Pokemon-data-ready', (evt) => {
//     console.log(this);
//     console.log(this.container);
//     this.container.render(evt.detail);
//
//     console.log('Pokemon View data received', evt.detail);
//   });
//
// }
//
//
// PokemonView.prototype.render = function (pokemon) {
//   this.PokemonContainer.innerHTML = " "
//   console.log(pokemon);
//   const p = document.createElement('h1');
//   p.textContent = pokemon.name;
//   console.log(pokemon.name);
//
//   this.container.appendChild(p);
//   console.log(this.container);
//
// }
//
// // PokemonListView.prototype.render = function () {
// //   console.log(this);
// //   this.container.forEach((pokemon) => {
// //     const pokemonView = new PokemonView(this.container, pokemon);
// //     pokemonView.render();
// //     console.log(this.container);
// //   });
// // };
//
//
// module.exports = PokemonListView
