// export default {
//     render: function(data) {
//         var body = document.getElementsByClassName("block__main_content")[0];

//         data.map(el => {
//         	let box = document.createElement("div");
//         	let title = document.createElement("h3");
//         	let text = document.createElement("p");
//         	title.innerHTML = el.title;
//         	text.innerHTML = el.body;
//         	box.appendChild(title);
//         	box.appendChild(text);
//         	box.classList.add("block__small");
//         	return box;
//         }).forEach(el => {
//         	body.appendChild(el);

//         });

//     }
// };