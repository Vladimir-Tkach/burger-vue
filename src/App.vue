<template>
  <div id="app">
    <h1>
      {{ text }}
    </h1>
    <div class="mainblock">
      <Menu/>
      <ContentBlock/>
    </div>
  </div>
</template>

<script>
import ContentBlock from './components/Content.vue'
import Menu from './components/Menu.vue'

export default {
  name: 'app',

  data: function () {
    return {
      text: 'test Text'
    }
  },

  computed: {
    json () {
      return this.$store.state.json
    }
  },

  methods: {

  },

  created: function () {
    // console.log(this.json.menu)
  },

  components: {
    ContentBlock,
    Menu
  }

}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0;
  h1{
    margin: 30px 0;
    text-transform: uppercase;
  }

  .mainblock{
    display: flex;
  }
}
</style>
