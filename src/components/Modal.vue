<template>
  <div id="modal" @click.self="closemodal" @scroll.prevent="">
    <div class="block" >
        <h2>выберите компоненты</h2>
        <div class="menuTitle">
            <span v-for="(item, key, index) in menuTitles" :key="key" :data-ind='index' @click="switchTab(key, index)"> {{ item }} </span>
        </div>

		<div class="btnPrevNext">
			<button @click="switchTab('prev')">Prev</button>
			<button @click="switchTab('next')">Next</button>
		</div>

        <div class="componentsBlock">
			<ComponentProduct v-for="(item, index) in getItems(name)" :key="index" :item='item' :componentType='name'/>
			
			<div v-show="showResult">
				<h3> {{ menuTitles.all }} </h3>
			</div>
        </div>
    </div>

  </div>
</template>

<script>
import ComponentProduct from './ComponentProduct.vue'

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
			
			orderList: ['sizes', 'breads', 'vegetables', 'sauces', 'fillings', 'all'],

			name: 'sizes',
			showResult: false,
			currentTab: 0
        }
    },

    computed: {
        options () {
            return this.$store.getters.options
        },
        
    },

    methods: {
        switchTab: function(name, index){
			if (name === 'next') {
				if (this.currentTab == this.orderList.length - 1) return
				else {
					this.currentTab++
					this.name = this.orderList[this.currentTab]
				}
			} else if (name === 'prev') {
				if (this.currentTab == 0) return
				else {
					this.currentTab--
					this.name = this.orderList[this.currentTab]
				}
			} else {
				this.name = name
				this.currentTab = index
			}
        },

        closemodal: function(){
            this.$store.commit('showModal')
        },

        getItems: function(name){
			if (name != 'all') {
				this.showResult = false
				return this.options[name]
			} 
			else {
				this.showResult = true
				return []
			}
		},
		
	},
	
	components: {
		ComponentProduct
	},

}
</script>

<style lang='scss'>
#modal{
    background: rgba(255, 255, 255, 0.527);
    position: absolute;
	height: 100%;
	width: 100%;
    top: 0;
    // bottom: 0;
    left: 0;
    // right: 0;
    .block{
        margin: 50px auto;
        background: rgb(230, 229, 229);
        color: white;
        width: 800px;
        // height: 500px;
        padding: 20px 0 50px 0;
        position: relative;
        z-index: 100;
        h2{
            margin: 0px;        
        }

        .menuTitle{
            margin: 30px 0 0 0;
            display: flex;
            justify-content: center;

			span{
				cursor: pointer;
				margin: 0 5px 0;
				padding: 10px 20px;
				background: grey;
			}
        }

		.btnPrevNext{
			display: flex;
			justify-content: space-around;
			padding: 20px 0 0 0;
		}

		.componentsBlock{
			padding: 20px 0 0;
			display: flex;
			flex-wrap: wrap;
			justify-content: space-around;
		}
    }
}
</style>