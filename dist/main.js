/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/createHtmlElement.js":
/*!**********************************!*\
  !*** ./src/createHtmlElement.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createHtmlElement\": () => (/* binding */ createHtmlElement)\n/* harmony export */ });\nconst createHtmlElement = (type, content) => {\n    const element = document.createElement(type);\n    if(content) element.innerText = content\n    return element;\n}\n\n\n\n//# sourceURL=webpack://projectrestaurant/./src/createHtmlElement.js?");

/***/ }),

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"footerElement\": () => (/* binding */ footerElement)\n/* harmony export */ });\n/* harmony import */ var _renderElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderElement */ \"./src/renderElement.js\");\n\n\nconst footerElement = (0,_renderElement__WEBPACK_IMPORTED_MODULE_0__.renderElement)('ul', 'li', ['ICON1', 'ICON2', 'ICON3'], null);\n\n\n\n//# sourceURL=webpack://projectrestaurant/./src/footer.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"content\": () => (/* binding */ content)\n/* harmony export */ });\n/* harmony import */ var _renderOnPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderOnPage */ \"./src/renderOnPage.js\");\n/* harmony import */ var _navBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navBar */ \"./src/navBar.js\");\n/* harmony import */ var _welcome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./welcome */ \"./src/welcome.js\");\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer */ \"./src/footer.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n\n\n\n\n\n\nconst content = document.getElementById('content');\n\nconst homeScreen = () => {\n    (0,_renderOnPage__WEBPACK_IMPORTED_MODULE_0__.renderOnPage)('nav', _navBar__WEBPACK_IMPORTED_MODULE_1__.navBar)\n    // renderOnPage('main', welcomeTitle)\n    // renderOnPage('main', subTitle)\n    ;(0,_renderOnPage__WEBPACK_IMPORTED_MODULE_0__.renderOnPage)('main', _menu__WEBPACK_IMPORTED_MODULE_4__.finalMenu)\n    ;(0,_renderOnPage__WEBPACK_IMPORTED_MODULE_0__.renderOnPage)('footer', _footer__WEBPACK_IMPORTED_MODULE_3__.footerElement)\n}\n\nhomeScreen();\n\n\n\n//# sourceURL=webpack://projectrestaurant/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"finalMenu\": () => (/* binding */ finalMenu)\n/* harmony export */ });\n/* harmony import */ var _renderElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderElement */ \"./src/renderElement.js\");\n\n\nconst restaurantMenu = {\n    itemOne: [\n        'Enchiladas',\n        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat, tellus sit amet',\n        '$25'\n    ],\n    itemTwo: [\n        'Birria',\n        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat, tellus sit amet',\n        '$30'\n    ],\n    itemThree: [\n        'Flan',\n        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat, tellus sit amet',\n        '$15'\n    ]\n}\n\nlet menuItem; \n\nconst renderMenu = (menu) => {\n    const menuDiv = document.createElement('div');\n\n    for(let food in menu) {\n        menuDiv.appendChild((0,_renderElement__WEBPACK_IMPORTED_MODULE_0__.renderElement)('div', 'p', menu[food], null));\n    }\n    return menuDiv\n}\n\nconst finalMenu = renderMenu(restaurantMenu)\n\n\n\n//# sourceURL=webpack://projectrestaurant/./src/menu.js?");

/***/ }),

/***/ "./src/navBar.js":
/*!***********************!*\
  !*** ./src/navBar.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"navBar\": () => (/* binding */ navBar)\n/* harmony export */ });\n/* harmony import */ var _renderElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderElement */ \"./src/renderElement.js\");\n\n\nconst navBar = (0,_renderElement__WEBPACK_IMPORTED_MODULE_0__.renderElement)('ul', 'li', ['Home', 'Menu', 'About'], null)//, '.navBar')\n\n\n\n//# sourceURL=webpack://projectrestaurant/./src/navBar.js?");

/***/ }),

/***/ "./src/renderElement.js":
/*!******************************!*\
  !*** ./src/renderElement.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderElement\": () => (/* binding */ renderElement)\n/* harmony export */ });\n/* harmony import */ var _createHtmlElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createHtmlElement */ \"./src/createHtmlElement.js\");\n\n\nconst renderElement = (typeOne, typeTwo, sections, classes) => {\n    const newEl = document.createElement(typeOne);\n    if(classes) newEl.addClassList(classes);\n\n    sections.forEach(section => {\n        newEl.appendChild((0,_createHtmlElement__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)(typeTwo, section))\n    });\n\n    return newEl;\n}\n\n\n\n//# sourceURL=webpack://projectrestaurant/./src/renderElement.js?");

/***/ }),

/***/ "./src/renderOnPage.js":
/*!*****************************!*\
  !*** ./src/renderOnPage.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderOnPage\": () => (/* binding */ renderOnPage)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n\n\nconst renderOnPage = (parent, child) => {\n    const parentEl = document.createElement(parent)\n    parentEl.appendChild(child);\n    _index__WEBPACK_IMPORTED_MODULE_0__.content.appendChild(parentEl)\n}\n\n\n\n//# sourceURL=webpack://projectrestaurant/./src/renderOnPage.js?");

/***/ }),

/***/ "./src/welcome.js":
/*!************************!*\
  !*** ./src/welcome.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"welcomeTitle\": () => (/* binding */ welcomeTitle),\n/* harmony export */   \"subTitle\": () => (/* binding */ subTitle)\n/* harmony export */ });\n/* harmony import */ var _renderElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderElement */ \"./src/renderElement.js\");\n\n\nconst welcomeTitle = (0,_renderElement__WEBPACK_IMPORTED_MODULE_0__.renderElement)('div', 'p', ['Alma', 'Latina'], null)\nconst subTitle = (0,_renderElement__WEBPACK_IMPORTED_MODULE_0__.renderElement)('div', 'p', ['Fine Mexican Cuisine'], null)\n\n\n\n//# sourceURL=webpack://projectrestaurant/./src/welcome.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;