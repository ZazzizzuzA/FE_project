import model from "../models/info.js";
import view from "../views/engine.js";


let controller = {
	model, 				//model: "model"
	view,				
	work: function() {
		let result = [],
		data = this.model.data;
		result = data.map(function(el){

			let html = document.createElement(el.tag);
			if (el.body && el.tag != "img") {
				html.innerHTML = el.body;
			}
			if (el.src){
				html.setAttribute("src", el.src);
			}
			if (el.href){
				html.setAttribute("href", el.href);
			}
			return html;

		});

		this.markUp = result;
		return result;

	},
	render: function(){
		this.work();
		this.view.render(this.markUp);
	},
	markUp: [],

};

export default controller; 