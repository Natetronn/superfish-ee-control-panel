// Generated by CoffeeScript 1.6.1

(function($) {
  var superfishify;
  superfishify = {
    init: function() {
      this.menu = $('#navigationTabs');
      this.top_lis = this.menu.children('.parent');
      this.other_lis = this.menu.find('li').not(this.top_lis);
      this.links = this.menu.find('a');
      this.unbind_ee_handlers();
      return this.init_superfish();
    },
    unbind_ee_handlers: function() {
      this.menu.off('mouseleave');
      this.top_lis.off('mouseenter');
      this.other_lis.off('mouseenter mouseleave');
      return this.links.off('click').filter('[href="#"]').on('click.superfish', false);
    },
    init_superfish: function() {
      return this.menu.superfish({
        hoverClass: 'active',
        cssArrows: false,
        speed: 200,
        onHide: function() {
          return this.hide();
        }
      });
    }
  };
  return $(function() {
    return superfishify.init();
  });
})(jQuery);
