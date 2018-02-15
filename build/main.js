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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__styles_styles_scss__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__styles_styles_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__styles_styles_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__controllers_builderCtrl_js__ = __webpack_require__(6);




__WEBPACK_IMPORTED_MODULE_1__controllers_builderCtrl_js__["a" /* default */].render();

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

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(2);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(4)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./styles.scss", function() {
		var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./styles.scss");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "html,\nbody,\nul,\nol {\n  margin: 0;\n  padding: 0;\n  font-size: 16px; }\n\n.interface, .success, .error, .warning {\n  background-color: #BDBDBD;\n  margin: 10px 15px;\n  padding: 10px 5px; }\n\n.success {\n  background-color: #A5D6A7;\n  color: #212121; }\n  .success:hover {\n    background-color: #304FFE; }\n\n.error {\n  background-color: #FF9800;\n  color: #212121; }\n  .error:hover {\n    background-color: #E64A19; }\n\n.warning {\n  background-color: #C6FF00;\n  color: #212121; }\n  .warning:hover {\n    background-color: #F48FB1; }\n\nbody {\n  display: flex;\n  flex-flow: row wrap; }\n\n.block__sidebar {\n  display: flex;\n  flex-direction: column;\n  background-color: #4f6ef7;\n  color: #E3F2FD;\n  width: 20%;\n  box-sizing: border-box;\n  min-height: 100%; }\n  .block__sidebar .block__sidebar_profile {\n    text-align: center;\n    width: 100%;\n    padding: 15px;\n    box-sizing: border-box; }\n    .block__sidebar .block__sidebar_profile img {\n      width: 100px;\n      border-radius: 50%; }\n    .block__sidebar .block__sidebar_profile h4 {\n      font-weight: 400;\n      font-size: 1.2em;\n      margin-bottom: 0px; }\n    .block__sidebar .block__sidebar_profile h5 {\n      margin: 10px 0px; }\n    .block__sidebar .block__sidebar_profile .block__sidebar_profile-icons {\n      display: inline-flex;\n      justify-content: space-around;\n      width: inherit;\n      font-size: 1.2em;\n      padding: 10px 0px; }\n  .block__sidebar .block__sidebar_menu {\n    display: flex;\n    flex-direction: column;\n    width: 100%; }\n    .block__sidebar .block__sidebar_menu button {\n      color: #E3F2FD;\n      border-style: none;\n      border-top: 2px solid rgba(255, 255, 255, 0.5);\n      background-color: rgba(255, 255, 255, 0.1);\n      padding: 15px; }\n    .block__sidebar .block__sidebar_menu button:last-child {\n      border-bottom: 2px solid rgba(255, 255, 255, 0.5); }\n    .block__sidebar .block__sidebar_menu button:hover {\n      background-color: rgba(255, 255, 255, 0.3);\n      border-right: 4px solid #304FFE;\n      padding-right: calc(15px - 4px); }\n\n.block__head {\n  padding: 15px 30px;\n  display: flex;\n  align-self: flex-start;\n  justify-content: space-between;\n  background-color: #9C27B0;\n  box-sizing: border-box;\n  width: 100%;\n  color: #E3F2FD; }\n  .block__head img {\n    max-height: 100px; }\n  .block__head h1 {\n    flex: 3.5 0;\n    text-align: center; }\n  .block__head div {\n    flex: 1 1; }\n\n.block__main {\n  padding: 15px 30px;\n  display: flex;\n  background-color: #00E676;\n  align-content: flex-start;\n  justify-content: center;\n  box-sizing: border-box;\n  flex: 2;\n  color: #212121;\n  flex-flow: row wrap; }\n  .block__main .block__main_title {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    width: 100%; }\n    .block__main .block__main_title h1 {\n      font-weight: 100;\n      margin: 0px;\n      flex: 3; }\n    .block__main .block__main_title div {\n      padding: 20px 30px;\n      background-color: rgba(189, 189, 189, 0.37);\n      width: 150px;\n      text-align: center; }\n    .block__main .block__main_title div:hover {\n      background-color: #304FFE; }\n    .block__main .block__main_title div:last-child {\n      flex: 1.5;\n      margin-left: 10px;\n      text-align: left; }\n  .block__main .block__main_content {\n    padding: 20px 0px;\n    display: flex;\n    flex-flow: row wrap;\n    width: 100%;\n    align-content: space-around;\n    justify-content: space-between; }\n    .block__main .block__main_content div {\n      margin: 10px 0px;\n      border: 1px solid #002280;\n      text-align: center; }\n    .block__main .block__main_content .block__small {\n      padding: 10px 10px;\n      background-color: #E64A19;\n      width: 30%; }\n    .block__main .block__main_content .block__long {\n      padding: 10px 10px;\n      flex: 1 0 100%;\n      background-color: #C6FF00;\n      box-sizing: border-box; }\n", ""]);

// exports


/***/ }),
/* 3 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(5);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 5 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_info_js__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__views_engine_js__ = __webpack_require__(8);




// let controller = {
// 	model, 			
// 	view,				
// 	work: function() {
// 		let result = [],
// 		data = this.model.data;
// 		result = data.map(function(el){

// 			let html = document.createElement(el.tag);
// 			if (el.body && el.tag != "img") {
// 				html.innerHTML = el.body;
// 			}
// 			if (el.src){
// 				html.setAttribute("src", el.src);
// 			}
// 			if (el.href){
// 				html.setAttribute("href", el.href);
// 			}
// 			return html;

// 		});

// 		this.markUp = result;
// 		return result;

// 	},
// 	render: function(){
// 		this.work();
// 		this.view.render(this.markUp);
// 	},
// 	markUp: [],

// };

// export default controller; 

let controller = {
    model: __WEBPACK_IMPORTED_MODULE_0__models_info_js__["a" /* default */], 
    view: __WEBPACK_IMPORTED_MODULE_1__views_engine_js__["a" /* default */],
    work: function() {
        let result = [];
        return this.model.init().then(() => {
	 		let data = this.model.data;
	        // result = data.map(trispile);

	        this.markUp = data;

        });
    },
    render: function() {
        this.work().then(() => {
        this.view.render(this.markUp);
    })
    },
    markUp: []
};
// function trispile(el) {
//     let html;

