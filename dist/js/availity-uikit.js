/*!
 * 
 * availity-uikit v2.0.0-beta.6 (07/10/2016)
 * (c) Availity, LLC
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("jQuery"));
	else if(typeof define === 'function' && define.amd)
		define("availity", ["jQuery"], factory);
	else if(typeof exports === 'object')
		exports["availity"] = factory(require("jQuery"));
	else
		root["availity"] = factory(root["jQuery"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_4__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// LESS
	
	__webpack_require__(3);
	
	// JS
	__webpack_require__(1);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(2);

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _jquery = __webpack_require__(4);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var exists = _jquery2.default.fn.modal && _jquery2.default.fn.modal.Constructor;
	
	function override() {
	
	  var _setScrollBar = _jquery2.default.fn.modal.Constructor.prototype.setScrollbar;
	  _jquery2.default.fn.modal.Constructor.prototype.setScrollbar = function () {
	
	    _setScrollBar.apply(this);
	    if (this.bodyIsOverflowing) {
	      (0, _jquery2.default)('.navbar-fixed-top').css('padding-right', this.scrollbarWidth);
	    }
	  };
	
	  var _resetScrollbar = _jquery2.default.fn.modal.Constructor.prototype.resetScrollbar;
	  _jquery2.default.fn.modal.Constructor.prototype.resetScrollbar = function () {
	
	    _resetScrollbar.apply(this);
	    (0, _jquery2.default)('.navbar-fixed-top').css('padding-right', '');
	  };
	}
	
	if (exists) {
	  override();
	}

/***/ },
/* 3 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=availity-uikit.js.map