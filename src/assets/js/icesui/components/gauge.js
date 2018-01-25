(function() {
    'use strict';
    $.components.register('gauge', {
        'mode': 'init',
        'defaults': {
            'lines': 0xc,
            'angle': 0.12,
            'lineWidth': 0.4,
            'pointer': {
                'length': 0.68,
                'strokeWidth': 0.03,
                'color': $.colors('blue-grey', 0x190)
            },
            'limitMax': !! [],
            'colorStart': $.colors('blue-grey', 0xc8),
            'colorStop': $.colors('blue-grey', 0xc8),
            'strokeColor': $.colors('purple', 0x1f4),
            'generateGradient': true
        },
        'init': function(scope) {
            if (typeof Gauge === undefined) {
                return;
            }
            var _default = $.components.getDefaults('gauge');
            $('[data-plugin="gauge"]', scope).each(function() {
                var _this = $(this),
                    _data = _this.data(),
                    _label = _this.find('.gauge-label'),
                    _canvas = _this.find('canvas');
                _data = $.extend(true, {}, _default, _data);
                if (_canvas.length === 0) {
                    return;
                }
                var gauge = new Gauge(_canvas[0]).setOptions(_data);
                _this.data('gauge', gauge);
                gauge.animationSpeed = 0x32;
                gauge.maxValue = _this.data('max-value');
                gauge.set(_this.data('value'));
                if (_label['length'] > 0) {
                    gauge.setTextField(_label[0]);
                }
            });
        }
    });
    $.components.register('donut', {
        'mode': 'init',
        'defaults': {
            'lines': 0xc,
            'angle': 0.3,
            'lineWidth': 0.08,
            'pointer': {
                'length': 0.9,
                'strokeWidth': 0.035,
                'color': $.colors('blue-grey', 0x190)
            },
            'limitMax': ![],
            'colorStart': $.colors('blue-grey', 0xc8),
            'colorStop': $.colors('blue-grey', 0xc8),
            'strokeColor': $.colors('purple', 0x1f4),
            'generateGradient': !! []
        },
        'init': function(scope) {
            if (typeof Gauge === undefined) {
                return;
            }
            var _default = $.components.getDefaults('donut');
            $('[data-plugin="donut"]', scope).each(function() {
                var _this = $(this),
                    _data = _this.data(),
                    _label = _this.find('.donut-label'),
                    _canvas = _this.find('canvas');
                _data = $.extend(true, {}, _default, _data);
                if (_canvas.length === 0) {
                    return;
                }
                var donut = new Donut(_canvas[0]).setOptions(_data);
                _this.data('donut', donut);
                donut.animationSpeed = 0x32;
                donut.maxValue = _this.data('max-value');
                donut.set(_this.data('value'));
                if (_label.length > 0) {
                    donut.setTextField(_label[0]);
                }
            });
        }
    });
}());
