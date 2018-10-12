exports.id = "main";
exports.modules = {

/***/ "./src/App.ts":
/*!********************!*\
  !*** ./src/App.ts ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nclass App {\r\n    constructor() {\r\n        this.message = 'hello';\r\n    }\r\n    sayHello() {\r\n        console.log(this.message);\r\n    }\r\n}\r\nexports.default = new App();\r\n\n\n//# sourceURL=webpack:///./src/App.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst App_1 = __webpack_require__(/*! ./App */ \"./src/App.ts\");\r\nif (true) {\r\n    module.hot.accept();\r\n    console.log('its real hot' + module.hot);\r\n    module.hot.dispose(() => console.log('hot dispose'));\r\n}\r\nApp_1.default();\r\nApp_1.default();\r\nApp_1.default();\r\nApp_1.default();\r\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ })

};