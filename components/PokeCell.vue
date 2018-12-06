<template lang="pug">
  section
    button.poke-cell(@click="handleOnClick(pokeKey)" v-bind:style='getPokeCellStyle')
    .pokeName {{pokeName.charAt(0).toUpperCase() + pokeName.slice(1)}}

</template>

<script>
import axios from 'axios'

export default {
  name: 'PokeCell',
  props: ['pokeKey', 'pokeName', 'pokeClass', 'sprites', "pokeType"],
  data () {
    return {
      id: '',
      name: '',
      sprite: '',
      type: ''
    }
  },
  computed: {
    getPokeCellStyle: function () {
      return {
          'background-image': `url(${this.sprites})`,
          'background-position': this.pokeClass.backgroundPosition
        }
    },
  },
  methods: {
    /*handleOnClick(pokeKey) {
      this.$store.dispatch('showLoader', true)
      handleOnClick(pokeKey){
        this.$store.dispatch('showPokemon', pokeKey)
      }
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/${pokeKey}/`)
        .then(response => {
          if (response.status === 200) {
            this.$store.dispatch('showLoader', false)
            let data = response.data
            let pokeData = {
              id: data.id,
              name: data.name,
              sprite: data.sprites.front_default,
              type2: data.types[1] == undefined ? "none" : data.types[1].type.name,
              type: data.types[0] == undefined ? "none" : data.types[0].type.name
            }
            this.$store.dispatch('showPokemon', pokeData)
          }
        }).catch(err => {
          this.$store.dispatch('showLoader', false)
        })
    }*/
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
