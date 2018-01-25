/**
 * Created by yangyuance1 on 2017/11/17.
 */
(function() {
    'use strict';
    $.components.register('markdown', {
        'mode': 'init',
        'defaults': {
            'autofocus': ![],
            'savable': ![],
            'language': 'zh'
        },
        'init': function(scope) {
            if (!$.fn['markdown']) {
                return;
            }
            var _default = this.defaults;
            $('textarea[data-plugin="markdown"]', scope).each(function() {
                var _config = $.extend(true, {}, _default, $(this)['data']());
                $(this).markdown(_config);
            });
        }
    });
}());
