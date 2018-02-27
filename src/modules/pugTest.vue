<template lang="pug">
	div.container#firstPUG
		h1 {{hi}}
		input#fileInput(type="file")
		p {{ file.message }}
		input#fileInput2(type="file")
		img#picture(v-bind:src="image.src")
		input#fileInputCanvas(type="file" )
		canvas#can(@click="canva")
</template>

<script>
	export default {
		data() {
			return {
				hi: "Hi there. How are you?",
				file: { message : "" },
				image: {
					src: "",
					srcCanvas: ""
				}
			}
		},
		methods: {
			// canva() {
			// 	let canvas = document.getElementById("can"),
			// 		ctx = canvas.getContext('2d'),
			// 		picture = document.getElementById('picture');					
			// 	return ctx.drawImage(picture, 0, 0, 200, 150);
			// }
		},
		mounted() {
			
				let	input = document.getElementById("fileInput"),
					inputImg = document.getElementById("fileInput2"),
					inputCanvas = document.getElementById("fileInputCanvas"),
					canvas = document.getElementById("can"),
					ctx = canvas.getContext('2d'),
					nn = new Image(),
					output = this.file,
					outputImg = this.image;

					input.onchange = function() {
						let list = this.files,
							doc = list[0],
							reader = new FileReader();

						reader.onloadend = function(event) {
							let text = event.target.result;
							output.message = text;
						}
						reader.readAsText(doc);
					}
					inputImg.onchange = function() {
						let list = this.files,
							doc = list[0],
							reader = new FileReader();

						reader.onloadend = function(event) {
							let text = event.target.result;
							outputImg.src = text;
						}
						reader.readAsDataURL(doc);
					}
					inputCanvas.onchange = function() {
						let list = this.files,	
							doc = list[0],
							reader = new FileReader();

						reader.onload = function(event) {
							let text = event.target.result;
							outputImg.srcCanvas = text;
							nn.setAttribute("src", outputImg.srcCanvas);						
						}									
						reader.readAsDataURL(doc);
						
						ctx.drawImage(nn, 0, 0, 200, 150);
					}
		}
	}


</script>

<style lang="scss">
	#picture{
		width: 100px;
		height: 100px;
	}
	#can{
		width: 200px;
		height: 150px;
		background-color: red;
	}
</style>

