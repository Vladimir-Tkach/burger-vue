<template>
  <div id="content_block">
        <card-product
            :item="item"
            v-for="(item, index) in selectedCategory"
            :key="index"
            :logo="urlsLogo[index]"
        />
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

    markets () {
      return this.$store.state.json.markets || []
    },

    category () {
      return this.$store.state.category
    },

    selectedCategory () {
      return this.menu.filter(item => item.category == this.category)
    },

    urlsLogo () {
      let logo = this.selectedCategory.map(item => {
        let market = item.market
        return market == 'subway' ? this.markets.subway : market == 'sfc' ? this.markets.sfc : market == 'doner' ? this.markets.doner : false
      })
      return logo
    }
  },

  created: function () {
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
