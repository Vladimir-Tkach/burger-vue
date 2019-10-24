import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    debug: true,
    count: 0,
    json: {},
    category: 'pizza',
    added: {},
    total: 0,
    visibleModal: false,
    options: {},
    orderList: ['sizes', 'breads', 'vegetables', 'sauces', 'fillings', 'Result'],
    modalStartPage: 'sizes',

    productToBeAdded: {},
    nameProductToAdded: ''
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
      if (state.added.hasOwnProperty(data.newProd.name)) {
        let newAmount = data.amount + state.added[data.newProd.name].amount
        state.added[data.newProd.name].amount = newAmount
      } else {
        Vue.set(state.added, data.newProd.name, data.newProd)
        Vue.set(state.added[data.newProd.name], 'amount', data.amount)
      }
      state.total += data.newProd.price * data.amount
    },



    showModal (state, item) {
      state.visibleModal = !state.visibleModal

      if(item != undefined){
        Vue.set(state.productToBeAdded, item.name, item)
        state.nameProductToAdded = item.name
        // console.log(item.name)
      } else{
        state.productToBeAdded = {}
      }
    },



    addNewComponentToProduct (state, newComponent) {
      let typeComponent = newComponent.type.slice(0, -1)
      let name = state.nameProductToAdded
      if (typeComponent == 'size' || typeComponent == 'bread'){
        Vue.set(state.productToBeAdded[name].components, typeComponent, newComponent.name)
      } else {
        // console.log(state.productToBeAdded[name].components)
        let index = state.productToBeAdded[name].components[typeComponent].indexOf(newComponent.name)
        if ( index == -1) {
          state.productToBeAdded[name].components[typeComponent].push(newComponent.name)
        } else {
          state.productToBeAdded[name].components[typeComponent].splice(index, 1)
        }
        console.log(state.productToBeAdded[name].price)
        console.log('-----------------------')
      }
    }

  }

})

export default store
