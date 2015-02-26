/* jshint browser:true */
/* global Chart */
(function($) {

  // Popovers and tooltips
  $('[data-toggle="popover"]').popover({
    html : true
  });
  $('[data-toggle="tooltip"]').tooltip();

  //filter popover
  $('[data-toggle="filter"]').popover({
    html : true,
    placement : $(this).attr('data-placement'),
    trigger : 'click',
    content: function() {
      var target = $(this).attr('data-target');
      var $target = $(target);
      return $target.html();
    }
  });

  $('.dropdown-menu a[data-toggle="tab"]').click(function (e) {
      e.stopPropagation();
      $(this).tab('show');
  });

  // Datepicker
  $('#datetimepicker6, #datetimepicker7, #datetimepicker8').datetimepicker({
    format: 'MM/DD/YYYY'
  });

  // Select2
  $('.select2, .select2-multiple').select2({
    placeholder: 'Select a State'
  }).on("select2-open", function () {

    var $this = $(this);
    if($this.parents('[class*="has-"]').length) {

    // get all CSS-classes from the element where we found "has-*" and collect them in an array
    var classNames = $this.parents('[class*="has-"]')[0].className.split(/\s+/);

    // go through the class names, find "has-"
    for(var i = 0; i < classNames.length; ++i) {
      if(classNames[i].match("has-")) {
        $('#select2-drop').addClass(classNames[i]);
      }
    }
  }
});

  setInterval(function() {
    var indicators = $('.loading-indicator');
    for (var i = 0; i < indicators.length; i++) {
      $(indicators[i]).find('.loading-bullet')
        .velocity('transition.slideRightIn', { stagger: 250 })
        .delay(750)
        .velocity({ opacity: 0 }, 500);
    }
  }, 2000);

  // Twitter Typeahead
  var substringMatcher = function(strs) {
    return function findMatches(q, cb) {
      var matches;
      var substrRegex;

      matches = [];
      substrRegex = new RegExp(q, 'i');
      $.each(strs, function(i, str) {
        if (substrRegex.test(str)) {
          matches.push({ value: str });
        }
      });
      cb(matches);
    };
  };

  var states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California',
    'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii',
    'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana',
    'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota',
    'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire',
    'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',
    'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island',
    'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
    'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
  ];


  $('.form-group .form-control-suggest').typeahead({
      hint: true,
      highlight: true,
      minLength: 1
    },
    {
      name: 'states',
      displayKey: 'value',
      source: substringMatcher(states)
  });

  var data = {
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

  var $chart1 = $('#guideChart1');
  if($chart1[0]) {
    var ctx = $chart1[0].getContext('2d');
    new Chart(ctx).Bar(data, {
      responsive: true,
      maintainAspectRatio: false
    });
  }

})(jQuery);
