exports.id = "main";
exports.modules = {

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst App_1 = __webpack_require__(/*! ./App */ \"./src/App.ts\");\r\n// You need only 3 lines of code to start accepting code changes coming through the HMR\r\nif (true) {\r\n    module.hot.accept();\r\n    // Next callback is essential: After code changes were accepted     we need to restart the app. server.close() is here Express.JS-specific and can differ in other frameworks. The idea is that you should shut down your app here. Data/state saving between shutdown and new start is possible\r\n    module.hot.dispose(() => console.log('hot reloaded'));\r\n}\r\nApp_1.default();\r\nApp_1.default();\r\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ })

};