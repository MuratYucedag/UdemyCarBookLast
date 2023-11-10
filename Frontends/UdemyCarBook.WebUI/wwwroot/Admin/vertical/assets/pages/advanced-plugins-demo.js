/*
 Template Name: Xacton - Admin & Dashboard Template
 Author: Myra Studio
 File: Advanced Plugins
*/


// Autonumeric
jQuery(function($) {
  $('.autonumber').autoNumeric('init');
});


//Bootstrap-MaxLength
$('input#defaultconfig').maxlength({
  warningClass: "badge badge-success",
  limitReachedClass: "badge badge-danger"
});


// Max Length
$('input#thresholdconfig').maxlength({
  threshold: 20,
  warningClass: "badge badge-success",
  limitReachedClass: "badge badge-danger"
});

$('input#alloptions').maxlength({
  alwaysShow: true,
  separator: ' out of ',
  preText: 'You typed ',
  postText: ' chars available.',
  validate: true,
  warningClass: "badge badge-success",
  limitReachedClass: "badge badge-danger"
});

$('textarea#textarea').maxlength({
  alwaysShow: true,
  warningClass: "badge badge-success",
  limitReachedClass: "badge badge-danger"
});

$('input#placement').maxlength({
  alwaysShow: true,
  placement: 'top-left',
  warningClass: "badge badge-success",
  limitReachedClass: "badge badge-danger"
});


// Switchery
$('[data-toggle="switchery"]').each(function (idx, obj) {
  new Switchery($(this)[0], $(this).data());
});


// Select2
$('[data-toggle="select2"]').select2();


// Touchspin
var defaultOptions = {};
$('[data-toggle="touchspin"]').each(function (idx, obj) {
    var objOptions = $.extend({}, defaultOptions, $(obj).data());
    $(obj).TouchSpin(objOptions);
}); 


// Color Picker
        
$('#basic-colorpicker').colorpicker();

$('#hexa-colorpicker').colorpicker({
    format: 'auto'
});

$('#component-colorpicker').colorpicker({
    format: null
});

$('#horizontal-colorpicker').colorpicker({
    horizontal: true
});

$('#inline-colorpicker').colorpicker({
    color: '#DD0F20',
    inline: true,
    container: true
});

// Date Range Picker
var defaultOptions = {
  "cancelClass": "btn-light",
  "applyButtonClasses": "btn-success"
};

// date pickers
$('[data-toggle="daterangepicker"]').each(function (idx, obj) {
  var objOptions = $.extend({}, defaultOptions, $(obj).data());
  $(obj).daterangepicker(objOptions);
});

var start = moment().subtract(29, 'days');
var end = moment();
var defaultRangeOptions = {
    startDate: start,
    endDate: end,
    ranges: {
    'Today': [moment(), moment()],
    'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
    'Last 7 Days': [moment().subtract(6, 'days'), moment()],
    'Last 30 Days': [moment().subtract(29, 'days'), moment()],
    'This Month': [moment().startOf('month'), moment().endOf('month')],
    'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
    }
};

$('[data-toggle="date-picker-range"]').each(function (idx, obj) {
    var objOptions = $.extend({}, defaultRangeOptions, $(obj).data());
    var target = objOptions["targetDisplay"];
    //rendering
    $(obj).daterangepicker(objOptions, function(start, end) {
        if (target)
            $(target).html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
    });
});