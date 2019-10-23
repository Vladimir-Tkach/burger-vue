<template>
  <div class="component">
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
	}
}
</script>

<style lang='scss'>
.component{
	border: 2px solid rgb(255, 115, 0);
	width: 200px;
	height: 250px;
	margin: 10px 0;

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