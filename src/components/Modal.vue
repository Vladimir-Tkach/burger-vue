<template>
  <div id="modal" @click.self="closemodal" @scroll.prevent="">
    <div class="block" >
      <h2>выберите компоненты</h2>
      <div class="menuTitle">
        <span
        v-for="(item, index) in modalTabsList"
        :key="index"
        @click="switchTab(item.type, index)">
          {{ item.type }} {{ item.currentAmount }}
        </span>
      </div>

      <div class="btnPrevNext">
        <button @click="switchTab('prev')">Prev</button>
        <button @click="switchTab('next')">Next</button>
      </div>

      <div class="componentsBlock">
        <ComponentProduct
          v-for="(item, index) in getItems(name)"
          :key="index" 
          :item='item'
          :componentType='name'
          :index='currentTab'
        />

        <div v-show="showResult">
          <h3> Результат! </h3>
          <div class="row">
            <h4>Название: </h4>
            <h4> {{ nameProductToAdded }} </h4>
          </div>
          <div class="row">
            <h4>Размер: </h4>
            <h4>
              <!-- {{ productToBeAdded[nameProductToAdded] }} -->
            </h4>
          </div>
          <div class="row">
            <h4>Хлеб: </h4>
            <h4>
               <!-- {{ productToBeAdded[nameProductToAdded] }} -->
             </h4>
          </div>
          <div class="row">
            <h4>Овощи: </h4>
            <h4>
              <!-- {{ productToBeAdded[nameProductToAdded] }} -->
            </h4>
          </div>
          <div class="row">
            <h4>Соусы: </h4>
            <h4>
              <!-- {{ productToBeAdded[nameProductToAdded] }} -->
            </h4>
          </div>
          <div class="row">
            <h4>Начинка: </h4>
            <h4>
              <!-- {{ productToBeAdded[nameProductToAdded] }} -->
            </h4>
          </div>
        </div>
      </div>

      <h3>Цена: </h3>
    </div>

  </div>
</template>

<script>
import ComponentProduct from './ComponentProduct.vue'

export default {
  name: 'Modal',

  data: function () {
    return {
      name: this.$store.state.modalStartPage,
      showResult: false,
	    currentTab: 0,
    }
  },

  computed: {
    options () {
      return this.$store.getters.options
    },

    modalTabsList () {
      return this.$store.state.modalTabsList
    },

    productToBeAdded () {
      return this.$store.state.productToBeAdded
    },

    nameProductToAdded () {
      return this.$store.state.nameProductToAdded
    }

  },

  methods: {
    switchTab: function (name, index) {
      if (name === 'next') {
        if (this.currentTab == this.modalTabsList.length - 1) return
        else {
          this.currentTab++
          this.name = this.modalTabsList[this.currentTab].type
        }
      } else if (name === 'prev') {
        if (this.currentTab == 0) return
        else {
          this.currentTab--
          this.name = this.modalTabsList[this.currentTab].type
        }
      } else {
        this.name = name
        this.currentTab = index
      }
    },

    closemodal: function () {
      this.$store.commit('showModal')
    },

    getItems: function (name) {
      // console.log(this.productToBeAdded[this.nameProductToAdded].components);
      if (name !== 'Result') {
        this.showResult = false
        return this.options[name]
      } else {
        this.showResult = true
        return []
      }
    },

  },

  components: {
    ComponentProduct
  }

}
</script>

<style lang='scss'>
#modal{
    background: rgba(255, 255, 255, 0.795);
    position: absolute;
	// height: 100%;
	// width: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    min-height: 900px;
    .block{
        margin: 50px auto;
        background: rgb(230, 229, 229);
        color: rgb(0, 0, 0);
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

			.row{
				display: flex;
				justify-content: space-around;
			}
		}
    }
}
</style>
