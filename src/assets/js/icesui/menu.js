(function(_0x21154d, _0x47ed28, _0x3fb40c) {
    'use strict';
    _0x3fb40c['site']['menu'] = {
        'speed': 0xfa,
        'accordion': !![],
        'init': function() {
            var _0x134a01 = this['$siteMenubar'] = _0x3fb40c('#admui-navTabs\x20.site-menu');
            if (!_0x134a01['length']) {
                return;
            }
            this['_bind']();
        },
        '_bind': function() {
            var _0x17f435 = this,
                _0x4c8496 = _0x3fb40c('body'),
                _0xd9ff84 = this['$siteMenubar'];
            _0xd9ff84['on']('mouseenter.site.menu', '.site-menu-item',
                function() {
                    var _0x59c4d6 = _0x3fb40c(this),
                        _0x54580d = _0x4c8496['hasClass']('site-menubar-fold');
                    if (_0x54580d === !![] && _0x59c4d6['is']('.has-sub') && _0x59c4d6['parent']('.site-menu')['length']) {
                        _0x17f435['position'](_0x59c4d6, _0x59c4d6['children']('.site-menu-sub'));
                    }
                    _0x59c4d6['addClass']('hover');
                })['on']('mouseleave.site.menu', '.site-menu-item',
                function() {
                    var _0x559860 = _0x3fb40c(this),
                        _0x34f280 = _0x4c8496['hasClass']('site-menubar-fold');
                    if (_0x34f280 === !![] && _0x559860['is']('.has-sub') && _0x559860['parent']('.site-menu')['length']) {
                        _0x559860['children']('.site-menu-sub')['css']('max-height', '');
                    }
                    _0x559860['removeClass']('hover');
                })['on']('deactive.site.menu', '.site-menu-item.active',
                function() {
                    _0x3fb40c(this)['removeClass']('active');
                })['on']('active.site.menu', '.site-menu-item',
                function() {
                    _0x3fb40c(this)['addClass']('active');
                })['on']('open.site.menu', '.site-menu-item',
                function(_0x82afb4) {
                    var _0x128b39 = _0x3fb40c(this);
                    _0x17f435['_expand'](_0x128b39,
                        function() {
                            _0x128b39['addClass']('open');
                        });
                    if (_0x17f435['accordion'] && _0x128b39['closest']('li.has-sub')['length'] <= 0x1) {
                        _0x128b39['siblings']('.open')['trigger']('close.site.menu');
                    }
                    _0x82afb4['stopPropagation']();
                })['on']('close.site.menu', '.site-menu-item.open',
                function(_0x3bb27a) {
                    var _0x369470 = _0x3fb40c(this);
                    _0x17f435['_collapse'](_0x369470,
                        function() {
                            _0x369470['removeClass']('open');
                        });
                    _0x3bb27a['stopPropagation']();
                })['on']('click.site.menu ', '.site-menu-item > a',
                function() {
                    var _0x191daf = _0x3fb40c(this),
                        _0x5d09c8 = _0x191daf['parent']();
                    if (_0x5d09c8['is']('.has-sub')) {
                        if (_0x5d09c8['is']('.open')) {
                            _0x5d09c8['trigger']('close.site.menu');
                        } else {
                            _0x5d09c8['trigger']('open.site.menu');
                        }
                    } else {
                        _0x191daf['closest']('li')['siblings']('.open')['trigger']('close.site.menu');
                        _0x191daf['closest']('li.has-sub')['siblings']('.open')['trigger']('close.site.menu');
                        _0x191daf['parents']('div.tab-pane')['siblings']()['find']('li.open')['trigger']('close.site.menu');
                        _0xd9ff84['find']('li.active')['trigger']('deactive.site.menu');
                        _0x5d09c8['trigger']('active.site.menu');
                    }
                })['on']('touchend.site.menu', '>\x20.site-menu-item\x20>\x20a',
                function() {
                    var _0x402d65 = _0x3fb40c(this)['parent']('.site-menu-item'),
                        _0x501713 = _0x4c8496['hasClass']('site-menubar-fold');
                    if (!_0x501713) {
                        return;
                    }
                    if (_0x402d65['is']('.has-sub') && _0x402d65['parent']('.site-menu')['length']) {
                        _0x402d65['siblings']('.hover')['removeClass']('hover');
                        if (_0x402d65['is']('.hover')) {
                            _0x402d65['removeClass']('hover');
                        } else {
                            _0x402d65['addClass']('hover');
                        }
                    }
                })['on']('scroll.site.menu', '.site-menu-sub',
                function(_0x1654e2) {
                    _0x1654e2['stopPropagation']();
                });
        },
        '_collapse': function(_0x57e752, _0x5a5312) {
            var _0xa352be = this;
            _0x57e752['children']('.site-menu-sub')['slideUp'](_0xa352be['speed'],
                function() {
                    if (_0x5a5312) {
                        _0x5a5312();
                    }
                    _0xa352be['$siteMenubar']['trigger']('collapsed.site.menu');
                });
        },
        '_expand': function(_0x15201b, _0x4525d0) {
            var _0x5f5c28 = this;
            _0x15201b['children']('.site-menu-sub')['slideDown'](_0x5f5c28['speed'],
                function() {
                    if (_0x4525d0) {
                        _0x4525d0();
                    }
                    _0x5f5c28['$siteMenubar']['trigger']('expanded.site.menu');
                });
        },
        'refresh': function() {
            var _0x42dc75 = this['$siteMenubar'];
            _0x42dc75['find']('li.open')['trigger']('close.site.menu');
            _0x42dc75['find']('li.active')['trigger']('deactive.site.menu');
        },
        'position': function(_0x41bf9e, _0x4cf657) {
            var _0xacf0ce = _0x41bf9e['position']()['top'],
                _0x4e58a5 = _0x3fb40c('#admui-navTabs')['outerHeight'](),
                _0x353a30 = _0x41bf9e['find']('> a')['outerHeight']();
            _0x4cf657['removeClass']('site-menu-sub-up')['css']('max-height', '');
            if (_0xacf0ce > _0x4e58a5 / 0x2) {
                _0x4cf657['addClass']('site-menu-sub-up');
                if (_0x3fb40c['site']['menubar']['foldAlt']) {
                    _0xacf0ce = _0xacf0ce - _0x353a30;
                }
                _0x4cf657['css']('max-height', _0xacf0ce + _0x353a30);
            } else {
                if (_0x3fb40c['site']['menubar']['foldAlt']) {
                    _0xacf0ce = _0xacf0ce + _0x353a30;
                }
                _0x4cf657['removeClass']('site-menu-sub-up');
                _0x4cf657['css']('max-height', _0x4e58a5 - _0xacf0ce);
            }
        }
    };
} (window, document, jQuery));
