export default {
  showPokemonMutation (state, pokeData) {
    state.pokemon = pokeData
  },
  showLoaderMutation (state, toggle) {
    state.showLoader = toggle
  }
}