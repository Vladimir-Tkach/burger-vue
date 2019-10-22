import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import App from './App.vue'

Vue.config.productionTip = false

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    debug: true,
    count: 0,
    json: {},
    category: 'pizza',
    added: {},
    total: 0,
    visibleModal: true,
    options: {}
  },

  getters: {
    options: state => {
      Vue.set(state.options, 'fillings', state.json.fillings)
      Vue.set(state.options, 'sizes', state.json.sizes)
      Vue.set(state.options, 'breads', state.json.breads)
      Vue.set(state.options, 'vegetables', state.json.vegetables)
      Vue.set(state.options, 'sauces', state.json.sauces)

      return state.options
    }
  },

  mutations: {

    getJSON (state, data) {
      state.json = data
    },

    changeCategory (state, category) {
      state.category = category
    },

    addToBasket (state, data) {
      if(state.added.hasOwnProperty(data.newProd.name)){
        let newAmount = data.amount + state.added[data.newProd.name].amount
        state.added[data.newProd.name].amount = newAmount
      } else {
        Vue.set(state.added, data.newProd.name, data.newProd)
        Vue.set(state.added[data.newProd.name], 'amount', data.amount)
      }
      state.total += data.newProd.price * data.amount
    },

    showModal (state) {
      state.visibleModal = !state.visibleModal
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
