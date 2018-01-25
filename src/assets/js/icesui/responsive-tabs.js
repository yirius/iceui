(function(_0x37b979, _0x54517d, _0x7f6621) {
    'use strict';
    var _0x47e03f, _0x205a9a = 'responsiveHorizontalTabs',
        _0x125635 = {
            'navSelector': '.nav-tabs',
            'itemSelector': '>li',
            'dropdownSelector': '>.dropdown',
            'dropdownItemSelector': 'li',
            'tabParentSelector': '',
            'tabSelector': '.tab-pane',
            'activeClassName': 'active',
            'noNavClassName': '.no-menu',
            'closeSelector': '.close-tab',
            'closeNav': !![],
            'fnCallback': ''
        };
    _0x47e03f = function(_0x4cf8de, _0x55263d) {
        var _0x4b01c4 = this['$tabs'] = _0x7f6621(_0x4cf8de),
            _0x24271e = this['options'] = _0x7f6621['extend']( !! [], {},
                _0x125635, _0x55263d),
            _0x30e726 = this['$nav'] = _0x4b01c4['find'](_0x24271e['navSelector']),
            _0x40e4d1 = this['$dropdown'] = _0x30e726['find'](_0x24271e['dropdownSelector']);
        this['$items'] = _0x30e726['find'](_0x24271e['itemSelector'])['filter'](function() {
            return ! _0x7f6621(this)['is'](_0x40e4d1);
        });
        this['$dropdownItems'] = _0x40e4d1['find'](_0x24271e['dropdownItemSelector']);
        if (_0x24271e['tabParentSelector'] !== '') {
            this['$tabPanel'] = _0x7f6621(_0x24271e['tabParentSelector'])['find'](_0x24271e['tabSelector']);
        } else {
            this['$tabPanel'] = _0x4b01c4['find'](_0x24271e['tabSelector']);
        }
        this['init']();
    };
    _0x47e03f['prototype'] = {
        'init': function() {
            var _0x2bdda7 = this['itemsLenth'] = this['$items']['length'],
                _0x4f37b6;
            if (_0x2bdda7 === 0x0) {
                throw 'There should be some tags here ';
            }
            if (this['$dropdown']['length'] === 0x0) {
                this['flag'] = !![];
                this['$nav']['append']('<li class="dropdown" role="presentation">' + '<a\x20class=\x22dropdown-toggle\x22\x20data-toggle=\x22dropdown\x22\x20href=\x22#\x22\x20aria-expanded=\x22false\x22>' + '<span\x20class=\x22caret\x22></span>\x20更多</a><ul\x20class=\x22dropdown-menu\x22\x20role=\x22menu\x22></ul></li>');
                this['$dropdown'] = this['$nav']['find'](this['options']['dropdownSelector']);
                this['$dropdown']['css']('opacity', 0x0);
                _0x4f37b6 = this['$dropdown']['width']();
                _0x4f37b6 = _0x4f37b6 === 0x0 ? 0x5a: _0x4f37b6;
                this['$dropdown']['addClass']('hidden')['css']('opacity', 0x1);
            } else {
                _0x4f37b6 = this['$dropdown']['width']();
            }
            this['breakpoints'] = [];
            for (var _0x3caa9d = 0x0; _0x3caa9d < _0x2bdda7 + 0x1; _0x3caa9d++) {
                var _0x32b14a = this['$items']['eq'](_0x3caa9d)['width'](),
                    _0x4ea9aa = 0x0;
                switch (_0x3caa9d) {
                    case 0x0:
                        _0x4ea9aa = _0x32b14a + _0x4f37b6;
                        break;
                    case _0x2bdda7 - 0x1: _0x4ea9aa = this['breakpoints'][_0x3caa9d - 0x1] + _0x32b14a - _0x4f37b6;
                        break;
                    case _0x2bdda7:
                        _0x4ea9aa = this['breakpoints'][_0x3caa9d - 0x1] + _0x4f37b6;
                        break;
                    default:
                        _0x4ea9aa = this['breakpoints'][_0x3caa9d - 0x1] + _0x32b14a;
                }
                this['breakpoints']['push'](_0x4ea9aa);
            }
            if (typeof this['options']['fnCallback'] === 'function') {
                this['options']['fnCallback'](this['$tabs']);
            }
            this['bind']();
            this['layout']();
            if (this['options']['closeNav']) {
                this['close']();
            }
        },
        'layout': function() {
            if (this['breakpoints']['length'] <= 0x0) {
                return;
            }
            var _0x5b55c1 = this['$tabs']['width']() - 0x1e,
                _0x580d56 = 0x0,
                _0x2e7a97 = this,
                _0x2b66d5 = this['options']['activeClassName'],
                _0x155d96 = this['$tabPanel']['filter']('.' + _0x2b66d5)['index'](),
                _0x182bbe = function(_0x1b19db) {
                    var _0x4859f1 = _0x1b19db;
                    if (_0x1b19db === _0x2e7a97['itemsLenth']) {
                        _0x4859f1 = _0x1b19db - 0x1;
                    }
                    for (; _0x4859f1 < _0x2e7a97['itemsLenth']; _0x4859f1++) {
                        if (_0x2e7a97['flag']) {
                            _0x2e7a97['$dropdown']['find']('ul')['append'](_0x2e7a97['$items']['eq'](_0x4859f1)['prop']('outerHTML'));
                        } else {
                            _0x2e7a97['$dropdown']['find']('ul>li' + _0x2e7a97['options']['noNavClassName'] + ':first')['before'](_0x2e7a97['$items']['eq'](_0x4859f1)['prop']('outerHTML'));
                        }
                        _0x2e7a97['$items']['eq'](_0x4859f1)['hide']();
                    }
                },
                _0x46eda7 = function(_0x2354a0) {
                    for (var _0x53d1fc = 0x0; _0x53d1fc < _0x2e7a97['itemsLenth'] + 0x1; _0x53d1fc++) {
                        if (_0x53d1fc < _0x2354a0) {
                            _0x2e7a97['$items']['eq'](_0x53d1fc)['show']();
                        } else {
                            _0x182bbe(_0x2354a0);
                            _0x2e7a97['$dropdown']['find']('ul>li')['show']();
                            break;
                        }
                    }
                    _0x2e7a97['$dropdownItems'] = _0x2e7a97['$dropdown']['find'](_0x2e7a97['options']['dropdownItemSelector']);
                };
            for (; _0x580d56 < this['breakpoints']['length']; _0x580d56++) {
                if (this['breakpoints'][_0x580d56] > _0x5b55c1) {
                    break;
                }
            }
            this['$items']['removeClass'](_0x2b66d5);
            this['$dropdownItems']['removeClass'](_0x2b66d5);
            this['$dropdown']['removeClass'](_0x2b66d5);
            if (_0x580d56 === this['breakpoints']['length']) {
                if (this['flag']) {
                    this['$dropdown']['addClass']('hidden');
                } else {
                    this['$dropdown']['find']('ul>li:not(li' + this['options']['noNavClassName'] + ')')['remove']();
                }
                this['$items']['show']();
                this['$items']['eq'](_0x155d96)['addClass'](_0x2b66d5);
            } else {
                this['$dropdown']['removeClass']('hidden');
                if (this['flag']) {
                    this['$dropdown']['find']('ul>li')['remove']();
                } else {
                    this['$dropdown']['find']('ul>li:not(li' + this['options']['noNavClassName'] + ')')['remove']();
                }
                _0x46eda7(_0x580d56);
                if (_0x155d96 < _0x580d56) {
                    this['$items']['eq'](_0x155d96)['addClass'](_0x2b66d5);
                } else {
                    this['$dropdown']['addClass'](_0x2b66d5);
                    this['$dropdownItems']['eq'](_0x155d96 - _0x580d56)['addClass'](_0x2b66d5);
                }
            }
        },
        'close': function() {
            var _0x2d1d87 = this;
            this['$tabs']['on']('click', this['options']['closeSelector'],
                function(_0x188eb7) {
                    var _0x1e01a7 = _0x7f6621(this),
                        _0x14dc1d = _0x1e01a7['closest']('[data-toggle="tab"]'),
                        _0x4fa0d5 = _0x14dc1d['data']('target'),
                        _0x204330 = _0x14dc1d['parent']('li');
                    if (!_0x4fa0d5) {
                        _0x4fa0d5 = _0x14dc1d['attr']('href');
                        _0x4fa0d5 = _0x4fa0d5 && _0x4fa0d5['replace'](/.*(?=#[^\s]*$)/, '');
                    }
                    if (_0x204330['hasClass']('active')) {
                        var _0x117079 = _0x204330['siblings']()['eq'](0x0)['children']('[data-toggle="tab"]');
                        if (_0x117079['length'] > 0x0) {
                            var _0x3c1247 = _0x117079['tab']()['data']('bs.tab');
                            _0x3c1247['show']();
                        }
                    }
                    var _0xdcc118 = _0x7f6621(_0x4fa0d5);
                    if (_0x188eb7) {
                        _0x188eb7['preventDefault']();
                    }
                    _0xdcc118['trigger'](_0x188eb7 = _0x7f6621['Event']('close.bs.tab'));
                    if (_0x188eb7['isDefaultPrevented']()) {
                        return;
                    }
                    _0xdcc118['removeClass']('in');
                    function _0x22402e() {
                        _0x2d1d87['$dropdown']['find']('ul>li:first')['remove']();
                        if (_0x2d1d87['$dropdown']['find']('ul>li')['length'] === 0x0) {
                            _0x2d1d87['$dropdown']['remove']();
                        }
                    }
                    function _0x53d66f() {
                        _0xdcc118['detach']()['trigger']('closed.bs.tab')['remove']();
                        _0x204330['detach']()['remove']();
                        _0x22402e();
                        _0x2d1d87['init']();
                    }
                    _0x7f6621['support']['transition'] && _0xdcc118['hasClass']('fade') ? _0xdcc118['one']('bsTransitionEnd', _0x53d66f)['emulateTransitionEnd'](0x96) : _0x53d66f();
                });
        },
        'throttle': function(_0x31bc52, _0x55c073) {
            var _0x2597f2 = _0x31bc52,
                _0x5550ff, _0x52fcb0 = !![];
            return function() {
                var _0x3983ca = arguments,
                    _0x257a2b = this;
                if (_0x52fcb0) {
                    _0x2597f2['apply'](_0x257a2b, _0x3983ca);
                    _0x52fcb0 = ![];
                }
                if (_0x5550ff) {
                    return ! [];
                }
                _0x5550ff = setInterval(function() {
                        clearInterval(_0x5550ff);
                        _0x5550ff = null;
                        _0x2597f2['apply'](_0x257a2b, _0x3983ca);
                    },
                    _0x55c073 || 0x1f4);
            };
        },
        'bind': function() {
            var _0x4e2db5 = this;
            _0x7f6621(_0x37b979)['resize'](function() {
                _0x4e2db5['throttle'](function() {
                        _0x4e2db5['layout']();
                    },
                    0x3e8)();
            });
        }
    };
    _0x7f6621['fn'][_0x205a9a] = function(_0x2a639c) {
        if (typeof _0x2a639c === 'string') {
            var _0x2354fa = _0x2a639c,
                _0x134437 = Array['prototype']['slice']['call'](arguments, 0x1);
            if (/^_/ ['test'](_0x2354fa)) {
                console['error']('No such method : ' + _0x2a639c);
            } else {
                return this['each'](function() {
                    var _0x438f38 = _0x7f6621['data'](this, _0x205a9a);
                    if (_0x438f38 && typeof _0x438f38[_0x2354fa] === 'function') {
                        _0x438f38[_0x2354fa]['apply'](_0x438f38, _0x134437);
                    }
                });
            }
        } else {
            return this['each'](function() {
                if (!_0x7f6621['data'](this, _0x205a9a)) {
                    _0x7f6621['data'](this, _0x205a9a, new _0x47e03f(this, _0x2a639c));
                } else {
                    _0x7f6621['data'](this, _0x205a9a)['init']();
                }
            });
        }
    };
} (window, document, jQuery));
