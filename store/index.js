import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import 'assets/scss/main.scss'

Vue.use(Vuex)
Vue.use(Buefy)

const x = () => {
  return new Vuex.Store({
      state: {
        pokemon: {
          sprite: 'https://fontmeme.com/images/Pokemon-Logo.jpg'
        },
        showLoader: false
      },
      actions,
      mutations

    })

}
export default x
