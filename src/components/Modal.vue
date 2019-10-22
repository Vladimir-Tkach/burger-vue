<template>
  <div id="modal" @click.self="closemodal">
    <div class="block" >
        <h2>выберите компоненты</h2>
        <div class="menuTitle">
            <span v-for="(item, key) in menuTitles" :key="key" :data-type='key' @click="log(key)"> {{ item }} </span>
        </div>

        <div v-for="(item, index) in getItems(name)" :key="index">
            {{ item }}
        </div>
    </div>

  </div>
</template>

<script>
export default {
    name: 'Modal',

    data: function(){
        return{
            menuTitles: {
                sizes:'Размер', 
                breads: 'Хлеб', 
                vegetables: 'Овощи', 
                sauces: 'Соусы', 
                fillings: 'Начинка', 
                all: 'Готово!'
            },

            name: 'sizes'
        }
    },

    computed: {
        options () {
            return this.$store.getters.options
        },
        
    },

    methods: {
        log: function(namer){
            // console.log(namer)
            this.name = namer
            console.log(this.options[namer])
        },

        closemodal: function(){
            this.$store.commit('showModal')
        },

        getItems: function(name){
            return this.options[name]
        }
    },

}
</script>

<style lang='scss'>
#modal{
    background: rgba(255, 255, 255, 0.527);
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    .block{
        margin: 50px auto;
        background: rgba(0, 0, 255, 0.575);
        color: white;
        width: 800px;
        height: 500px;
        padding: 20px 0 0 0;
        position: relative;
        z-index: 100;
        h2{
            margin: 0px;        
        }

        .menuTitle{
            margin: 30px 0 0 0;
            display: flex;
            justify-content: space-around;
        }
    }
}
</style>