(function() {
    'use strict';
    $.components.register('matchHeight', {
        'mode': 'init',
        'defaults': {},
        'init': function(scope) {
            if (typeof $.fn['matchHeight'] === 'undefined') {
                return;
            }
            var _default = $.components.getDefaults('matchHeight');
            $('[data-plugin="matchHeight"]', scope).each(function() {
                var _this = $(this),
                    _config = $.extend(true, {}, _default, _this.data()),
                    _selector = _this.data('matchSelector');
                if (_selector) {
                    _this.find(_selector).matchHeight(_config);
                } else {
                    _this.children().matchHeight(_config);
                }
            });
        }
    });
}());
