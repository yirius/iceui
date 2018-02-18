(function() {
    'use strict';
    $.components.register('toolbar', {
        'mode': 'init',
        'defaults': {
            'adjustment': 0xf,
            'zIndex': 0x76c
        },
        'init': function(scope) {
            if (!$.fn['toolbar']) {
                return;
            }
            var _default = $.components.getDefaults('toolbar');
            $('[data-plugin="toolbar"]', scope).each(function() {
                var _this = $(this);
                var toolbar = _this.data('toolbar');
                var _config = $.extend( true, {}, _default);
                if (toolbar) {
                    _config['content'] = toolbar;
                }
                _this.toolbar(_config);
            });
        }
    });
}());
