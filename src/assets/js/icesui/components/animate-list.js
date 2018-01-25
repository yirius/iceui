/**
 * Created by yangyuance1 on 2017/11/17.
 */
(function(window, document, $) {
    'use strict';
    $.components.register('animate-list', {
        'mode': 'init',
        'defaults': {
            'child': '.panel',
            'duration': 0xfa,
            'delay': 0x32,
            'animate': 'scale-up',
            'fill': 'backwards'
        },
        'init': function() {
            var _0x4ce1e7 = this;
            $('[data-plugin=animateList]')['each'](function() {
                var _0x8b6230 = $(this),
                    _0x105416 = $['extend']({}, _0x4ce1e7['defaults'], _0x8b6230['data'](), !! []);
                var _0x511851 = function(_0x4ae2cf, _0x3b1797) {
                    this['options'] = _0x3b1797;
                    this['$children'] = _0x4ae2cf['find'](_0x3b1797['child']);
                    this['$children']['addClass']('animation-' + _0x3b1797['animate']);
                    this['$children']['css']('animation-fill-mode', _0x3b1797['fill']);
                    this['$children']['css']('animation-duration', _0x3b1797['duration'] + 'ms');
                    var _0x14340d = 0x0,
                        _0x47ec1b = this;
                    this['$children']['each'](function() {
                        $(this)['css']('animation-delay', _0x14340d + 'ms');
                        _0x14340d += _0x47ec1b['options']['delay'];
                    });
                };
                _0x511851['prototype'] = {
                    'run': function(_0x1b2eb0) {
                        var _0x5207e3 = this;
                        this['$children']['removeClass']('animation-' + this['options']['animate']);
                        if (typeof _0x1b2eb0 !== 'undefined') {
                            this['options']['animate'] = _0x1b2eb0;
                        }
                        setTimeout(function() {
                            _0x5207e3['$children']['addClass']('animation-' + _0x5207e3['options']['animate']);
                        }, 0x0);
                    }
                };
                _0x8b6230['data']('animateList', new _0x511851(_0x8b6230, _0x105416));
            });
        }
    });
}(window, document, jQuery));
