/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ({

/***/ 10:
/***/ (function(module, __webpack_exports__) {

"use strict";
// import model from "../models/info_posts.js";
// import view from "../views/engine_posts.js";

// let controller = {
//     model,
//     view,
//     work: function() {
//         let result = [],
//             data = this.model.data;
//         result = data.map(trispile);

//         this.markUp = result;
//         return result;

//     },
//     render: function() {
//         this.work();
//         this.view.render(this.markUp);
//     },
//     markUp: []

// };

// function trispile(el) {
//     let html;

//     if (el && el.body && el.tag) {

//         html = document.createElement(el.tag);

//         if (typeof el.body === "object") {

//             if (el.body.length) {
//                 el.body.map(trispile).forEach(element => {
//                     html.appendChild(element)
//                 });
//             } else {
//                 html.appendChild(trispile(el.body));
//             }
//         } else {
//             html.innerHTML = el.body;
//         }
//         if (el.src) {
//             html.setAttribute("src", el.src);
//         }
//         if (el.href) {
//             html.setAttribute("href", el.href);
//         }
//         if (el.class) {
//             html.classList.add(el.class);
//         }
//         if (el.id) {
//             html.setAttribute("id", el.id);
//         }
//     }

//     return html ? html : el;
// }

// export default controller;

/***/ }),

/***/ 9:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__controllers_builderCtrl_posts_js__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__controllers_builderCtrl_posts_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__controllers_builderCtrl_posts_js__);


__WEBPACK_IMPORTED_MODULE_0__controllers_builderCtrl_posts_js___default.a.render();

/***/ })

/******/ });