//     if (el && el.body && el.tag) {

//         html = document.createElement("div");

//         if (typeof el.body === "object") {

//             if (el.body.length) {
//                 el.body.map(trispile).forEach(element => {
//                 	html.appendChild(element)
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


/* harmony default export */ __webpack_exports__["a"] = (controller);

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
let store;
/* harmony default export */ __webpack_exports__["a"] = (store = {

    data: [],
    init: function(url = "https://jsonplaceholder.typicode.com/posts") {
        return fetch(url).then( response => response.json())

        	.then( json => store.data = json );

        }
    });
  // data: [
    //     { tag: "div", body: "Все примеры, которые мы приводили выше, были построены с учетом однострочного (одностолбцового) расположения блоков. Надо сказать, что по умолчанию flex-контейнер всегда будет располагать блоки внутри себя в одну линию. Однако, спецификацией также поддерживается многострочный режим. За многострочность внутри flex-контейнера отвечает CSS свойство flex-wrap.", class: "block__small" },
    //     { tag: "div", body: "Block 2", class: "block__small" },
    //     { tag: "div", body: "Block 3", class: "block__small" },
    //     { tag: "div", body: "Block 4", class: "block__small" },
    //     { tag: "div", body: "Я думаю, что flexbox, конечно же, не вытеснит все остальные способы верстки, но, безусловно, в ближайшее время займет достойную нишу при решении огромного количества задач. И уж точно, пробовать работать с ним нужно уже сейчас. Одна из следующих статей будет посвящена конкретным примерам работы с flex-версткой. Подписывайтесь на новости ;)", class: "block__small" },
    //     { tag: "div", body: "Block 6", class: "block__small" },
    //     { tag: "div", body: "Block 7", class: "block__small" },
    //     { tag: "div", body: "Block 8", class: "block__small" },
    //     { tag: "div", body: "Block 9", class: "block__small" },
    //     { tag: "div", body: "Задает изначальный размер по главной оси для flex-блока до того, как к нему будут применены преобразования, основанные на других flex-факторах. Может быть задан в любых единицах измерения длинны (px, em, %, …) или auto(по умолчанию). Если задан как auto – за основу берутся размеры блока (width, height), которые, в свою очередь, могут зависеть от размера контента, если не указанны явно.", class: "block__long" },
    //     { tag: "div", body: "Block 11", class: "block__long" },
    // ],

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
    render: function(data) {
        var body = document.getElementsByClassName("block__main_content")[0];

        data.map(el => {
        	let box = document.createElement("div");
        	let title = document.createElement("h3");
        	let text = document.createElement("p");
        	title.innerHTML = el.title;
        	text.innerHTML = el.body;
        	box.appendChild(title);
        	box.appendChild(text);
        	box.classList.add("block__small");
        	return box;
        }).forEach(el => {
        	body.appendChild(el);

        });
 
    }
});


/***/ })
/******/ ]);