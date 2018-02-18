(function() {
    'use strict';
    $.components.register('nprogress', {
        'mode': 'init',
        'defaults': {
            'minimum': 0.15,
            'trickleRate': 0.07,
            'trickleSpeed': 0x168,
            'showSpinner': false,
            'template': '<div class="bar" role="bar"></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
        },
        'init': function() {
            if (typeof NProgress === 'undefined') {
                return;
            }
            var _default = $.components.getDefaults('nprogress');
            NProgress.configure(_default);
        }
    });
}());
