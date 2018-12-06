import axios from 'axios'
export default {
  showPokemon ({ commit }, pokeKey) {
    this.dispatch('showLoader', true)
    axios.get(https://pokeapi.co/api/v2/pokemon/${pokeKey}/)
         .then(response => {
           if(response.status === 200){
             this.dispatch('showLoader', false)
             let data = response.data
             let pokeData = {
                id: data.id,
                name: data.name,
                sprite: data.sprites.front_default,
                type2: data.types[1] == undefined ? "none" : data.types[1].type.name,
                type: data.types[0] == undefined ? "none" : data.types[0].type.name
             }
             commit('showPokemonMutation', pokeData)
           }
         }).catch(err => {
            this.dispatch('showLoader', false)
         })
  },
  
  showLoader ({ commit }, toggle) {
    commit('showLoaderMutation', toggle)
  }
}
