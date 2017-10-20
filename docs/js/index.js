import $ from 'jquery';
import 'holderjs';

import '../scss/docs.scss';
import 'animate.css/animate.css';

$('[data-toggle="popover"]').popover({
  html: true,
});

$('[data-toggle="tooltip"]').tooltip();

$('.docs-example').each(function () {
  const btn = `
    <hr class="divider-lg"/>
    <div class="btn-toolbar">
      <button class="btn btn-ghost btn-sm" role="button" data-toggle="code">
        View Code <i class="icon icon-code"></i>
      </button>
    </div>`;

  $(this).append($(btn));
});

$('[data-toggle="code"]').click(function (e) {
  e.preventDefault();

  const target = $(this).parents('.docs-example').next('.language-markup');

  if (target.is(':visible')) {
    target.velocity('slideUp', { duration: 200 });
  } else {
    target.velocity('fadeIn', {
      duration: 300,
      display: 'block',
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
  },
});

$('.dropdown-menu a[data-toggle="tab"]').click(function (e) {
  e.stopPropagation();
  $(this).tab('show');
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
