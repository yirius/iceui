/**
 * Created by yangyuance1 on 2017/11/17.
 */
(function() {
    'use strict';
    $.components.register('card', {
        'mode': 'init',
        'defaults': {},
        'init': function(scope) {
            if (!$.fn['card']) {
                return;
            }
            var _default = $components.getDefaults('card');
            $('[data-plugin="card"]', scope).each(function() {
                var _config = $.extend({}, _default, $(this).data());
                if (_config['target']) {
                    _config['container'] = $(_config['target']);
                }
                $(this).card(_config);
            });
        }
    });
}());
