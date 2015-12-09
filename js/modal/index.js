import $ from 'jquery';

let exists = $.fn.modal && $.fn.modal.Constructor;

function override() {

  let _setScrollBar = $.fn.modal.Constructor.prototype.setScrollbar;
  $.fn.modal.Constructor.prototype.setScrollbar = function() {

    _setScrollBar.apply(this);
    if (this.bodyIsOverflowing) {
      $('.navbar-fixed-top').css('padding-right', this.scrollbarWidth);
    }

  };

  let _resetScrollbar = $.fn.modal.Constructor.prototype.resetScrollbar;
  $.fn.modal.Constructor.prototype.resetScrollbar = function() {

    _resetScrollbar.apply(this);
    $('.navbar-fixed-top').css('padding-right', '');

  };

}

if (exists) {
  override();
}


