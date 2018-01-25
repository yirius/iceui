(function() {
    'use strict';
    $.components.register('rating', {
        'mode': 'init',
        'defaults': {
            'targetKeep': !! [],
            'icon': 'font',
            'starType': 'i',
            'starOff': 'icon wb-star',
            'starOn': 'icon wb-star orange-600',
            'cancelOff': 'icon wb-minus-circle',
            'cancelOn': 'icon wb-minus-circle orange-600',
            'starHalf': 'icon wb-star-half orange-500',
            'cancelHint': '取消评分',
            'hints': ['很差', '差', '一般', '好', '非常好']
        },
        'init': function(scope) {
            if (!$.fn['raty']) {
                return;
            }
            var _default = this.defaults;
            $('[data-plugin="rating"]', scope).each(function() {
                var _this = $(this);
                var _config = $.extend( true, {}, _default, _this.data());
                if (_config['hints'] && typeof _config['hints'] === 'string') {
                    _config['hints'] = _config['hints'].split(',');
                }
                _this.raty(_config);
            });
        }
    });
}());
