<template>
  <div id="app">
    
  </div>
</template>

<script>
//import testComponent from './components/testComponent.vue'


export default {
  name: 'app',

  data: function(){
    return{
      text: 'test'
    }
  },

  components: {

  },

  methods: {
      test: ()=>{
          return true;
      }
  },


}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
