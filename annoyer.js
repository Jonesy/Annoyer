(function($) {
  var defaults = {
    msg: "BLARG!"
  };

  function Annoyer(el, options) {
    this.$el = $(el);
    this.settings = $.extend(defaults, options);
    this.init();
  }

  Annoyer.prototype = {
    init: function() {
      this.$el.on('keyup', $.proxy(this.annoy, this));
    },
    annoy: function() {
      alert(this.settings.msg);
    }
  };

  $.annoyer = Annoyer;

  $.fn.annoyer = function(options) {
    return this.each(function() {
      $(this).data('annoyer', new Annoyer(this, options));
    });
  };
}(window.jQuery));