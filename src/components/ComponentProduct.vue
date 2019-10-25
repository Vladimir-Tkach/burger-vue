<template>
  <div class="component" @click="addNewComponentToProduct" :class="{ active: isActive}">
	  <img :src="item.image" alt="">
	  <h3> {{ item.name }} </h3>
	  <span> {{ item.price }} руб. </span>

  </div>
</template>

<script>
export default {
  name: 'ComponentProduct',

  data: function () {
    return {
	    isActive: false
    }
  },

  props: {
    item: Object,
    componentType: String,
    index: Number
  },

  computed: {
    productToBeAdded () {
      return this.$store.state.productToBeAdded
    }
  },

  methods: {

    addNewComponentToProduct: function () {
      this.isActive = !this.isActive

      return this.$store.commit('addNewComponentToProduct', {
        type: this.componentType,
        name: this.item.name,
        price: this.item.price,
        index: this.index
      })
    }
  }
}
</script>

<style lang='scss'>
.component{
	border: 2px solid rgb(255, 115, 0);
	width: 200px;
	height: 250px;
	margin: 10px 0;
	transition: .5s;

	&:hover{
		background: orange;
	}

	img{
		width: 120px;
		height: 120px;
		border-radius: 50%;
		border: 5px solid yellow;
	}

	h3{
		color: black;
	}

	span{
		color:brown;
	}
}

.active{
  background: orange;
}
</style>
