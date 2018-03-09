// import ctrl from "./controllers/builderCtrl.js";
import './styles/styles';
import Vue from "vue";
import router from "./router";
import Pixi from "./modules/applications";
// import toDo from "./modules/todo";
// import clicker from "./modules/clicker";
// import pugTest from "./modules/pugTest";
// import posts from "./modules/posts";
// import profile from "./modules/profile";

new Vue({
    el: "#applications",
    template: `
    <div class="block__sidebar_menu">
	    <router-link to="/">Clicker</router-link>
	    <router-link to="/todo">ToDo</router-link>
	    <router-link to="/pugTest">PugTest</router-link>
	    <router-link to="/posts">Posts</router-link>
        <router-link to="/draw">draw</router-link>
        <router-link to="/applications">Game</router-link>
	    <router-link to="/profile">Profile</router-link>
	</div>`,
    router
});
new Vue({
    el: "#applicationsView",
    template: `
        <div class="block__router" id="applicationsView">
            <router-view></router-view>
        </div>`,
    router
});

// ctrl.render();

// new Vue({
//     el: "#app",
//     data: {
//         message: "Hello, I'm Vue. Welcome to my world of pain.",
//     },
// });
// new Vue({
//     el: "#clicker",
//     data: {
//         commande: "Start",
//         counter: 0,
//     },
//     methods: {
//         onClick: function() {
//             this.commande = "!!!PUSH!!!"
//             this.counter += 1
//             if (this.counter == 1) {
//                 setTimeout(() => {
//                     alert("Stop! You've got: " + this.counter)
//                     this.counter = 0
//                     this.commande = "Start"
//                 }, 10000)
//             }
//         },
//     },
// })
// new Vue({
//     el: "#toDoList",
//     data: {
//         messageButton: "Добавить дело",
//         messageDeal: "Дела на \"бумаге\"",
//         todo: "Do something",
//         deals: [{
//                 text: "Доделать кликер с \"оттяжечкой\"",
//                 status: true,
//                 mark: "checked",
//                 show: true,

//             },
//             {
//                 text: "Попрыгать от радости",
//                 status: true,
//                 mark: "checked",
//                 show: true,

//             },
//             {
//                 text: "Сделать to-Do-List",
//                 status: false,
//                 mark: "",
//                 show: true,

//             }
//         ]
//     },
//     methods: {
//         addDeal: function() {
//             this.deals.push({
//                 text: this.todo,
//                 status: false,
//                 mark: "",
//                 show: true,

//             })
//         }
//     }
// })


// Мой первый код. Из него почти ничего нет в проэкте.


// var head = document.createElement('header');
// var article = document.createElement('article');
// var footer = document.createElement('footer');
// var container1 = document.createElement('div');
// var paragraf = document.createElement('p');
// var container3 = document.createElement('h1');
// var link = document.createElement('a');
// var img = new Image();
// var button = document.createElement('button');
// var button2 = document.createElement('button');
// var aboutMe = document.createElement("h3");
// var list = document.createElement('ol');
// var listPoint1 = document.createElement('li');
// var listPoint2 = document.createElement('li');
// var listPoint3 = document.createElement('li');
// var gif = document.createElement('img');

// head.id = "head";
// head.classList.add('block');
// head.style = "background-color: #d7f94d; justify-content: space-between;";

// button.classList.add('block__button');
// button.innerText = "Magic";
// button.id = 'magicButton';
// button2.classList.add('block__button');
// button2.innerText = "Magic 2";
// button2.id = 'magicButton2';

// article.id = "main";
// article.classList.add('block')
// footer.id = "foot";
// footer.classList.add('block');
// footer.innerHTML = "Мои контакты: <br/><br/> ссылка на фото; <br/> телефон: 050-821-41-40."

// container1.classList.add('block__item');
// container1.id = "mainCont";
// paragraf.classList.add('block__item_p');
// paragraf.id = "text";
// aboutMe.innerText = "А теперь что-то похожее на анкету";
// paragraf.innerHTML = "<h3>Коротко обо мне</h3>Меня зовут Михаил Пилипенко. Мне 28 лет. Закончил обучение в школе. Потом в КНЕУ им. В. Гетьмана по специальности экономики предприятия, чем ни капли не горжусь. С 2012 года и по сей день работаю в государственном предприятии \"Энергоатом\".<br/> <br/>Идеалист, романтик - ужасное сочетание, так как их сочетание вызывает много противоречий, что часто похоже на забуксовавший автомобиль. Понятие \"романтик\" в моем понимании может отличаться от общепринятого. Об этом можно поговорить при личных встречах. Я вообще люблю говорить о себе. Ценю в людях чувство юмора. При верстке люблю обращать особое внимание незначительным мелочам, но которые создают первое впечатление о сайте. Хочу научиться оптимизировать свой код и находить более быстрые и практичные решения. Заинтересовал JavaScript и хочу совершенствовать навыки использования. <br/><br/> Стремлюсь сменить место работы, быть полезным и находить нестандартные, но эффективные решения каких-либо задач. Всегда рад новым знакомствам, дельным советам, общению.";

// container3.id = "title";
// container3.innerText = "Анкета";
// container3.setAttribute('align', 'center');

// img.src = "assets/img/1.jpg";
// img.classList.add('effect');
// gif.src = "assets/img/magic.gif";
// gif.id = "magicGif";
// gif.classList.add('hide');

// link.id = "photo";
// link.href = "https://www.facebook.com/musicvyp";
// link.setAttribute('target', '_blank');

// list.innerHTML = "Основное:<br/><br/>";
// list.id = "list";
// listPoint1.innerHTML = "ФИО, возраст - Меня зовут Пилипенко Михаил Валерьевич. Мне 28 лет.<br/><br/>";
// listPoint2.innerHTML = "Почему я здесь и как давно изучаю HTML, CSS, JS - Впервые попробовал осенью 2016 года, но без особого энтузиазма. Решал по паре задаче в день на сайте htmlacademy.ru. К концу года понял, что нравится. Весной решил, что пойду на курсы и осенью 2017 начал обучение в ITEA. Причин, по которым я здесь, много. Основная - движение жизнь и каждому движению свое время; я хочу добиться большего, чем есть сейчас и хочу стремиться к лучшему и лучшим.<br/><br/>";
// listPoint3.innerHTML = "P.S.Чтоб было не очень скучно читать используй <span>МАГИЮ</span>.";

// img.onload = function() {
//     this.classList.remove('effect');
// }

// document.body.appendChild(head);
// document.body.appendChild(article);
// head.appendChild(button);
// head.appendChild(container3);
// head.appendChild(button2);
// main.appendChild(container1);
// mainCont.appendChild(link);
// mainCont.appendChild(paragraf);
// text.appendChild(aboutMe);
// text.appendChild(list);
// list.appendChild(listPoint1);
// list.appendChild(listPoint2);
// list.appendChild(listPoint3);
// photo.appendChild(img);
// document.body.appendChild(footer);
// mainCont.appendChild(gif);

// main.style = "margin-top:" + window.head.offsetHeight + "px; margin-bottom:" + window.foot.offsetHeight + "px;";

// button.onclick = function() {
//     photo.classList.toggle('effect2');
//     if (link.classList.contains("effect2")) {
//         magicGif.classList.remove('hide');
//         magicGif.classList.add('effect4');
//         photo.classList.toggle('hide');


//     } else {
//         magicGif.classList.add('hide');
//         photo.classList.remove('hide');


//     }
// }
// button2.onclick = function() {
//     paragraf.classList.toggle('effect3');
// }