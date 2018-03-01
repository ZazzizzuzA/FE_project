<template lang="pug">
	div.container#firstPUG
		h1 {{hi}}
		input#fileInput(type="file")
		p {{ file.message }}
		input#fileInput2(type="file")
		img#picture(v-bind:src="image.src")
		input#fileInputCanvas(type="file" )
		canvas#can
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

		mounted() {
			
				let	input = document.getElementById("fileInput"),
					inputImg = document.getElementById("fileInput2"),
					inputCanvas = document.getElementById("fileInputCanvas"),
					canvas = document.getElementById("can"),
					ctx = canvas.getContext('2d'),
					canImg = new Image(),
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

						reader.onloadend = function(event) {
							let text = event.target.result;
							outputImg.srcCanvas = text;	
							canImg.setAttribute("src", text);
							setTimeout( () => {ctx.drawImage(canImg, 0, 0, 300, 150)}, 100);
																	
						}						
						reader.readAsDataURL(doc);
						
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

