<template>
  <div class="cardProduct">
        <img :src="logo.image" :alt="logo.name" :title="logo.name">
        <img :src='item.image' alt="image" class="imageProduct">
        <div class='item_menu_name'>{{ item.name }}</div>
        <a class='item_menu_description'
            @click="showModal"
        >
            {{ item.description }}
        </a>

        <div>Цена: {{ item.price }} руб.</div>
        <span>Количество</span>

        <div class='item_menu_selectAmount'>

          <button @click="add">+</button>

          <input type="number" name="amount" id="input"  v-model="amountProd"/>

          <button @click="sub">-</button>
        </div>

        <button @click="addToBasket">В корзину</button>
  </div>
</template>

<script>
export default {
  name: 'CardProduct',

  data: function () {
    return {
      amountProd: 1
    }
  },

  props: {
    item: Object,
    logo: [Object, Boolean]
  },

  computed: {
    category () {
        	return this.$store.state.category
    	}
  },

  methods: {
    add: function () {
      this.amountProd++
    },

    sub: function () {
      if (this.amountProd == 0) return
      this.amountProd--
    },

    addToBasket: function () {
      let newProd = this.item
      this.$store.commit('addToBasket', {
        newProd,
        amount: this.amountProd
      })
    },

    showModal: function () {
      if (this.category == 'sandwiches') {
        this.$store.commit('showModal', this.item)
      } else return
    }
  }
}
</script>

<style lang="scss">
.cardProduct{
    width: 31%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 15px 1%;

    border: 1px solid green;
    .imageProduct{
        width: 200px;
        height: 200px;
    }

    .item_menu_description{
        padding: 5px 0;
        color: orangered;
        cursor: pointer;
        transition: .5s;

        &:hover{
            text-decoration: underline;
        }
    }

    .item_menu_selectAmount{
        display: flex;
        justify-content: center;
        width: 50%;

        input{
            text-align: center;
            width: 50%;
        }
    }
}
</style>
