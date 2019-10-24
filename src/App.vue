<template>
  <div id="app">
    <h1>
      {{ text }}
    </h1>
    <div class="mainblock">
        <div class="menu_basket">
            <div class="sticky">
                <Menu/>
                <Basket/>
            </div>
        </div>

        <ContentBlock/>

    </div>

    <transition name='modal' appear>
        <Modal v-show="visibleModal" :startpage='startpage'/>
    </transition>
  </div>
</template>

<script>
import ContentBlock from './components/Content.vue'
import Menu from './components/Menu.vue'
import Basket from './components/Basket.vue'
import Modal from './components/Modal.vue'

export default {
  name: 'app',

  data: function () {
    return {
      text: 'menu header!'
    }
  },

  computed: {
    json () {
        return this.$store.state.json
    },

    added () {
        return this.$store.state.added
    },

    total () {
        return this.$store.state.total
    },

    visibleModal () {
        return this.$store.state.visibleModal
    },

    startpage () {
        return this.$store.state.modalStartPage
    }
  },

  methods: {

  },

  components: {
    ContentBlock,
    Menu,
    Basket,
    Modal
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
  display: block;
  h1{
    margin: 30px 0;
    text-transform: uppercase;
  }

  .mainblock{
    display: flex;
  }

  .menu_basket{
    width: 20%;
  }
  .sticky{
    position: sticky;
    top: 0;
  }

    .modal-enter-active, .modal-leave-active {
        transition: opacity .5s;
    }
    .modal-enter, .modal-leave-to {
        opacity: 0;
    }
}
</style>
