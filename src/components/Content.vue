<template>
  <div id="content_block">
        <card-product 
            :item="item" 
            v-for="(item, index) in selectedCategory"
            :key="index"/>
  </div>
</template>

<script>
import CardProduct from './CardProduct.vue'

export default {
  name: 'ContentBlock',

  components: {
    CardProduct
  },

  computed: {
    menu () {
        return this.$store.state.json.menu || []
    },

    category () {
        return this.$store.state.category
    },

    selectedCategory () {
        let newmenu = this.menu.filter(item => item.category == this.category)
        return newmenu
    },

    urlLogo () {
        let logo = this.selectedCategory.map()
    }
  },

  created: function(){
    console.log(this.selectedCategory)
  }
  
}
</script>

<style lang="scss">
#content_block{
    border: 1px solid red;
    width: 78%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
</style>
