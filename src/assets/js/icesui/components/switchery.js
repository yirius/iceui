(function() {
    'use strict';
    $.components.register('switchery', {
        'mode': 'init',
        'defaults': {
            'color': $.colors('purple', 0x258)
        },
        'init': function(scope) {
            if (typeof Switchery === 'undefined') {
                return;
            }
            var _default = $.components.getDefaults('switchery');
            $('[data-plugin="switchery"]', scope).each(function() {
                var _config = $.extend({}, _default, $(this).data());
                new Switchery(this, _config);
            });
        }
    });
}());
