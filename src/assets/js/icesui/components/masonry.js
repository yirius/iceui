(function() {
    'use strict';
    $.components.register('masonry', {
        'mode': 'init',
        'defaults': {
            'itemSelector': '.masonry-item'
        },
        'init': function(scope) {
            if (typeof $.fn['masonry'] === 'undefined') {
                return;
            }
            var _default = $.components.getDefaults('masonry');
            $('[data-plugin="masonry"]', scope).each(function() {
                var _this = $(this),
                    _config = $.extend(true, {}, _default, _this.data());
                _this.masonry(_config);
            });
        }
    });
}());
