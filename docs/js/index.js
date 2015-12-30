import $ from 'jquery';
import Chart from 'chart.js';
import 'bootstrap';
import 'moment';
import 'select2';
import 'holderjs';
import 'bootstrap-datepicker';
import 'velocity-animate';
import 'velocity-animate/velocity.ui';

import '../less/docs.less';

$('[data-toggle="popover"]').popover({
  html: true
});

$('[data-toggle="tooltip"]').tooltip();

$('.guide-example').each(() => {

  let btn = `
    <hr class="divider-lg"/>' +
    <div class="btn-toolbar">
      <button class="btn btn-ghost btn-sm" data-toggle="code">
        View Code <i class="icon icon-code"></i>
      </button>' +
    </div>`;

  $(this).append($(btn));

});

$('[data-toggle="code"]').click( (e) => {

  e.preventDefault();

  let target = $(this).parents('.guide-example').next('.language-markup');

  if (target.is(':visible')) {
    target.velocity('slideUp', { duration: 200 });
  }else {
    target.velocity('fadeIn', {
      duration: 300,
      display: 'block'
    });
  }

});

// filter popover
$('[data-toggle="filter"]').popover({
  html: true,
  placement: $(this).attr('data-placement'),
  trigger: 'click',
  content: function() {
    let target = $(this).attr('data-target');
    let $target = $(target);
    return $target.html();
  }
});

$('.dropdown-menu a[data-toggle="tab"]').click(function(e) {
  e.stopPropagation();
  $(this).tab('show');
});

$('#datetimepicker6').datepicker({
  autoclose: true,
  clearBtn: true,
  todayBtn: true,
  todayHighlight: true,
  format: 'mm/dd/yyyy'
});

// Select2
$('select').select2({
  allowClear: true,
  placeholder: {
    id: '-1',
    placeholder: 'Select one'
  }
}).on('select2:open', () => {

  let $this = $(this);
  if ($this.parents('[class*="has-"]').length) {

    // get all CSS-classes from the element where we found "has-*" and collect them in an array
    let classNames = $this.parents('[class*="has-"]')[0].className.split(/\s+/);

    // go through the class names, find "has-"
    for (let i = 0; i < classNames.length; ++i) {
      if (classNames[i].match('has-')) {
        $('#select2-drop').addClass(classNames[i]);
      }
    }
  }
});

// DO NOT USE THIS IN PRODUCTION...DEMO PURPOSES ONLY
setInterval(() => {
  let indicators = $('.loading-indicator');
  for (let i = 0; i < indicators.length; i++) {
    $(indicators[i]).find('.loading-bullet')
      .velocity('transition.slideRightIn', { stagger: 250 })
      .delay(750)
      .velocity({ opacity: 0 }, 500);
  }
}, 2000);

let data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      fillColor: 'rgba(0,154,87,0.5)',
      strokeColor: 'rgba(0,154,87,0.8)',
      highlightFill: 'rgba(0,154,87,0.75)',
      highlightStroke: 'rgba(0,154,87,1)',
      data: [65, 59, 80, 81, 56, 55, 40]
    },
    {
      label: 'My Second dataset',
      fillColor: 'rgba(0,147,232,0.5)',
      strokeColor: 'rgba(0,147,232,0.8)',
      highlightFill: 'rgba(0,147,232,0.75)',
      highlightStroke: 'rgba(0,147,232,1)',
      data: [28, 48, 40, 19, 86, 27, 90]
    },
    {
      label: 'My Third dataset',
      fillColor: 'rgba(212,208,8,0.5)',
      strokeColor: 'rgba(212,208,8,0.8)',
      highlightFill: 'rgba(212,208,8,0.75)',
      highlightStroke: 'rgba(212,208,8,1)',
      data: [18, 98, 19, 55, 20, 34, 70]
    }
  ]
};

let $chart1 = $('#guideChart1');
if ($chart1[0]) {
  let ctx = $chart1[0].getContext('2d');
  /* eslint new-cap: 0 */
  new Chart(ctx).Bar(data, {
    responsive: true,
    maintainAspectRatio: false
  });
}
