/*!
 * 
 * availity-uikit v3.0.0-beta.14 (09/29/2017)
 * (c) Availity, LLC
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("availity-uikit", [], factory);
	else if(typeof exports === 'object')
		exports["availity-uikit"] = factory();
	else
		root["availity-uikit"] = factory();
})(this, function() {
return webpackJsonpavaility_uikit([0],{

/***/ 14:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modal__ = __webpack_require__(3);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scss_bootstrap_scss__ = __webpack_require__(8);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scss_bootstrap_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__scss_bootstrap_scss__);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTQuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vanMvaW5kZXguanM/NDJmNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4vbW9kYWwnO1xuaW1wb3J0ICcuLi9zY3NzL19ib290c3RyYXAuc2Nzcyc7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8ganMvaW5kZXguanMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///14\n");

/***/ }),

/***/ 3:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(0);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);\n\n\nconst exists = __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.fn.modal && __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.fn.modal.Constructor;\n\nfunction override() {\n\n  const _setScrollBar = __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.fn.modal.Constructor.prototype.setScrollbar;\n  __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.fn.modal.Constructor.prototype.setScrollbar = function () {\n\n    _setScrollBar.apply(this);\n    if (this.bodyIsOverflowing) {\n      __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.navbar-fixed-top').css('padding-right', this.scrollbarWidth);\n    }\n  };\n\n  const _resetScrollbar = __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.fn.modal.Constructor.prototype.resetScrollbar;\n  __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.fn.modal.Constructor.prototype.resetScrollbar = function () {\n\n    _resetScrollbar.apply(this);\n    __WEBPACK_IMPORTED_MODULE_0_jquery___default()('.navbar-fixed-top').css('padding-right', '');\n  };\n}\n\nif (exists) {\n  override();\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9qcy9tb2RhbC9pbmRleC5qcz81YjAzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5cbmNvbnN0IGV4aXN0cyA9ICQuZm4ubW9kYWwgJiYgJC5mbi5tb2RhbC5Db25zdHJ1Y3RvcjtcblxuZnVuY3Rpb24gb3ZlcnJpZGUoKSB7XG5cbiAgY29uc3QgX3NldFNjcm9sbEJhciA9ICQuZm4ubW9kYWwuQ29uc3RydWN0b3IucHJvdG90eXBlLnNldFNjcm9sbGJhcjtcbiAgJC5mbi5tb2RhbC5Db25zdHJ1Y3Rvci5wcm90b3R5cGUuc2V0U2Nyb2xsYmFyID0gZnVuY3Rpb24oKSB7XG5cbiAgICBfc2V0U2Nyb2xsQmFyLmFwcGx5KHRoaXMpO1xuICAgIGlmICh0aGlzLmJvZHlJc092ZXJmbG93aW5nKSB7XG4gICAgICAkKCcubmF2YmFyLWZpeGVkLXRvcCcpLmNzcygncGFkZGluZy1yaWdodCcsIHRoaXMuc2Nyb2xsYmFyV2lkdGgpO1xuICAgIH1cblxuICB9O1xuXG4gIGNvbnN0IF9yZXNldFNjcm9sbGJhciA9ICQuZm4ubW9kYWwuQ29uc3RydWN0b3IucHJvdG90eXBlLnJlc2V0U2Nyb2xsYmFyO1xuICAkLmZuLm1vZGFsLkNvbnN0cnVjdG9yLnByb3RvdHlwZS5yZXNldFNjcm9sbGJhciA9IGZ1bmN0aW9uKCkge1xuXG4gICAgX3Jlc2V0U2Nyb2xsYmFyLmFwcGx5KHRoaXMpO1xuICAgICQoJy5uYXZiYXItZml4ZWQtdG9wJykuY3NzKCdwYWRkaW5nLXJpZ2h0JywgJycpO1xuXG4gIH07XG5cbn1cblxuaWYgKGV4aXN0cykge1xuICBvdmVycmlkZSgpO1xufVxuXG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBqcy9tb2RhbC9pbmRleC5qcyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///3\n");

/***/ }),

/***/ 8:
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3Njc3MvX2Jvb3RzdHJhcC5zY3NzPzI3M2MiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Njc3MvX2Jvb3RzdHJhcC5zY3NzXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///8\n");

/***/ })

},[14]);
});