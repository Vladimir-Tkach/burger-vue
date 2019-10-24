<template>
  <div class="component" @click="addNewComponentToProduct">
	  <img :src="item.image" alt="">
	  <h3> {{ item.name }} </h3>
	  <span> {{ item.price }} руб. </span>

  </div>
</template>

<script>
export default {
	name: 'ComponentProduct',

	props: {
		item: Object,
		componentType: String
	},

	computed: {
		productToBeAdded () {
			return this.$store.state.productToBeAdded
		}
	},

	methods: {
		addNewComponentToProduct: function () {
			// console.log(this.componentType)
			// console.log(this.item.name)
			return this.$store.commit('addNewComponentToProduct', {
				type: this.componentType,
				name: this.item.name,
				price: this.item.price
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
</style>