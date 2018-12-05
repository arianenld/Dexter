<template lang="pug">
  section.poke-list
    b-input.searchPoke(@keyup.native="searchPokemon" v-model='q', placeholder="Search..." type="search" icon="magnify")
    poke-cell(v-for="pokeClass in pokeClasses" :key="pokeClass.id" :pokeKey="pokeClass.id" :pokeName="pokeClass.name" :pokeClass="pokeClass" :sprites="sprites" pokeType="pokeClass.type" :pokeType2="pokeClass.type2")
</template>

<script>
import PokeCell from './PokeCell.vue'
import { pokeClasses } from './pokeClasses';
import sprites from '../assets/sprites.png';

export default {
  name: 'PokeList',
  components: {
    PokeCell
  },
  data () {
    return {
      q: '',
      pokeClasses: pokeClasses,
      sprites: sprites
    }
  },
  methods: {
    searchPokemon: function(e) {
      e.preventDefault()
      if (this.q) {
        let context = this
        this.pokeClasses = pokeClasses.filter(function(el) {
          return el.type.toLowerCase().indexOf(context.q.toLowerCase()) >= 0 || el.name.toLowerCase().indexOf(context.q.toLowerCase()) >= 0
          // return el.name === context.q
        })
      } else {
        this.pokeClasses = pokeClasses
      }
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
