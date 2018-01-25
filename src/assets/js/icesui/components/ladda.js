(function() {
    'use strict';
    $.components.register('ladda', {
        'mode': 'init',
        'defaults': {
            'timeout': 0x7d0
        },
        'init': function() {
            if (typeof Ladda === 'undefined') {
                return;
            }
            var _default = $.components.getDefaults('ladda');
            Ladda.bind('[data-plugin="ladda"]', _default);
        }
    });
    $.components.register('laddaProgress', {
        'mode': 'init',
        'defaults': {},
        'init': function() {
            if (typeof Ladda === 'undefined') {
                return;
            }
            var _default = $.components.getDefaults('laddaProgress'),
                _config = $.extend({}, _default, {
                    'callback': function(callFuncs) {
                        var _minnum = 0;
                        var _interval = setInterval(function() {
                            _minnum = Math.min(_minnum + Math.random() * 0.1, 1);
                            callFuncs.setProgress(_minnum);
                            if (_minnum === 1) {
                                callFuncs.stop();
                                clearInterval(_interval);
                            }
                        }, 0x12c);
                    }
                });
            Ladda.bind('[data-plugin="laddaProgress"]', _config);
        }
    });
}());
