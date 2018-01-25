(function() {
    'use strict';
    $.components.register('isotope', {
        'mode': 'init',
        'defaults': {},
        'init': function(scope) {
            if (typeof $.fn['isotope'] === 'undefined') {
                return;
            }
            var _isotope = $.components.getDefaults('isotope');
            var register = function() {
                $('[data-plugin="isotope"]', scope).each(function() {
                    var _this = $(this),
                        _config = $.extend(true, {}, _this, _this.data());
                    _this.isotope(_config);
                });
            };
            if (scope !== document) {
                register();
            } else {
                $(window).on('load', function() {
                    register();
                });
            }
        }
    });
}());
