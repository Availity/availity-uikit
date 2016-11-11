import $ from 'jquery';
import Chart from 'chart.js';

import '../less/docs.less';
import 'animate.css/animate.css';

$('[data-toggle="popover"]').popover({
  html: true
});

$('[data-toggle="tooltip"]').tooltip();

$('.docs-example').each(function() {

  const btn = `
    <hr class="divider-lg"/>
    <div class="btn-toolbar">
      <button class="btn btn-ghost btn-sm" data-toggle="code">
        View Code <i class="icon icon-code"></i>
      </button>
    </div>`;

  $(this).append($(btn));

});

$('[data-toggle="code"]').click(function(e) {

  e.preventDefault();

  const target = $(this).parents('.docs-example').next('.language-markup');

  if (target.is(':visible')) {
    target.velocity('slideUp', { duration: 200 });
  } else {
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
  content() {
    const target = $(this).attr('data-target');
    const $target = $(target);
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

$('#single, #select-multiple').select2({
  placeholder: 'Select a State',
  allowClear: true
}).on('select2-open', function() {

  const $this = $(this);
  if ($this.parents('[class*="has-"]').length) {

    // get all CSS-classes from the element where we found "has-*" and collect them in an array
    const classNames = $this.parents('[class*="has-"]')[0].className.split(/\s+/);

    // go through the class names, find "has-"
    for (let i = 0; i < classNames.length; ++i) {
      if (classNames[i].match('has-')) {
        $('#select2-drop').addClass(classNames[i]);
      }
    }
  }
});

// DO NOT USE THIS IN PRODUCTION. DEMO PURPOSES ONLY.
setInterval(() => {
  const indicators = $('.loading-indicator');
  for (let i = 0; i < indicators.length; i++) {
    $(indicators[i]).find('.loading-bullet')
      .velocity('transition.slideRightIn', { stagger: 250 })
      .delay(750)
      .velocity({ opacity: 0 }, 500);
  }
}, 2000);

const data = {
  labels: ['January', 'February', 'March'],
  datasets: [
    {
      label: 'First',
      backgroundColor: [
        'rgba(0,147,232,0.5)',
        'rgba(0,147,232,0.5)',
        'rgba(0,147,232,0.5)'
      ],
      borderColor: [
        'rgba(0,147,232,0.8)',
        'rgba(0,147,232,0.8)',
        'rgba(0,147,232,0.8)'
      ],
      borderWidth: 1,
      data: [65, 70, 80]
    },
    {
      label: 'Second',
      backgroundColor: [
        'rgba(0,154,87,0.5)',
        'rgba(0,154,87,0.5)',
        'rgba(0,154,87,0.5)'
      ],
      borderColor: [
        'rgba(0,154,87,0.8)',
        'rgba(0,154,87,0.8)',
        'rgba(0,154,87,0.8)'
      ],
      borderWidth: 1,
      data: [85, 80, 75]
    },
    {
      label: 'Third',
      backgroundColor: [
        'rgba(212,208,8,0.5)',
        'rgba(212,208,8,0.5)',
        'rgba(212,208,8,0.5)'
      ],
      borderColor: [
        'rgba(212,208,8,0.8)',
        'rgba(212,208,8,0.8)',
        'rgba(212,208,8,0.8)'
      ],
      borderWidth: 1,
      data: [74, 88, 64]
    }
  ]
};

const $chart1 = $('#guideChart1');
if ($chart1[0]) {

  const ctx = $chart1[0].getContext('2d');

  /* eslint no-new: 0 */
  new Chart(ctx, {
    type: 'bar',
    data,
    options: {
      responsive: true,
      maintainAspectRatio: false
    }
  });

}
