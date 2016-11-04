/*!
 * 
 * availity-uikit v2.0.0-beta.11 (11/04/2016)
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
return webpackJsonpavaility_uikit([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';var _jquery=__webpack_require__(2);var _jquery2=_interopRequireDefault(_jquery);var _chart=__webpack_require__(4);var _chart2=_interopRequireDefault(_chart);__webpack_require__(49);__webpack_require__(50);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}(0,_jquery2.default)('[data-toggle="popover"]').popover({html:true});(0,_jquery2.default)('[data-toggle="tooltip"]').tooltip();(0,_jquery2.default)('.docs-example').each(function(){var btn='\n    <hr class="divider-lg"/>\n    <div class="btn-toolbar">\n      <button class="btn btn-ghost btn-sm" data-toggle="code">\n        View Code <i class="icon icon-code"></i>\n      </button>\n    </div>';(0,_jquery2.default)(this).append((0,_jquery2.default)(btn));});(0,_jquery2.default)('[data-toggle="code"]').click(function(e){e.preventDefault();var target=(0,_jquery2.default)(this).parents('.docs-example').next('.language-markup');if(target.is(':visible')){target.velocity('slideUp',{duration:200});}else{target.velocity('fadeIn',{duration:300,display:'block'});}});// filter popover
	(0,_jquery2.default)('[data-toggle="filter"]').popover({html:true,placement:(0,_jquery2.default)(undefined).attr('data-placement'),trigger:'click',content:function content(){var target=(0,_jquery2.default)(this).attr('data-target');var $target=(0,_jquery2.default)(target);return $target.html();}});(0,_jquery2.default)('.dropdown-menu a[data-toggle="tab"]').click(function(e){e.stopPropagation();(0,_jquery2.default)(this).tab('show');});(0,_jquery2.default)('#datetimepicker6').datepicker({autoclose:true,clearBtn:true,todayBtn:true,todayHighlight:true,format:'mm/dd/yyyy'});// Select2
	(0,_jquery2.default)('#single-select, #multiple-select').select2({placeholder:'Select a State',allowClear:true}).on('select2-open',function(){var $this=(0,_jquery2.default)(this);if($this.parents('[class*="has-"]').length){// get all CSS-classes from the element where we found "has-*" and collect them in an array
	var classNames=$this.parents('[class*="has-"]')[0].className.split(/\s+/);// go through the class names, find "has-"
	for(var i=0;i<classNames.length;++i){if(classNames[i].match('has-')){(0,_jquery2.default)('#select2-drop').addClass(classNames[i]);}}}});(0,_jquery2.default)('.select2, .select2-multiple').select2({allowClear:true});// DO NOT USE THIS IN PRODUCTION. DEMO PURPOSES ONLY.
	setInterval(function(){var indicators=(0,_jquery2.default)('.loading-indicator');for(var i=0;i<indicators.length;i++){(0,_jquery2.default)(indicators[i]).find('.loading-bullet').velocity('transition.slideRightIn',{stagger:250}).delay(750).velocity({opacity:0},500);}},2000);var data={labels:['January','February','March','April','May','June','July'],datasets:[{label:'My First dataset',fillColor:'rgba(0,154,87,0.5)',strokeColor:'rgba(0,154,87,0.8)',highlightFill:'rgba(0,154,87,0.75)',highlightStroke:'rgba(0,154,87,1)',data:[65,59,80,81,56,55,40]},{label:'My Second dataset',fillColor:'rgba(0,147,232,0.5)',strokeColor:'rgba(0,147,232,0.8)',highlightFill:'rgba(0,147,232,0.75)',highlightStroke:'rgba(0,147,232,1)',data:[28,48,40,19,86,27,90]},{label:'My Third dataset',fillColor:'rgba(212,208,8,0.5)',strokeColor:'rgba(212,208,8,0.8)',highlightFill:'rgba(212,208,8,0.75)',highlightStroke:'rgba(212,208,8,1)',data:[18,98,19,55,20,34,70]}]};var $chart1=(0,_jquery2.default)('#guideChart1');if($chart1[0]){var ctx=$chart1[0].getContext('2d');/* eslint new-cap: 0 */new _chart2.default(ctx).Bar(data,{responsive:true,maintainAspectRatio:false});}

/***/ },

/***/ 49:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 50:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }

})
});
;
//# sourceMappingURL=docs.js.map