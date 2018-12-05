export default {
  showPokemon ({ commit }, pokeData) {
    commit('showPokemonMutation', pokeData)
  },
  showLoader ({ commit }, toggle) {
    commit('showLoaderMutation', toggle)
  }
}