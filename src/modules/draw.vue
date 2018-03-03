<template lang="pug">
	div.block__canvas_draw
		canvas#drawCanvas


</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {

		}
	}

</script>

<style lang="scss">

@import '../styles/_var';
@import '../styles/_reset';

.block__canvas_draw{
	display: flex;
	align-items: center;
	justify-content: center;
}
#drawCanvas{
		width: 400px;
		height: 300px;
		background-color: $bg_canvas;
		border-radius: 5px;
	}
</style>