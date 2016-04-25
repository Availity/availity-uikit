/*!
 * 
 * availity-uikit v2.0.0-beta.4 (01/30/2016)
 * (c) Availity, LLC
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("availity", [], factory);
	else if(typeof exports === 'object')
		exports["availity"] = factory();
	else
		root["availity"] = factory();
})(this, function() {
return webpackJsonpavaility([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\n__webpack_require__(1);\n\n__webpack_require__(2);//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOltdLCJtYXBwaW5ncyI6Ijs7OzsiLCJzb3VyY2VSb290IjoiIn0=");

/***/ },
/* 1 */
/***/ function(module, exports) {

	eval("// removed by extract-text-webpack-plugin//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2xlc3MvYXZhaWxpdHktYm9vdHN0cmFwLmxlc3M/MjJlZCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9sZXNzL2F2YWlsaXR5LWJvb3RzdHJhcC5sZXNzXG4gKiogbW9kdWxlIGlkID0gMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\n__webpack_require__(3);\n\nvar availity = {\n  VERSION: (\"2.0.0-beta.4\")\n};\n\nexports.default = availity;//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9qcy9pbmRleC5qcz80MmY2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi9tb2RhbCc7XG5cbmNvbnN0IGF2YWlsaXR5ID0ge1xuICBWRVJTSU9OOiBwcm9jZXNzLmVudi5WRVJTSU9OXG59O1xuXG5leHBvcnQgZGVmYXVsdCBhdmFpbGl0eTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIGpzL2luZGV4LmpzXG4gKiovIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBR0EiLCJzb3VyY2VSb290IjoiIn0=");

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar _jquery = __webpack_require__(4);\n\nvar _jquery2 = _interopRequireDefault(_jquery);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar exists = _jquery2.default.fn.modal && _jquery2.default.fn.modal.Constructor;\n\nfunction override() {\n\n  var _setScrollBar = _jquery2.default.fn.modal.Constructor.prototype.setScrollbar;\n  _jquery2.default.fn.modal.Constructor.prototype.setScrollbar = function () {\n\n    _setScrollBar.apply(this);\n    if (this.bodyIsOverflowing) {\n      (0, _jquery2.default)('.navbar-fixed-top').css('padding-right', this.scrollbarWidth);\n    }\n  };\n\n  var _resetScrollbar = _jquery2.default.fn.modal.Constructor.prototype.resetScrollbar;\n  _jquery2.default.fn.modal.Constructor.prototype.resetScrollbar = function () {\n\n    _resetScrollbar.apply(this);\n    (0, _jquery2.default)('.navbar-fixed-top').css('padding-right', '');\n  };\n}\n\nif (exists) {\n  override();\n}//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9qcy9tb2RhbC9pbmRleC5qcz81YjAzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5cbmxldCBleGlzdHMgPSAkLmZuLm1vZGFsICYmICQuZm4ubW9kYWwuQ29uc3RydWN0b3I7XG5cbmZ1bmN0aW9uIG92ZXJyaWRlKCkge1xuXG4gIGxldCBfc2V0U2Nyb2xsQmFyID0gJC5mbi5tb2RhbC5Db25zdHJ1Y3Rvci5wcm90b3R5cGUuc2V0U2Nyb2xsYmFyO1xuICAkLmZuLm1vZGFsLkNvbnN0cnVjdG9yLnByb3RvdHlwZS5zZXRTY3JvbGxiYXIgPSBmdW5jdGlvbigpIHtcblxuICAgIF9zZXRTY3JvbGxCYXIuYXBwbHkodGhpcyk7XG4gICAgaWYgKHRoaXMuYm9keUlzT3ZlcmZsb3dpbmcpIHtcbiAgICAgICQoJy5uYXZiYXItZml4ZWQtdG9wJykuY3NzKCdwYWRkaW5nLXJpZ2h0JywgdGhpcy5zY3JvbGxiYXJXaWR0aCk7XG4gICAgfVxuXG4gIH07XG5cbiAgbGV0IF9yZXNldFNjcm9sbGJhciA9ICQuZm4ubW9kYWwuQ29uc3RydWN0b3IucHJvdG90eXBlLnJlc2V0U2Nyb2xsYmFyO1xuICAkLmZuLm1vZGFsLkNvbnN0cnVjdG9yLnByb3RvdHlwZS5yZXNldFNjcm9sbGJhciA9IGZ1bmN0aW9uKCkge1xuXG4gICAgX3Jlc2V0U2Nyb2xsYmFyLmFwcGx5KHRoaXMpO1xuICAgICQoJy5uYXZiYXItZml4ZWQtdG9wJykuY3NzKCdwYWRkaW5nLXJpZ2h0JywgJycpO1xuXG4gIH07XG5cbn1cblxuaWYgKGV4aXN0cykge1xuICBvdmVycmlkZSgpO1xufVxuXG5cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIGpzL21vZGFsL2luZGV4LmpzXG4gKiovIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFIQTtBQUNBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBYkE7QUFDQTtBQXFCQTtBQUNBO0FBREEiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }
])
});
;