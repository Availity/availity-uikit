/*!
 * 
 * availity-uikit v2.0.0-beta.3 (01/28/2016)
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
return webpackJsonpavaility([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar _jquery = __webpack_require__(4);\n\nvar _jquery2 = _interopRequireDefault(_jquery);\n\nvar _chart = __webpack_require__(5);\n\nvar _chart2 = _interopRequireDefault(_chart);\n\n__webpack_require__(7);\n\n__webpack_require__(8);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(0, _jquery2.default)('[data-toggle=\"popover\"]').popover({\n  html: true\n});\n\n(0, _jquery2.default)('[data-toggle=\"tooltip\"]').tooltip();\n\n(0, _jquery2.default)('.docs-example').each(function () {\n\n  var btn = '\\n    <hr class=\"divider-lg\"/>\\n    <div class=\"btn-toolbar\">\\n      <button class=\"btn btn-ghost btn-sm\" data-toggle=\"code\">\\n        View Code <i class=\"icon icon-code\"></i>\\n      </button>\\n    </div>';\n\n  (0, _jquery2.default)(this).append((0, _jquery2.default)(btn));\n});\n\n(0, _jquery2.default)('[data-toggle=\"code\"]').click(function (e) {\n\n  e.preventDefault();\n\n  var target = (0, _jquery2.default)(this).parents('.docs-example').next('.language-markup');\n\n  if (target.is(':visible')) {\n    target.velocity('slideUp', { duration: 200 });\n  } else {\n    target.velocity('fadeIn', {\n      duration: 300,\n      display: 'block'\n    });\n  }\n});\n\n// filter popover\n(0, _jquery2.default)('[data-toggle=\"filter\"]').popover({\n  html: true,\n  placement: (0, _jquery2.default)(undefined).attr('data-placement'),\n  trigger: 'click',\n  content: function content() {\n    var target = (0, _jquery2.default)(this).attr('data-target');\n    var $target = (0, _jquery2.default)(target);\n    return $target.html();\n  }\n});\n\n(0, _jquery2.default)('.dropdown-menu a[data-toggle=\"tab\"]').click(function (e) {\n  e.stopPropagation();\n  (0, _jquery2.default)(this).tab('show');\n});\n\n(0, _jquery2.default)('#datetimepicker6').datepicker({\n  autoclose: true,\n  clearBtn: true,\n  todayBtn: true,\n  todayHighlight: true,\n  format: 'mm/dd/yyyy'\n});\n\n// Select2\n(0, _jquery2.default)('select').select2({\n  allowClear: true,\n  placeholder: {\n    id: '-1',\n    placeholder: 'Select one'\n  }\n}).on('select2:open', function () {\n\n  var $this = (0, _jquery2.default)(this);\n  if ($this.parents('[class*=\"has-\"]').length) {\n\n    // get all CSS-classes from the element where we found \"has-*\" and collect them in an array\n    var classNames = $this.parents('[class*=\"has-\"]')[0].className.split(/\\s+/);\n\n    // go through the class names, find \"has-\"\n    for (var i = 0; i < classNames.length; ++i) {\n      if (classNames[i].match('has-')) {\n        (0, _jquery2.default)('#select2-drop').addClass(classNames[i]);\n      }\n    }\n  }\n});\n\n// DO NOT USE THIS IN PRODUCTION. DEMO PURPOSES ONLY.\nsetInterval(function () {\n  var indicators = (0, _jquery2.default)('.loading-indicator');\n  for (var i = 0; i < indicators.length; i++) {\n    (0, _jquery2.default)(indicators[i]).find('.loading-bullet').velocity('transition.slideRightIn', { stagger: 250 }).delay(750).velocity({ opacity: 0 }, 500);\n  }\n}, 2000);\n\nvar data = {\n  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],\n  datasets: [{\n    label: 'My First dataset',\n    fillColor: 'rgba(0,154,87,0.5)',\n    strokeColor: 'rgba(0,154,87,0.8)',\n    highlightFill: 'rgba(0,154,87,0.75)',\n    highlightStroke: 'rgba(0,154,87,1)',\n    data: [65, 59, 80, 81, 56, 55, 40]\n  }, {\n    label: 'My Second dataset',\n    fillColor: 'rgba(0,147,232,0.5)',\n    strokeColor: 'rgba(0,147,232,0.8)',\n    highlightFill: 'rgba(0,147,232,0.75)',\n    highlightStroke: 'rgba(0,147,232,1)',\n    data: [28, 48, 40, 19, 86, 27, 90]\n  }, {\n    label: 'My Third dataset',\n    fillColor: 'rgba(212,208,8,0.5)',\n    strokeColor: 'rgba(212,208,8,0.8)',\n    highlightFill: 'rgba(212,208,8,0.75)',\n    highlightStroke: 'rgba(212,208,8,1)',\n    data: [18, 98, 19, 55, 20, 34, 70]\n  }]\n};\n\nvar $chart1 = (0, _jquery2.default)('#guideChart1');\nif ($chart1[0]) {\n  var ctx = $chart1[0].getContext('2d');\n  /* eslint new-cap: 0 */\n  new _chart2.default(ctx).Bar(data, {\n    responsive: true,\n    maintainAspectRatio: false\n  });\n}//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9kb2NzL2pzL2luZGV4LmpzPzllMmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBDaGFydCBmcm9tICdjaGFydC5qcyc7XG5cbmltcG9ydCAnLi4vbGVzcy9kb2NzLmxlc3MnO1xuaW1wb3J0ICdhbmltYXRlLmNzcy9hbmltYXRlLmNzcyc7XG5cbiQoJ1tkYXRhLXRvZ2dsZT1cInBvcG92ZXJcIl0nKS5wb3BvdmVyKHtcbiAgaHRtbDogdHJ1ZVxufSk7XG5cbiQoJ1tkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIl0nKS50b29sdGlwKCk7XG5cbiQoJy5kb2NzLWV4YW1wbGUnKS5lYWNoKGZ1bmN0aW9uKCkge1xuXG4gIGNvbnN0IGJ0biA9IGBcbiAgICA8aHIgY2xhc3M9XCJkaXZpZGVyLWxnXCIvPlxuICAgIDxkaXYgY2xhc3M9XCJidG4tdG9vbGJhclwiPlxuICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tZ2hvc3QgYnRuLXNtXCIgZGF0YS10b2dnbGU9XCJjb2RlXCI+XG4gICAgICAgIFZpZXcgQ29kZSA8aSBjbGFzcz1cImljb24gaWNvbi1jb2RlXCI+PC9pPlxuICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+YDtcblxuICAkKHRoaXMpLmFwcGVuZCgkKGJ0bikpO1xuXG59KTtcblxuJCgnW2RhdGEtdG9nZ2xlPVwiY29kZVwiXScpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcblxuICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgY29uc3QgdGFyZ2V0ID0gJCh0aGlzKS5wYXJlbnRzKCcuZG9jcy1leGFtcGxlJykubmV4dCgnLmxhbmd1YWdlLW1hcmt1cCcpO1xuXG4gIGlmICh0YXJnZXQuaXMoJzp2aXNpYmxlJykpIHtcbiAgICB0YXJnZXQudmVsb2NpdHkoJ3NsaWRlVXAnLCB7IGR1cmF0aW9uOiAyMDAgfSk7XG4gIH1lbHNlIHtcbiAgICB0YXJnZXQudmVsb2NpdHkoJ2ZhZGVJbicsIHtcbiAgICAgIGR1cmF0aW9uOiAzMDAsXG4gICAgICBkaXNwbGF5OiAnYmxvY2snXG4gICAgfSk7XG4gIH1cblxufSk7XG5cbi8vIGZpbHRlciBwb3BvdmVyXG4kKCdbZGF0YS10b2dnbGU9XCJmaWx0ZXJcIl0nKS5wb3BvdmVyKHtcbiAgaHRtbDogdHJ1ZSxcbiAgcGxhY2VtZW50OiAkKHRoaXMpLmF0dHIoJ2RhdGEtcGxhY2VtZW50JyksXG4gIHRyaWdnZXI6ICdjbGljaycsXG4gIGNvbnRlbnQ6IGZ1bmN0aW9uKCkge1xuICAgIGxldCB0YXJnZXQgPSAkKHRoaXMpLmF0dHIoJ2RhdGEtdGFyZ2V0Jyk7XG4gICAgbGV0ICR0YXJnZXQgPSAkKHRhcmdldCk7XG4gICAgcmV0dXJuICR0YXJnZXQuaHRtbCgpO1xuICB9XG59KTtcblxuJCgnLmRyb3Bkb3duLW1lbnUgYVtkYXRhLXRvZ2dsZT1cInRhYlwiXScpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcbiAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgJCh0aGlzKS50YWIoJ3Nob3cnKTtcbn0pO1xuXG4kKCcjZGF0ZXRpbWVwaWNrZXI2JykuZGF0ZXBpY2tlcih7XG4gIGF1dG9jbG9zZTogdHJ1ZSxcbiAgY2xlYXJCdG46IHRydWUsXG4gIHRvZGF5QnRuOiB0cnVlLFxuICB0b2RheUhpZ2hsaWdodDogdHJ1ZSxcbiAgZm9ybWF0OiAnbW0vZGQveXl5eSdcbn0pO1xuXG4vLyBTZWxlY3QyXG4kKCdzZWxlY3QnKS5zZWxlY3QyKHtcbiAgYWxsb3dDbGVhcjogdHJ1ZSxcbiAgcGxhY2Vob2xkZXI6IHtcbiAgICBpZDogJy0xJyxcbiAgICBwbGFjZWhvbGRlcjogJ1NlbGVjdCBvbmUnXG4gIH1cbn0pLm9uKCdzZWxlY3QyOm9wZW4nLCBmdW5jdGlvbigpIHtcblxuICBsZXQgJHRoaXMgPSAkKHRoaXMpO1xuICBpZiAoJHRoaXMucGFyZW50cygnW2NsYXNzKj1cImhhcy1cIl0nKS5sZW5ndGgpIHtcblxuICAgIC8vIGdldCBhbGwgQ1NTLWNsYXNzZXMgZnJvbSB0aGUgZWxlbWVudCB3aGVyZSB3ZSBmb3VuZCBcImhhcy0qXCIgYW5kIGNvbGxlY3QgdGhlbSBpbiBhbiBhcnJheVxuICAgIGxldCBjbGFzc05hbWVzID0gJHRoaXMucGFyZW50cygnW2NsYXNzKj1cImhhcy1cIl0nKVswXS5jbGFzc05hbWUuc3BsaXQoL1xccysvKTtcblxuICAgIC8vIGdvIHRocm91Z2ggdGhlIGNsYXNzIG5hbWVzLCBmaW5kIFwiaGFzLVwiXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjbGFzc05hbWVzLmxlbmd0aDsgKytpKSB7XG4gICAgICBpZiAoY2xhc3NOYW1lc1tpXS5tYXRjaCgnaGFzLScpKSB7XG4gICAgICAgICQoJyNzZWxlY3QyLWRyb3AnKS5hZGRDbGFzcyhjbGFzc05hbWVzW2ldKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0pO1xuXG4vLyBETyBOT1QgVVNFIFRISVMgSU4gUFJPRFVDVElPTi4gREVNTyBQVVJQT1NFUyBPTkxZLlxuc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICBsZXQgaW5kaWNhdG9ycyA9ICQoJy5sb2FkaW5nLWluZGljYXRvcicpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGluZGljYXRvcnMubGVuZ3RoOyBpKyspIHtcbiAgICAkKGluZGljYXRvcnNbaV0pLmZpbmQoJy5sb2FkaW5nLWJ1bGxldCcpXG4gICAgICAudmVsb2NpdHkoJ3RyYW5zaXRpb24uc2xpZGVSaWdodEluJywgeyBzdGFnZ2VyOiAyNTAgfSlcbiAgICAgIC5kZWxheSg3NTApXG4gICAgICAudmVsb2NpdHkoeyBvcGFjaXR5OiAwIH0sIDUwMCk7XG4gIH1cbn0sIDIwMDApO1xuXG5jb25zdCBkYXRhID0ge1xuICBsYWJlbHM6IFsnSmFudWFyeScsICdGZWJydWFyeScsICdNYXJjaCcsICdBcHJpbCcsICdNYXknLCAnSnVuZScsICdKdWx5J10sXG4gIGRhdGFzZXRzOiBbXG4gICAge1xuICAgICAgbGFiZWw6ICdNeSBGaXJzdCBkYXRhc2V0JyxcbiAgICAgIGZpbGxDb2xvcjogJ3JnYmEoMCwxNTQsODcsMC41KScsXG4gICAgICBzdHJva2VDb2xvcjogJ3JnYmEoMCwxNTQsODcsMC44KScsXG4gICAgICBoaWdobGlnaHRGaWxsOiAncmdiYSgwLDE1NCw4NywwLjc1KScsXG4gICAgICBoaWdobGlnaHRTdHJva2U6ICdyZ2JhKDAsMTU0LDg3LDEpJyxcbiAgICAgIGRhdGE6IFs2NSwgNTksIDgwLCA4MSwgNTYsIDU1LCA0MF1cbiAgICB9LFxuICAgIHtcbiAgICAgIGxhYmVsOiAnTXkgU2Vjb25kIGRhdGFzZXQnLFxuICAgICAgZmlsbENvbG9yOiAncmdiYSgwLDE0NywyMzIsMC41KScsXG4gICAgICBzdHJva2VDb2xvcjogJ3JnYmEoMCwxNDcsMjMyLDAuOCknLFxuICAgICAgaGlnaGxpZ2h0RmlsbDogJ3JnYmEoMCwxNDcsMjMyLDAuNzUpJyxcbiAgICAgIGhpZ2hsaWdodFN0cm9rZTogJ3JnYmEoMCwxNDcsMjMyLDEpJyxcbiAgICAgIGRhdGE6IFsyOCwgNDgsIDQwLCAxOSwgODYsIDI3LCA5MF1cbiAgICB9LFxuICAgIHtcbiAgICAgIGxhYmVsOiAnTXkgVGhpcmQgZGF0YXNldCcsXG4gICAgICBmaWxsQ29sb3I6ICdyZ2JhKDIxMiwyMDgsOCwwLjUpJyxcbiAgICAgIHN0cm9rZUNvbG9yOiAncmdiYSgyMTIsMjA4LDgsMC44KScsXG4gICAgICBoaWdobGlnaHRGaWxsOiAncmdiYSgyMTIsMjA4LDgsMC43NSknLFxuICAgICAgaGlnaGxpZ2h0U3Ryb2tlOiAncmdiYSgyMTIsMjA4LDgsMSknLFxuICAgICAgZGF0YTogWzE4LCA5OCwgMTksIDU1LCAyMCwgMzQsIDcwXVxuICAgIH1cbiAgXVxufTtcblxuY29uc3QgJGNoYXJ0MSA9ICQoJyNndWlkZUNoYXJ0MScpO1xuaWYgKCRjaGFydDFbMF0pIHtcbiAgY29uc3QgY3R4ID0gJGNoYXJ0MVswXS5nZXRDb250ZXh0KCcyZCcpO1xuICAvKiBlc2xpbnQgbmV3LWNhcDogMCAqL1xuICBuZXcgQ2hhcnQoY3R4KS5CYXIoZGF0YSwge1xuICAgIHJlc3BvbnNpdmU6IHRydWUsXG4gICAgbWFpbnRhaW5Bc3BlY3RSYXRpbzogZmFsc2VcbiAgfSk7XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBkb2NzL2pzL2luZGV4LmpzXG4gKiovIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBTUE7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFPQTtBQVZBO0FBQ0E7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQUhBO0FBTkE7QUFDQTs7QUFpQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBSkE7QUFDQTtBQVVBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQUNBOztBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUZBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFKQTtBQU9BO0FBQ0E7QUFEQTtBQURBO0FBTkE7QUFIQTtBQUNBOztBQWlCQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBRkE7QUFDQTtBQVNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBZkE7QUFrQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBdkJBO0FBRkE7QUFDQTtBQTZCQTtBQUNBO0FBQ0E7O0FBREE7QUFJQTtBQUNBO0FBRkE7QUFIQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ },

/***/ 7:
/***/ function(module, exports) {

	eval("// removed by extract-text-webpack-plugin//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2RvY3MvbGVzcy9kb2NzLmxlc3M/NjExZiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9kb2NzL2xlc3MvZG9jcy5sZXNzXG4gKiogbW9kdWxlIGlkID0gN1xuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ },

/***/ 8:
/***/ function(module, exports) {

	eval("// removed by extract-text-webpack-plugin//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL34vYW5pbWF0ZS5jc3MvYW5pbWF0ZS5jc3M/N2ZmYiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2FuaW1hdGUuY3NzL2FuaW1hdGUuY3NzXG4gKiogbW9kdWxlIGlkID0gOFxuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }

})
});
;