import Vue from 'vue'
import store from './store/store'

import axios from 'axios'
import App from './App.vue'

Vue.config.productionTip = false

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
