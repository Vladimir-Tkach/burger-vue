<template>
    <nav id="menu">
        <ul>
            <li :class="{active: active === 'pizza'}" @click="selectCategory('pizza')">Блины</li>
            <li :class="{active: active === 'shaurma'}" @click="selectCategory('shaurma')">Шаурма</li>
            <li :class="{active: active === 'sandwiches'}" @click="selectCategory('sandwiches')">Сендвичи</li>
            <li :class="{active: active === 'burgers'}" @click="selectCategory('burgers')">Бургеры</li>
            <li :class="{active: active === 'chicken'}" @click="selectCategory('chicken')">Курица & Картофель</li>
            <li :class="{active: active === 'salads'}" @click="selectCategory('salads')">Тортилья & салаты</li>
            <li :class="{active: active === 'drinks'}" @click="selectCategory('drinks')">Напитки & Десерты</li>
        </ul>
    </nav>
</template>

<script>
export default {
  name: 'Menu',

  data: function () {
    return {
        active: undefined
    }
  },

  methods: {
    selectCategory: function (name) {
    this.active = name
    this.$store.commit('changeCategory', name)
    }
  }

}
</script>

<style lang="scss">
#menu{
    
    border: 1px solid blue;
    width: 100%;
    max-height: 350px;
    ul{
       list-style: none;
       padding: 0;
       li{
           text-align: center;
           font-size: 20px;
           background: orange;
           display: block;
           width: 80%;
           padding: 5px 0;
           margin: 10px auto;
           border-radius: 7px;
           cursor: pointer;
           transition: .5s;
           &:hover{
               background: orangered;
           }
       }
    }

    .active{
        background: red;
        color: aliceblue;
    }
}
</style>
