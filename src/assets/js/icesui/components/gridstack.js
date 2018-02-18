/**
 * Created by yangyuance1 on 2017/11/17.
 */
(function() {
    'use strict';
    $.components.register('gridstack', {
        'mode': 'init',
        'defaults': {
            'cellHeight': 80,
            'verticalMargin': 20
        },
        'init': function(scope) {
            if (!$.fn['gridstack']) {
                return;
            }
            var _default = $.components.getDefaults('gridstack');
            $('[data-plugin="gridstack"]', scope).each(function() {
                var _config = $.extend(true, {}, _default, $(this).data());
                $(this).gridstack(_config);
            });
        }
    });
}());
