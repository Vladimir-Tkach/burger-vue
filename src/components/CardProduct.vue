<template>
  <div class="cardProduct">
        <img src="" alt="">
        <img :src='item.image' alt="image" class="imageProduct">
        <div class='item_menu_name'>{{ item.name }}</div>
        <div class='item_menu_description'>{{ item.description }}</div>

        <div>Цена: {{ item.price }} руб.</div>
        <span>Количество</span>

        <div class='item_menu_selectAmount'>

          <button @click="add">+</button>

          <input type="number" name="amount" id="input"  v-model="amount"/>

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
            amount: 1
        }
    },

    props: {
        item: Object
    },

    methods: {
        add: function(){
            this.amount++
        },

        sub: function(){
            if (this.amount == 0) return
            this.amount--
        },

        addToBasket: function(){
            let newProd = this.item
            newProd.amount = this.amount
            this.$store.commit('addToBasket', newProd)
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