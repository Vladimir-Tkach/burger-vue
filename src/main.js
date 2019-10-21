import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import App from './App.vue'

Vue.config.productionTip = false

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    debug: true,
    count: 10,
    json: {},
    category: 'pizza'
  },

  mutations: {

    getJSON (state, data) {
      state.json = data
    },

    changeCategory (state, category) {
      state.category = category
    }
  }

})

new Vue({
  store,

  created: function () {
    axios.get('/json/data.json')
      .then(response => {
        store.commit('getJSON', response.data)
      })
      .catch(error => { console.log(error) })
  },

  render: h => h(App)
}).$mount('#app')
