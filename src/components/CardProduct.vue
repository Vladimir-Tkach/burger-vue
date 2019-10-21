<template>
  <div class="cardProduct">
        <img src="" alt="">
        <img :src='item.image' alt="image" class="imageProduct">
        <div class='item_menu_name'>{{ item.name }}</div>
        <div class='item_menu_description'>{{ item.description }}</div>

        <div>Цена: {{ item.price }} руб.</div>
        <span>Количество</span>

        <div className='item_menu_selectAmount'>

          <button >+</button>

          <input type="text" name="amount" id="input" :value='amount' onChange={this.change}/>

          <button >-</button>
        </div>

        <button >В корзину</button>
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
}
</script>

<style lang="scss">
.cardProduct{
    width: 33%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    border: 1px solid green;
    .imageProduct{
        width: 200px;
        height: 200px;
    }
}
</style>