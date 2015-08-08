/**
 * availity-uikit v0.10.2 -- August-08
 * Copyright 2015 Availity, LLC 
 */

/**
 * Monkey patch Bootstrap Modal and prevent shifting of a fixed top navbar when the modal
 * window is shown.
 */
(function($) {

  var exists = $.fn.modal && $.fn.modal.Constructor;
  if(!exists) {
    return;
  }

  var _setScrollBar = $.fn.modal.Constructor.prototype.setScrollbar;

  $.fn.modal.Constructor.prototype.setScrollbar = function () {
    _setScrollBar.apply(this);
    if(this.bodyIsOverflowing) {
      $('.navbar-fixed-top').css('padding-right', this.scrollbarWidth);
    }
  };

  var _resetScrollbar = $.fn.modal.Constructor.prototype.resetScrollbar;
  $.fn.modal.Constructor.prototype.resetScrollbar = function () {
    _resetScrollbar.apply(this);
    $('.navbar-fixed-top').css('padding-right', '');
  };

})(jQuery);
