(function() {
    'use strict';
    $.ctx = '';
    $.colors = function(_0x4bf615, _0x100be3) {
        if (!$.configs.colors && typeof $.configs.colors[_0x4bf615] === 'undefined') {
            return null;
        }
        if (_0x100be3 && typeof $.configs.colors[_0x4bf615][_0x100be3] !== 'undefined') {
            return $.configs.colors[_0x4bf615][_0x100be3];
        } else {
            return $.configs.colors[_0x4bf615];
        }
    };
    $.po = function(_0x57a571, _0x1ca912) {
        var _0x45493c = $.components.getDefaults(_0x57a571);
        return $.extend( !! [], {},
            _0x45493c, _0x1ca912);
    };
    $.configs = $.configs || {};
    $.extend($.configs, {
        '_data': {},
        'get': function() {
            var _0x1e04b7 = this._data,
                _0x5b950f,
                _0x4d6fda = arguments.length;
            if (_0x4d6fda === 0x0) {
                return;
            }
            for (var _0x3748d1 = 0x0; _0x3748d1 < _0x4d6fda; _0x3748d1++) {
                _0x5b950f = arguments[_0x3748d1];
                _0x1e04b7 = _0x1e04b7[_0x5b950f];
            }
            return _0x1e04b7;
        },
        'set': function(_0x4c9289, _0x31a469) {
            if (this.get(_0x4c9289)) {
                console.error('configs:' + _0x4c9289 + '对象已经存在了');
            } else {
                this._data[_0x4c9289] = _0x31a469;
            }
        },
        'extend': function(_0x1f8375, _0x2897da) {
            return $.extend( !! [], this.get(_0x1f8375), _0x2897da);
        }
    });
    $.components = $.components || {};
    $.extend($.components, {
        _components: {},
        register: function(name, configs) {
            this._components[name] = configs;
        },
        init: function(scope, jsContext, name, canExecute) {
            var _this = this,
                _component;
            canExecute = canExecute || true;
            if (typeof name === 'undefined') {
                $.each(this._components, function(name) {
                    _this.init(scope, jsContext, name, canExecute);
                });
            } else {
                scope = scope || document;
                _component = this.get(name);
                if (!_component) {
                    return;
                }
                switch (_component['mode']) {
                    case 'default':
                        return this._initDefault(name, scope, jsContext);
                    case 'init':
                        return this._initComponent(_component, scope, jsContext);
                    case 'api':
                        return this._initApi(_component, scope, canExecute, jsContext);
                    default:
                        this._initApi(_component, scope, canExecute, jsContext);
                        this._initComponent(_component, scope, jsContext);
                        return;
                }
            }
        },
        _initDefault: function(_0x161cf9, _0x3aaede, _0x8a09e7) {
            var _0x37aed2 = _0x8a09e7 ? _0x8a09e7['$'] : $,
                _0x5cec98;
            if (!_0x37aed2['fn'][_0x161cf9]) {
                return;
            }
            _0x5cec98 = this.getDefaults(_0x161cf9);
            $('[data-plugin=' + _0x161cf9 + ']', _0x3aaede)['each'](function() {
                var _0xdb893b = _0x37aed2(this),
                    _0x32d508 = $.extend( !! [], {},
                        _0x5cec98, _0xdb893b['data']());
                _0xdb893b[_0x161cf9](_0x32d508);
            });
        },
        _initComponent: function(_0x13681b, _0x2c2a66, _0x9982e8) {
            if ($['isFunction'](_0x13681b.init)) {
                _0x13681b.init['call'](_0x13681b, _0x2c2a66, _0x9982e8);
            }
        },
        '_initApi': function(_0x3b2481, _0x7944b2, _0x39decd, _0x21c229) {
            if (_0x39decd && $['isFunction'](_0x3b2481['api'])) {
                _0x3b2481['api']['call'](_0x3b2481, _0x7944b2, _0x21c229);
            }
        },
        'getDefaults': function(_0x33989a) {
            var _0x368d42 = this.get(_0x33989a);
            return _0x368d42 && typeof _0x368d42['defaults'] !== 'undefined' ? _0x368d42['defaults'] : {};
        },
        'get': function(name) {
            if (typeof this._components[name] !== 'undefined') {
                return this._components[name];
            } else {
                console.error('component:' + name + ' 脚本文件没有注册任何信息！');
                return undefined;
            }
        }
    });
    $['storage'] = $['storage'] || {};
    $.extend($['storage'], {
        'set': function(_0x5a08ce, _0x4dc982, _0x4ef935) {
            var _0x207392, _0x39d3ae;
            if (!localStorage) {
                console.error('该浏览器不支持localStorage对象');
            }
            if (!_0x5a08ce || !_0x4dc982) {
                return null;
            }
            if (!_0x4ef935 || isNaN(_0x4ef935)) {
                _0x207392 = null;
            } else {
                _0x207392 = new Date() - 0x1 + _0x4ef935 * 0x3e8 * 0x3c;
            }
            _0x39d3ae = {
                'val': _0x4dc982,
                'exp': _0x207392
            };
            if (typeof _0x4dc982 === 'object') {
                _0x39d3ae = JSON['stringify'](_0x39d3ae);
            }
            localStorage['setItem'](_0x5a08ce, _0x39d3ae);
        },
        'get': function(_0x436e5b) {
            var _0x331849, _0x368d50, _0x8190d7;
            if (!localStorage) {
                console.error('该浏览器不支持localStorage对象');
            }
            _0x331849 = localStorage['getItem'](_0x436e5b);
            if (!_0x331849) {
                return null;
            }
            if (typeof _0x331849 === 'string') {
                _0x331849 = JSON['parse'](_0x331849);
            }
            _0x368d50 = new Date() - 0x1;
            _0x8190d7 = _0x331849['exp'];
            if (_0x8190d7 && _0x368d50 > _0x8190d7) {
                this['remove'](_0x436e5b);
                return null;
            }
            return _0x331849['val'];
        },
        'remove': function(_0x1877f7) {
            if (!localStorage) {
                console.error('该浏览器不支持localStorage对象');
            }
            localStorage['removeItem'](_0x1877f7);
        }
    });
    $['sessionStorage'] = $['sessionStorage'] || {};
    $.extend($['sessionStorage'], {
        'set': function(_0x35eaea, _0x43266e) {
            if (!sessionStorage) {
                console.error('该浏览器不支持sessionStorage对象');
            }
            if (!_0x35eaea || !_0x43266e) {
                return null;
            }
            if (typeof _0x43266e === 'object') {
                _0x43266e = JSON['stringify'](_0x43266e);
            }
            sessionStorage['setItem'](_0x35eaea, _0x43266e);
        },
        'get': function(_0x999016) {
            var _0x370584;
            if (!sessionStorage) {
                console.error('该浏览器不支持sessionStorage对象');
            }
            _0x370584 = sessionStorage['getItem'](_0x999016);
            if (!_0x370584) {
                return null;
            }
            if (typeof _0x370584 === 'string') {
                _0x370584 = JSON['parse'](_0x370584);
            }
            return _0x370584;
        },
        'remove': function(_0x2f7749) {
            if (!sessionStorage) {
                console.error('该浏览器不支持sessionStorage对象');
            }
            sessionStorage['removeItem'](_0x2f7749);
        }
    });
    $['site'] = $['site'] || {};
    function _0x474657(_0x5c419d, _0x304139, _0xd4a9f1, _0x56f049) {
        var _0x3d1bf3 = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            _0x167a6f = /([A-Z])/g;
        if (_0xd4a9f1 === undefined && _0x5c419d['nodeType'] === 0x1) {
            var _0x306cbb = 'data-' + _0x304139['replace'](_0x167a6f, '-$1')['toLowerCase']();
            _0xd4a9f1 = _0x5c419d['getAttribute'](_0x306cbb);
            if (typeof _0xd4a9f1 === 'string') {
                try {
                    _0xd4a9f1 = _0xd4a9f1 === 'true' ? !![] : _0xd4a9f1 === 'false' ? ![] : _0xd4a9f1 === 'null' ? null: +_0xd4a9f1 + '' === _0xd4a9f1 ? +_0xd4a9f1: _0x3d1bf3['test'](_0xd4a9f1) ? $['parseJSON'](_0xd4a9f1) : _0xd4a9f1;
                } catch(_0x4245bc) {}
                _0x56f049['data'](_0x5c419d, _0x304139, _0xd4a9f1);
            } else {
                _0xd4a9f1 = undefined;
            }
        }
        return _0xd4a9f1;
    }
    $['fn'].extend({
        'data': function(_0x5dd2a9, _0x1de781, _0x49d5ef) {
            var _0x1599d9, _0x9c58c1, _0xbab297, _0x2e3edd = this[0x0],
                _0x2e09ca = _0x2e3edd && _0x2e3edd['attributes'];
            if (_0x5dd2a9 === undefined || $['isFunction'](_0x5dd2a9)) {
                _0x49d5ef = _0x5dd2a9 || $;
                if (this.length) {
                    _0xbab297 = _0x49d5ef['data'](_0x2e3edd);
                    if (_0x2e3edd['nodeType'] === 0x1 && !_0x49d5ef._data(_0x2e3edd, 'parsedAttrs')) {
                        _0x1599d9 = _0x2e09ca.length;
                        while (_0x1599d9--) {
                            if (_0x2e09ca[_0x1599d9]) {
                                _0x9c58c1 = _0x2e09ca[_0x1599d9]['name'];
                                if (_0x9c58c1['indexOf']('data-') === 0x0) {
                                    _0x9c58c1 = _0x49d5ef['camelCase'](_0x9c58c1['slice'](0x5));
                                    _0x474657(_0x2e3edd, _0x9c58c1, _0xbab297[_0x9c58c1], _0x49d5ef);
                                }
                            }
                        }
                        _0x49d5ef._data(_0x2e3edd, 'parsedAttrs', !![]);
                    }
                }
                return _0xbab297;
            }
            if ($['isFunction'](_0x1de781) && _0x1de781['fn']['jquery']) {
                return _0x2e3edd ? _0x474657(_0x2e3edd, _0x5dd2a9, _0x1de781['data'](_0x2e3edd, _0x5dd2a9), _0x1de781) : undefined;
            }
            if (typeof _0x5dd2a9 === 'object' && typeof _0x1de781 != "undefined") {
                return this['each'](function() {
                    _0x1de781['data'](this, _0x5dd2a9);
                });
            }
            _0x49d5ef = _0x49d5ef || $;
            return arguments.length > 0x1 ? this['each'](function() {
                _0x49d5ef['data'](this, _0x5dd2a9, _0x1de781);
            }) : _0x2e3edd ? _0x474657(_0x2e3edd, _0x5dd2a9, _0x49d5ef['data'](_0x2e3edd, _0x5dd2a9), _0x49d5ef) : undefined;
        }
    });
} ());
