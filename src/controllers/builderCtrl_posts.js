import model from "../models/info_posts.js";
import view from "../views/engine_posts.js";

let controller = {
    model, //model: "model"
    view,
    work: function() {
        let result = [],
            data = this.model.data;
        result = data.map(trispile);

        this.markUp = result;
        return result;

    },
    render: function() {
        this.work();
        this.view.render(this.markUp);
    },
    markUp: []

};

function trispile(el) {
    let html;
   if (el && el.body && el.tag){
     html = document.createElement(el.tag);

     if (typeof el.body === "object") {

        if (el.body.length) {
            html.innerHTML = el.body.map(trispile);
        } else {
            html.innerHTML = trispile(el.body);
        }
     } else {
        html.innerHTML = el.body;
     }

     if (el.src) {
                html.setAttribute("src", el.src);
            }
    if (el.href) {
                html.setAttribute("href", el.href);
            }
    if (el.class) {
                html.classList.add(el.class);
            }
    if (el.class2) {
                html.classList.add(el.class2);
            }
   }

   return html ? html : el;
}

export default controller;