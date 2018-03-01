import Vue from "vue";
import VueRouter from "vue-router";
import VueResource from "vue-resource";
import toDo from "./modules/todo";
import clicker from "./modules/clicker";
import pugTest from "./modules/pugTest";
import posts from "./modules/posts";
import profile from "./modules/profile";
import draw from "./modules/draw";



Vue.use(VueRouter);

export let routes = [
	{
		path: "/",
		component: clicker,
	},
	{
		path: "/todo",
		component: toDo,
	},
	{
		path: "/pugTest",
		component: pugTest,
	},
	{
		path: "/posts",
		component: posts,
	},
	{
		path: "/profile",
		component: profile,
	},
	{
		path: "/draw",
		component: draw,
	}

];

export default new VueRouter( {
	mode: "history",
	routes
} );