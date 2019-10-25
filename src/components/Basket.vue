<template>
  <div class="basket">
      <h3>Корзина</h3>
        <div class='basket_list'>
          <div class='basket_list_header'>
            <span>Название</span>
            <span>Количество</span>
          </div>
          <div class='basket_list_body'>
            <div v-for="(obj, name) in added" :key="name" class="basket_item">
                <h5>{{ obj.name }}</h5>
                <h5>{{ obj.amount }}</h5>
            </div>
          </div>
          <h3>Total: {{ total }} </h3>
        </div>
  </div>
</template>

<script>
export default {
  name: 'Basket',

  computed: {
    added () {
      return this.$store.state.added
    },

    total () {
      return this.$store.state.total
    }
  }

}
</script>

<style lang='scss'>
.basket{
    border: 1px solid grey;

    .basket_list_header{
        display: flex;
        justify-content: space-around;
    }

    .basket_item{
        display: flex;
        justify-content: space-around;
    }
}

</style>
