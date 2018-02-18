(function() {
    'use strict';
    $.components.register('peityBar', {
        'mode': 'init',
        'defaults': {
            'delimiter': ',',
            'fill': [$.colors('purple', 0x190)],
            'height': 0x12,
            'max': null,
            'min': 0x0,
            'padding': 0.1,
            'width': 0x2c
        },
        'init': function(_0x3ef5d7) {
            if (!$.fn['peity']) {
                return;
            }
            var _default = $.components.getDefaults('peityBar');
            $('[data-plugin="peityBar"]', _0x3ef5d7).each(function() {
                var _this = $(this),
                    _data = _this.data();
                if (_data['skin']) {
                    if ($.colors(_data['skin'])) {
                        var _0x1a925a = $.colors(_data['skin']);
                        _default['fill'] = [_0x1a925a[0x190]];
                    }
                }
                _data = $.extend( true, {}, _default, _data);
                _this.peity('bar', _data);
            });
        }
    });
    $.components.register('peityDonut', {
        'mode': 'init',
        'defaults': {
            'delimiter': null,
            'fill': [$.colors('purple', 0x2bc), $.colors('purple', 0x190), $.colors('purple', 0xc8)],
            'height': null,
            'innerRadius': null,
            'radius': 0xb,
            'width': null
        },
        'init': function(scope) {
            if (!$.fn['peity']) {
                return;
            }
            var _default = $.components.getDefaults('peityDonut');
            $('[data-plugin="peityDonut"]', scope).each(function() {
                var _this = $(this),
                    _data = _this.data();
                if (_data['skin']) {
                    if ($.colors(_data['skin'])) {
                        var _skin = $.colors(_data['skin']);
                        _default['fill'] = [_skin[0x2bc], _skin[0x190], _skin[0xc8]];
                    }
                }
                _data = $.extend( true, {}, _default, _data);
                _this.peity('donut', _data);
            });
        }
    });
    $.components.register('peityLine', {
        'mode': 'init',
        'defaults': {
            'delimiter': ',',
            'fill': [$.colors('purple', 0xc8)],
            'height': 0x12,
            'max': null,
            'min': 0x0,
            'stroke': $.colors('purple', 0x258),
            'strokeWidth': 0x1,
            'width': 0x2c
        },
        'init': function(_0x3bc5be) {
            if (!$.fn['peity']) {
                return;
            }
            var _default = $.components.getDefaults('peityLine');
            $('[data-plugin="peityLine"]', _0x3bc5be).each(function() {
                var _this = $(this),
                    _data = _this.data();
                if (_data['skin']) {
                    if ($.colors(_data['skin'])) {
                        var _skin = $.colors(_data['skin']);
                        _default['fill'] = [_skin[0xc8]];
                        _default['stroke'] = _skin[0x258];
                    }
                }
                _data = $.extend( true, {}, _default, _data);
                _this.peity('line', _data);
            });
        }
    });
    $.components.register('peityPie', {
        'mode': 'init',
        'defaults': {
            'delimiter': null,
            'fill': [$.colors('purple', 0x2bc), $.colors('purple', 0x190), $.colors('purple', 0xc8)],
            'height': null,
            'radius': 0xb,
            'width': null
        },
        'init': function(_0x6460ed) {
            if (!$.fn['peity']) {
                return;
            }
            var _default = $.components.getDefaults('peityPie');
            $('[data-plugin="peityPie"]', _0x6460ed).each(function() {
                var _this = $(this),
                    _data = _this.data();
                if (_data['skin']) {
                    if ($.colors(_data['skin'])) {
                        var _skin = $.colors(_data['skin']);
                        _default['fill'] = [_skin[0x2bc], _skin[0x190], _skin[0xc8]];
                    }
                }
                _data = $.extend( true, {}, _default, _data);
                _this.peity('pie', _data);
            });
        }
    });
}());
