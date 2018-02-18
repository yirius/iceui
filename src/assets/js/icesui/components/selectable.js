(function() {
    'use strict';
    $.components.register('selectable', {
        'mode': 'init',
        'defaults': {
            'allSelector': '.selectable-all',
            'itemSelector': '.selectable-item',
            'rowSelector': 'tr',
            'rowSelectable': ![],
            'rowActiveClass': 'active',
            'onChange': null
        },
        'init': function(scope) {
            if (!$.fn['asSelectable']) {
                return;
            }
            var _default = $.components.getDefaults('selectable');
            $('[data-plugin="selectable"], [data-selectable="selectable"]', scope).each(function() {
                var _config = $.extend({}, _default, $(this).data());
                $(this).asSelectable(_config);
            });
        }
    });
}());
