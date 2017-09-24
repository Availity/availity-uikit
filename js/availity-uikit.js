/*!
 * 
 * availity-uikit v2.1.1 (09/24/2017)
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
return webpackJsonpavaility_uikit([0],[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';__webpack_require__(1);__webpack_require__(3);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';var _jquery=__webpack_require__(2);var _jquery2=_interopRequireDefault(_jquery);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var exists=_jquery2.default.fn.modal&&_jquery2.default.fn.modal.Constructor;function override(){var _setScrollBar=_jquery2.default.fn.modal.Constructor.prototype.setScrollbar;_jquery2.default.fn.modal.Constructor.prototype.setScrollbar=function(){_setScrollBar.apply(this);if(this.bodyIsOverflowing){(0,_jquery2.default)('.navbar-fixed-top').css('padding-right',this.scrollbarWidth);}};var _resetScrollbar=_jquery2.default.fn.modal.Constructor.prototype.resetScrollbar;_jquery2.default.fn.modal.Constructor.prototype.resetScrollbar=function(){_resetScrollbar.apply(this);(0,_jquery2.default)('.navbar-fixed-top').css('padding-right','');};}if(exists){override();}

/***/ }),
/* 2 */,
/* 3 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ })
])
});
;
//# sourceMappingURL=availity-uikit.js.map