(function(_0x3f95a5, _0x34736c, _0x2d2965) {
    'use strict';
    _0x2d2965['site']['menubar'] = {
        'opened': null,
        'folded': null,
        'top': ![],
        'foldAlt': ![],
        'auto': !![],
        'init': function() {
            var _0x55790f = this,
                _0x1a886f = this['$body'] = _0x2d2965('body'),
                _0x35ade1 = this['$html'] = _0x2d2965('html'),
                _0x3677c2 = this['$instance'] = _0x2d2965('#admui-navTabs');
            _0x35ade1['removeClass']('css-menubar')['addClass']('js-menubar');
            this['tabId'] = _0x2d2965('#admui-navbar')['find']('li.active > a')['attr']('href');
            if (this['tabId'] === '#') {
                this['tabId'] = _0x2d2965('.nav-tabs li.active')['find']('ul>li.active>a')['attr']('href');
            }
            if (!_0x3677c2['length']) {
                return;
            }
            if (_0x1a886f['is']('.site-menubar-fold-alt')) {
                this['foldAlt'] = !![];
            }
            if (_0x1a886f['is']('.site-menubar-keep')) {
                if (_0x1a886f['hasClass']('site-menubar-fold')) {
                    this['auto'] = 'fold';
                } else if (_0x1a886f['hasClass']('site-menubar-unfold')) {
                    this['auto'] = 'unfold';
                }
            }
            _0x3677c2['on']('changed.site.menubar',
                function() {
                    _0x55790f['update']();
                });
            _0x2d2965('.nav-tabs li:not(.no-menu)')['on']('shown.bs.tab',
                function(_0x5c26c1) {
                    var _0x59b3ed = _0x55790f['tabId'] = _0x2d2965(_0x5c26c1['target'])['attr']('href');
                    if (_0x1a886f['hasClass']('site-menubar-fold')) {
                        _0x55790f['hoverscroll']['enable'](_0x59b3ed);
                    } else if (_0x1a886f['hasClass']('site-menubar-unfold')) {
                        _0x55790f['slimScroll']['enable']();
                    }
                });
            this['change']();
        },
        'change': function() {
            var _0x35d224 = Breakpoints['current']();
            if (this['auto'] !== !![]) {
                switch (this['auto']) {
                    case 'fold':
                        this['reset']();
                        if (_0x35d224['name'] === 'xs') {
                            this['hide']();
                        } else {
                            this['fold']();
                        }
                        return;
                    case 'unfold':
                        this['reset']();
                        if (_0x35d224['name'] === 'xs') {
                            this['hide']();
                        } else {
                            this['unfold']();
                        }
                        return;
                }
            }
            this['reset']();
            if (_0x35d224) {
                switch (_0x35d224['name']) {
                    case 'lg':
                        this['unfold']();
                        break;
                    case 'md':
                    case 'sm':
                        this['fold']();
                        break;
                    case 'xs':
                        this['hide']();
                        break;
                }
            }
            Breakpoints['on']('xs', 'leave',
                function() {
                    _0x2d2965('#admui-navbar')['responsiveHorizontalTabs']({
                        'tabParentSelector': '#admui-navTabs',
                        'fnCallback': function(_0x378a63) {
                            if (_0x2d2965('#admui-navbar')['is'](':visible')) {
                                _0x378a63['removeClass']('is-load');
                            }
                        }
                    });
                });
        },
        'animate': function(_0x4d7a80, _0x20a952) {
            var _0x4509ac = this,
                _0x4b2707 = _0x4509ac['$body'];
            _0x4b2707['addClass']('site-menubar-changing');
            _0x4d7a80['call'](_0x4509ac);
            this['$instance']['trigger']('changing.site.menubar');
            _0x20a952['call'](_0x4509ac);
            _0x4b2707['removeClass']('site-menubar-changing');
            _0x4509ac['$instance']['trigger']('changed.site.menubar');
        },
        'reset': function() {
            this['opened'] = null;
            this['folded'] = null;
            this['$body']['removeClass']('site-menubar-hide site-menubar-open site-menubar-fold site-menubar-unfold');
            this['$html']['removeClass']('disable-scrolling');
        },
        'open': function() {
            if (this['opened'] !== !![]) {
                this['animate'](function() {
                        this['$body']['removeClass']('site-menubar-hide')['addClass']('site-menubar-open site-menubar-unfold');
                        this['opened'] = !![];
                        this['$html']['addClass']('disable-scrolling');
                    },
                    function() {
                        this['slimScroll']['enable']();
                    });
            }
        },
        'hide': function() {
            this['hoverscroll']['disable']();
            if (this['opened'] !== ![]) {
                this['animate'](function() {
                        this['$html']['removeClass']('disable-scrolling');
                        this['$body']['removeClass']('site-menubar-open')['addClass']('site-menubar-hide site-menubar-unfold');
                        this['opened'] = ![];
                    },
                    function() {
                        this['slimScroll']['enable']();
                    });
            }
        },
        'unfold': function() {
            this['hoverscroll']['disable']();
            if (this['folded'] !== ![]) {
                this['animate'](function() {
                        this['$body']['removeClass']('site-menubar-fold')['addClass']('site-menubar-unfold');
                        this['folded'] = ![];
                    },
                    function() {
                        this['slimScroll']['enable']();
                    });
            }
        },
        'fold': function() {
            this['slimScroll']['destroy']();
            if (this['folded'] !== !![]) {
                this['animate'](function() {
                        this['$body']['removeClass']('site-menubar-unfold')['addClass']('site-menubar-fold');
                        this['folded'] = !![];
                    },
                    function() {
                        this['hoverscroll']['enable'](this['tabId']);
                    });
            }
        },
        'toggle': function() {
            var _0xf1667f = Breakpoints['current'](),
                _0x8802b2 = this['folded'],
                _0x1ad91b = this['opened'];
            switch (_0xf1667f['name']) {
                case 'lg':
                    if (_0x8802b2 === null || _0x8802b2 === ![]) {
                        this['fold']();
                    } else {
                        this['unfold']();
                    }
                    break;
                case 'md':
                case 'sm':
                    if (_0x8802b2 === null || _0x8802b2 === !![]) {
                        this['unfold']();
                    } else {
                        this['fold']();
                    }
                    _0x2d2965('#admui-navbar')['responsiveHorizontalTabs']({
                        'tabParentSelector': '#admui-navTabs'
                    });
                    break;
                case 'xs':
                    if (_0x1ad91b === null || _0x1ad91b === ![]) {
                        this['open']();
                    } else {
                        this['hide']();
                    }
                    break;
            }
        },
        'update': function() {
            this['hoverscroll']['update']();
        },
        'slimScroll': {
            'api': null,
            'native': ![],
            'init': function() {
                if (_0x2d2965('body')['is']('.site-menubar-native')) {
                    this['native'] = !![];
                    return;
                }
                _0x2d2965['site']['menubar']['$instance']['slimScroll'](_0x2d2965['po']('slimScroll'));
            },
            'enable': function() {
                if (this['native']) {
                    return;
                }
                this['init']();
            },
            'destroy': function() {
                _0x2d2965['site']['menubar']['$instance']['slimScroll']({
                    'destroy': !![]
                });
                _0x2d2965['site']['menubar']['$instance']['removeAttr']('style');
            }
        },
        'hoverscroll': {
            'api': null,
            'init': function(_0x3ae2e2) {
                _0x2d2965['site']['menubar']['$instance']['find'](_0x3ae2e2)['children']('div')['attr']('style', '');
                this['api'] = _0x2d2965['site']['menubar']['$instance']['find'](_0x3ae2e2)['asHoverScroll']({
                    'namespace': 'hoverscorll',
                    'direction': 'vertical',
                    'list': '.site-menu',
                    'item': '>\x20li',
                    'exception': '.site-menu-sub',
                    'fixed': ![],
                    'boundary': 0x64,
                    'onEnter': function() {},
                    'onLeave': function() {}
                })['data']('asHoverScroll');
            },
            'update': function() {
                if (this['api']) {
                    this['api']['update']();
                }
            },
            'enable': function(_0x789713) {
                if (_0x789713 !== this['tabId']) {
                    this['tabId'] = _0x789713;
                    this['init'](_0x789713);
                } else {
                    this['api']['enable']();
                }
            },
            'disable': function() {
                if (this['api']) {
                    this['api']['disable']();
                }
            }
        }
    };
} (window, document, jQuery));
