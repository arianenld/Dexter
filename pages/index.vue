<template lang="pug">
  .container
    background(src="bgPoke.png")
    .main-container
      detail-view
      poke-list

</template>

<script>
import PokeList from '../components/PokeList.vue'
import DetailView from '../components/DetailView.vue'

export default {
  name: 'Main',
  components: {
    PokeList,
    DetailView
  },
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
