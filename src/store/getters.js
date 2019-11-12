import Vue from 'vue'
const getters = {
    
    options: state => {
        Vue.set(state.options, 'fillings', state.json.fillings)
        Vue.set(state.options, 'sizes', state.json.sizes)
        Vue.set(state.options, 'breads', state.json.breads)
        Vue.set(state.options, 'vegetables', state.json.vegetables)
        Vue.set(state.options, 'sauces', state.json.sauces)
    
        return state.options
    }
}


export default getters