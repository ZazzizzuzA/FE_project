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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__controllers_builderCtrl_posts_js__ = __webpack_require__(5);


__WEBPACK_IMPORTED_MODULE_0__controllers_builderCtrl_posts_js__["a" /* default */].render();

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_info_posts_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__views_engine_posts_js__ = __webpack_require__(7);



let controller = {
    model: __WEBPACK_IMPORTED_MODULE_0__models_info_posts_js__["a" /* default */], //model: "model"
    view: __WEBPACK_IMPORTED_MODULE_1__views_engine_posts_js__["a" /* default */],
    work: function() {
        let result = [],
            data = this.model.data;
        result = data.map(function(el) {

            let html = document.createElement(el.tag);

            if (el.body) {
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

            return html;

        });

        this.markUp = result;
        return result;

    },
    render: function() {
        this.work();
        this.view.render(this.markUp);
    },
    markUp: [],

};

/* harmony default export */ __webpack_exports__["a"] = (controller);

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
    // First variation

    // data: [
    //     { tag: "div", body: "Block 1", class: "block__small", class2: "first-row" },
    //     { tag: "div", body: "Block 2", class: "block__small", class2: "first-row" },
    //     { tag: "div", body: "Block 3", class: "block__small", class2: "first-row" },
    //     { tag: "div", body: "Block 4", class: "block__small", class2: "second-row" },
    //     { tag: "div", body: "Block 5", class: "block__small", class2: "second-row" },
    //     { tag: "div", body: "Block 6", class: "block__small", class2: "second-row" },
    //     { tag: "div", body: "Block 7", class: "block__small", class2: "third-row" },
    //     { tag: "div", body: "Block 8", class: "block__small", class2: "third-row" },
    //     { tag: "div", body: "Block 9", class: "block__small", class2: "third-row" },
    //     { tag: "div", body: "Block 10", class: "block__long" },
    //     { tag: "div", body: "Block 11", class: "block__long" },
    // ]

    // Second varition
    data: [
            { tag: "div", body: "<div><div>Block 1</div><div>Block 2</div><div>Block 3</div></div><div><div>Block 4</div><div>Block 5</div><div>Block 6</div></div><div><div>Block 7</div><div>Block 8</div><div>Block 9</div></div>", class: "block__small-flex" },
            { tag: "div", body: "<div>Block 10</div><div>Block 11</div>", class: "block__long-flex" },

        ]
        // Третий вариант, который я хочу использовать

    // data: [{
    //         tag: "div",
    //         body: [
    //             { tag: "div", body: "Block 1", class: "block__item" },
    //             { tag: "div", body: "Block 2", class: "block__item" },
    //             { tag: "div", body: "Block 3", class: "block__item" },
    //             { tag: "div", body: "Block 4", class: "block__item" },
    //             { tag: "div", body: "Block 5", class: "block__item" },
    //             { tag: "div", body: "Block 6", class: "block__item" },
    //             { tag: "div", body: "Block 7", class: "block__item" },
    //             { tag: "div", body: "Block 8", class: "block__item" },
    //             { tag: "div", body: "Block 9", class: "block__item" },
    //         ],
    //         class: "block-flex"
    //     },
    //     {
    //         tag: "div",
    //         body: [
    //             { tag: "div", body: "Widther block 1", class: "block2__item" },
    //             { tag: "div", body: "Widther block 2", class: "block2__item" },
    //         ],
    //         class: "block2"
    //     }

    // ]
});

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
    render: function(data) {
        var body = document.getElementsByTagName("body")[0];
        data.forEach(function(el) {
            body.appendChild(el);

        });
    }
});

/***/ })
/******/ ]);