import Vue from 'vue'

'use strict';

const mutations = {

    getJSON (state, data) {
      state.json = data
    },

    changeCategory (state, category) {
      state.category = category
    },

    addToBasket (state, data) {
      let nameNewProd = data.newProd.name;
      if (state.basket.hasOwnProperty(data.newProd.name)) {
        let newAmount = data.amount + state.basket[data.newProd.name].amount
        state.basket[data.newProd.name].amount = newAmount
      } else {
        Vue.set(state.basket, data.newProd.name, data.newProd)
        Vue.set(state.basket[data.newProd.name], 'amount', data.amount)
      }
      state.totalChek += data.newProd.price * data.amount
    },

    showModal (state, item) {
      state.visibleModal = !state.visibleModal

      if (item !== undefined) {
        Vue.set(state.productToBeAdded, item.name, item)
        state.nameProductToAdded = item.name
        // console.log(item.name)
      } else {
        state.productToBeAdded = {}
      }
    },

    addNewComponentToProduct (state, newComponent) {
      let typeComponent = newComponent.type.slice(0, -1)
      let name = state.nameProductToAdded
      let indexComponent = newComponent.index

      if (typeComponent === 'size' || typeComponent === 'bread') {
        Vue.set(state.productToBeAdded[name].components, typeComponent, newComponent.name)
        state.modalTabsList[indexComponent].currentAmount++
      } else {
        // console.log(state.productToBeAdded[name].components)

        let index = state.productToBeAdded[name].components[typeComponent].indexOf(newComponent.name)
        if (index === -1) {
          state.productToBeAdded[name].components[typeComponent].push(newComponent.name)
          state.modalTabsList[indexComponent].currentAmount++
        } else {
          state.productToBeAdded[name].components[typeComponent].splice(index, 1)
          state.modalTabsList[indexComponent].currentAmount++
        }
        console.log('-----------------------')
      }
    }
}

export default mutations