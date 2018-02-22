<template>

	<div class="block__main_clicker" id="clicker">
        <input type="text" id="clickerInput" v-model="counter">
     	<button id="clickerButton" @click="onClick">{{command}}</button>
    </div>

</template>


<script>
	export default {
	    data() {
	    	return {
	        command: "Start",
	        counter: 0
	    }
	},
	    methods: {
	        onClick: function() {
	            this.command = "!!!PUSH!!!",
	            this.counter += 1
	            if (this.counter == 1) {
	                setTimeout(() => {
	                    alert("Stop! You've got: " + this.counter)
	                    this.counter = 0
	                    this.command = "Start"
	                }, 10000)
	            }
	        }
	    }
	}

</script>

<style lang="scss">


</style>