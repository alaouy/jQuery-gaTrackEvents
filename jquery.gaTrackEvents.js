/**
 * @overview jquery.gaTrackEvents.js - Lightweight jQuery plugin to quickly tag Google Universal Analytic events through a data attribute via the HTML markup.
 * @author Mustapha Alaouy
 * @license MIT
 */


(function($) {

  $.fn.gaTrackEvents = function(options) {

    if (!this.length) { return this; }

    var opts = $.extend(true, {}, $.fn.gaTrackEvents.defaults, options);

    this.each(function() {
      $(this).bind(opts.event, function(e){
        e.preventDefault();

        var $this = $(this);
        var url = $this.attr('href');
        var event_values = $this.attr("data-ga-click").split(",");
        var category = (typeof event_values[0] === 'string') ? event_values[0] : opts.category;
        var action   = (typeof event_values[1]   === 'string') ? event_values[1]   : opts.action;
        var label    = (typeof event_values[2]    === 'string') ? event_values[2]    : opts.label;
        var value    = (typeof event_values[3]    === 'string') ? event_values[3]    : opts.value;

        if(value>0)
          ga('send', 'event', category, action, label, value);
        else
          ga('send', 'event', category, action, label);

        if(opts.linkOut && typeof url === 'string'){
          document.location = url;
        }

        if(typeof opts.callback === 'function'){
          opts.callback($this);
        }
      });
    });

    return this;
  };

  // default options
  $.fn.gaTrackEvents.defaults = {
    event: 'click',
    linkOut:   true,
    callback:  null,
    category: 'General',
    action:   'Click',
    label:    'Unknown',
    value:    0
  };

})(jQuery);

$(document).ready(function() {
  $('[data-ga-click]').gaTrackEvents();
});

