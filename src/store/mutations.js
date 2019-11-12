import Vue from 'vue'

const mutations = {

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
      console.log(state.orderList[indexComponent])

      if (typeComponent === 'size' || typeComponent === 'bread') {
        Vue.set(state.productToBeAdded[name].components, typeComponent, newComponent.name)
        state.orderList[indexComponent].currentAmount++
      } else {
        // console.log(state.productToBeAdded[name].components)

        let index = state.productToBeAdded[name].components[typeComponent].indexOf(newComponent.name)
        if (index === -1) {
          state.productToBeAdded[name].components[typeComponent].push(newComponent.name)
          state.orderList[indexComponent].currentAmount++
        } else {
          state.productToBeAdded[name].components[typeComponent].splice(index, 1)
          state.orderList[indexComponent].currentAmount++
        }
        console.log('-----------------------')
      }
    }
}

export default mutations