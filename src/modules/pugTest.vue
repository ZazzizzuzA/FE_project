<template lang="pug">
	div.container#firstPUG
		h1 {{hi}}
		input#fileInput(type="file")
		p {{ file.message }}
		input(type="type")
		img
		canvas


</template>

<script>
	export default {
		data() {
			return {
				hi: "Hi there. How are you?",
				file: { message : "" }
			}
		},
		mounted() {
			
				let	input = document.getElementById("fileInput");
				let	output = this.file;

					input.onchange = function() {
						let list = this.files;
						let	doc = list[0];
						let	reader = new FileReader();

						reader.onloadend = function(event) {
							let text = event.target.result;
							console.log(text);
							output.message = text;
						}
						reader.readAsText(doc);
					}
			
		}
	}


</script>
