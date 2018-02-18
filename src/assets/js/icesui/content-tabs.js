(function() {
    'use strict';
    $['site']['contentTabs'] = {
        '$instance': $('#admui-navTabs\x20.site-menu'),
        '$content': $('#admui-pageContent'),
        'storageKey': 'admui.base.contentTabs',
        'tabId': 0x0,
        'relative': 0x0,
        'tabTimeout': 0x1e,
        'init': function() {
            this['bind']();
            this['_defaultTab']();
        },
        'bind': function() {
            var _0x283fcf = this,
                _0xda9362 = $('#admui-siteConTabs'),
                _0x4bab5f = _0xda9362.find('ul.con-tabs');
            this['tabWidth'] = _0x4bab5f.find('li')['width']();
            this['view'] = _0xda9362.find('.contabs-scroll')['width']();
            this['ifameTabs']();
            _0xda9362.on('click.site.contabs', 'button.pull-left',
                function() {
                    _0x283fcf['tabPosition'](_0x4bab5f, _0x283fcf['tabWidth'], 'right');
                }).on('click.site.contabs', '.pull-right>.btn-icon',
                function() {
                    var _0x242141 = _0x4bab5f['width']();
                    _0x283fcf['tabPosition'](_0x4bab5f, _0x283fcf['tabWidth'], 'left', _0x283fcf['view'], _0x242141);
                }).on('click.site.contabs', 'ul.con-tabs>li',
                function(_0x2f3b74) {
                    var _0x30573c = $(_0x2f3b74['target']),
                        _0x27ec6d = $(this);
                    if (_0x30573c.is('i.wb-close-mini')) {
                        _0x283fcf['closeTab'](_0x27ec6d);
                    } else if (!_0x27ec6d.is('.active')) {
                        _0x27ec6d['siblings']('li')['removeClass']('active');
                        _0x27ec6d['addClass']('active');
                        _0x283fcf['_checkoutTab'](_0x27ec6d.find('a'));
                        _0x283fcf.enable(_0x27ec6d);
                    }
                    _0x2f3b74['preventDefault']();
                });
            _0xda9362.on('click.site.contabs', '.pull-right li.reload-page',
                function() {
                    var _0x492dd7 = _0xda9362.find('ul.con-tabs>li.active>a'),
                        _0x3a8d20 = _0x492dd7.attr('href');
                    _0x283fcf['$content']['children']('[src="' + _0x3a8d20 + '\x22]').attr('src', _0x3a8d20);
                }).on('click.site.contabs', '.pull-right li.close-other',
                function() {
                    var _0x25c2d9 = _0xda9362.find('ul.con-tabs>li');
                    _0x25c2d9['each'](function() {
                        var _0x90ef18 = $(this),
                            _0x1e69bd;
                        if (!_0x90ef18.is('.active') && _0x90ef18['index']() !== 0x0) {
                            _0x1e69bd = _0x90ef18.find('a').attr('target');
                            _0x90ef18['remove']();
                            _0x283fcf['$content']['children']('[name="' + _0x1e69bd + '\x22]')['remove']();
                            _0x283fcf['_updateSetting'](_0x1e69bd);
                        }
                    });
                    _0x4bab5f['animate']({
                            'left': 0x0
                        },
                        0x64);
                    _0x283fcf['btnView']('hide');
                }).on('click.site.contabs', '.pull-right\x20li.close-all',
                function() {
                    var _0x424cd7 = _0xda9362.find('ul.con-tabs>li'),
                        _0x256289 = _0x424cd7['eq'](0x0);
                    _0x424cd7['each'](function() {
                        var _0x3df54b = $(this),
                            _0x49e552;
                        if (_0x3df54b['index']() !== 0x0) {
                            _0x49e552 = _0x3df54b.find('a').attr('target');
                            _0x3df54b['remove']();
                            _0x283fcf['_updateSetting'](_0x49e552);
                        }
                    });
                    _0x4bab5f['animate']({
                            'left': 0x0
                        },
                        0x64);
                    _0x283fcf['btnView']('hide');
                    _0x256289['addClass']('active');
                    _0x283fcf.enable(_0x424cd7['eq'](0x0));
                    _0x283fcf['_checkoutTab'](_0x256289.find('a'));
                    _0x283fcf['$content']['children'](':not(:first)')['remove']();
                    _0x283fcf['tabSize']();
                });
            $(document).on('click', '#admui-signOut',
                function() {
                    $['sessionStorage']['remove'](_0x283fcf['storageKey']);
                });
            $(window).on('resize', this['resize']);
        },
        'ifameTabs': function(scope) {
            var _this = this,
                _scope = scope === undefined ? document: scope;
            $(_scope).on('click', 'a[data-iframe]', function(e) {
                    var $this = $(this),
                        regx,
                        _href = $this.attr('href'),
                        _title = $.trim($this.text()) || $.trim($this.attr('title')),
                        _iframe = $this.data('iframe') || '#admui-pageContent',
                        __blank = $this.is('[target="_blank"]');
                    regx = new RegExp(/^([a-zA-z]+:|#|javascript|www\.)/);
                    if (regx.test(_href)) {
                        return;
                    }
                    if (__blank && _iframe === '#admui-pageContent') {
                        window.history.replaceState(null, '', '#!' + _href);
                        _this.tabType = !![];
                        _this.buildTab({
                            'name': _title,
                            'url': _href
                        });
                        if (!_this.$instance.find($this).length) {
                            _this.enable($this.parent());
                        }
                    } else if (!__blank) {
                        $(_iframe).find('iframe.active').attr('src', _href);
                    }
                    e.preventDefault();
                });
        },
        '_checkoutTab': function(_0xa46665) {
            var _0x218acf = this['$content'],
                _0x110ed0 = _0xa46665.attr('target'),
                _0x5d54da = $.trim(_0xa46665.attr('title')),
                _0x2be880 = _0xa46665.attr('href'),
                _0x35074f = _0x218acf['children']('iframe[name="' + _0x110ed0 + '\x22]');
            $('title').text(_0x5d54da);
            if (!this.tabType) {
                window.history.replaceState(null, '', '#!' + _0x2be880);
            }
            if (!_0x35074f.attr('src')) {
                _0x35074f.attr('src', _0x2be880);
            }
            _0x218acf['children']('.active')['removeClass']('active');
            _0x35074f['addClass']('active');
            $['site']['iframeEvents'](_0x35074f);
            this['_updateSetting']('checked', _0x110ed0);
            this.tabType = ![];
        },
        '_defaultTab': function() {
            var _0x557428 = $('#admui-siteConTabs').find('li:first > a'),
                _0x1c5b0d;
            _0x1c5b0d = this['settings'] = $['sessionStorage']['get'](this['storageKey']);
            if (_0x1c5b0d === null) {
                _0x1c5b0d = $['extend']( !! [], {},
                    {
                        'iframe-0': {
                            'url': _0x557428.attr('href'),
                            'name': _0x557428.text()
                        },
                        'checked': _0x557428.attr('target'),
                        'tabId': this['tabId']
                    });
                this['_updateSetting'](_0x1c5b0d);
            } else {
                this['tabId'] = _0x1c5b0d['tabId'];
            }
        },
        '_updateSetting': function(_0x1e7968, _0x4fb1cf) {
            var _0xcd8d4c = $['sessionStorage']['get'](this['storageKey']);
            _0xcd8d4c = _0xcd8d4c ? _0xcd8d4c: {};
            if (typeof _0x1e7968 === 'object') {
                $['extend']( !! [], _0xcd8d4c, _0x1e7968);
            } else if (!_0x4fb1cf) {
                delete _0xcd8d4c[_0x1e7968];
            } else {
                _0xcd8d4c[_0x1e7968] = _0x4fb1cf;
            }
            $['sessionStorage']['set'](this['storageKey'], _0xcd8d4c, this['tabTimeout']);
        },
        'resize': function() {
            var _0xe27dc0 = $['site']['contentTabs'],
                _0x5f0a87 = $('.site-contabs'),
                _0x3fbcb5 = _0x5f0a87.find('ul.con-tabs');
            _0xe27dc0['_throttle'](function() {
                    _0xe27dc0['view'] = _0x5f0a87.find('.contabs-scroll')['width']();
                    _0xe27dc0['tabEvent'](_0x3fbcb5, 'media');
                },
                0xc8)();
        },
        'enable': function(_0x37d964) {
            var _0x5dae98 = this.$instance,
                _0x130cb6 = $.trim(_0x37d964.find('a').attr('href')),
                _0x5a0303 = _0x130cb6['indexOf']('#'),
                _0x15921d = _0x5a0303 > 0x0 ? _0x130cb6['substring'](0x0, _0x5a0303) : _0x130cb6,
                _0x5b203c = _0x5dae98.find('a[href="' + _0x15921d + '\x22]'),
                _0x3836c1,
                _0x36f5e2,
                _0x5e5980,
                _0x17fd81,
                _0x3e048c,
                _0x5f3fe8;
            if (_0x5b203c.length === 0x0) {
                $['site']['menu']['refresh']();
                return;
            }
            _0x3e048c = $.trim(_0x5dae98['closest']('div.tab-pane.active').attr('id'));
            _0x5f3fe8 = $.trim(_0x5b203c['closest']('div.tab-pane').attr('id'));
            if (_0x3e048c !== _0x5f3fe8) {
                $('#admui-navbar a[href="#' + _0x5f3fe8 + '\x22]')['tab']('show');
            }
            _0x36f5e2 = _0x5b203c['closest']('li')['siblings']('li.open');
            _0x3836c1 = _0x5b203c['parents']('li.has-sub');
            _0x5e5980 = _0x5b203c['closest']('li.has-sub')['siblings']('li.open');
            _0x17fd81 = _0x5dae98.find('li.open');
            _0x5dae98.find('li.active')['trigger']('deactive.site.menu');
            _0x5b203c['closest']('li')['trigger']('active.site.menu');
            if (_0x36f5e2.length) {
                _0x36f5e2['trigger']('close.site.menu');
            }
            if (!_0x5b203c['closest']('li.has-sub')['hasClass']('open')) {
                if (_0x5e5980.length) {
                    _0x5e5980['trigger']('close.site.menu');
                }
                if (_0x17fd81.length) {
                    _0x17fd81['not'](_0x3836c1)['trigger']('close.site.menu');
                }
                _0x3836c1['trigger']('open.site.menu');
            }
        },
        'buildTab': function(_0x49e9db) {
            var _0x39c4aa = $('.con-tabs'),
                _0x3cd4a4,
                _0x4d6a1e = {},
                _0x13baa3,
                _0x2f7e0d = _0x49e9db['url'],
                _0x1d79b7 = _0x2f7e0d['indexOf']('#'),
                _0x39dfa2 = _0x1d79b7 > 0x0 ? _0x2f7e0d['substring'](0x0, _0x1d79b7) : _0x2f7e0d;
            if (this['_checkTabs'](_0x39c4aa, _0x39dfa2)) {
                return;
            }
            _0x13baa3 = ++this['tabId'];
            _0x3cd4a4 = 'iframe-' + _0x13baa3;
            _0x39c4aa.find('li.active')['removeClass']('active');
            _0x39c4aa['append']('<li\x20\x20class=\x22active\x22><a\x20href=\x22' + _0x39dfa2 + '" target="' + _0x3cd4a4 + '" title="' + _0x49e9db['name'] + '' + '" rel="contents"><span>' + _0x49e9db['name'] + '</span><i\x20class=\x22icon' + ' wb-close-mini">' + '</i></a></li>');
            _0x4d6a1e[_0x3cd4a4] = {
                'url': _0x39dfa2,
                'name': _0x49e9db['name']
            };
            $['extend'](_0x4d6a1e, {
                'checked': _0x3cd4a4,
                'tabId': _0x13baa3
            });
            this['_updateSetting'](_0x4d6a1e);
            _0x49e9db['name'] = _0x49e9db['name'] === '' ? '无标题' : _0x49e9db['name'];
            $('title').text($.trim(_0x49e9db['name']));
            this['buildIframe'](_0x2f7e0d);
            this['tabSize']();
            this['tabEvent'](_0x39c4aa, 'media');
            this.tabType = ![];
        },
        '_checkTabs': function(_0x1bc604, _0x3d6bd7) {
            var _0x1490ab, _0x201d08, _0x42dbbd, _0x273063, _0x10a656 = this['view'],
                _0x214cb5 = this['tabWidth'],
                _0x303072 = _0x1bc604.find('a[href=\x27' + _0x3d6bd7 + '\x27]')['closest']('li');
            if (_0x303072['hasClass']('active')) {
                return !! [];
            }
            if (_0x303072['size']() <= 0x0) {
                return ! [];
            }
            _0x1bc604.find('li.active')['removeClass']('active');
            _0x303072['addClass']('active');
            this['_checkoutTab'](_0x303072.find('a'));
            _0x1490ab = _0x1bc604['position']()['left'];
            _0x273063 = _0x1bc604['width']();
            _0x201d08 = _0x303072['prevAll']('li')['size']() * _0x214cb5;
            _0x42dbbd = _0x303072['nextAll']('li')['size']() * _0x214cb5;
            if ( - _0x201d08 < _0x1490ab) {
                if (_0x201d08 + _0x1490ab < _0x10a656) {
                    return !! [];
                }
                _0x1490ab = -(_0x201d08 - _0x10a656 + _0x214cb5);
            } else {
                if ( - _0x1490ab < _0x273063 - _0x42dbbd) {
                    return !! [];
                }
                _0x1490ab = -(_0x273063 - _0x42dbbd - _0x214cb5);
            }
            _0x1bc604['animate']({
                    'left': _0x1490ab
                },
                0x64);
            return !! [];
        },
        'buildIframe': function(_0x2d0f5e) {
            var _0xb8312e = this['$content'],
                _0x1c124a = 'iframe-' + this['tabId'],
                _0x24803f;
            _0xb8312e['children']('.active')['removeClass']('active');
            _0xb8312e['append']('<iframe src="' + _0x2d0f5e + '" frameborder="0" name="' + _0x1c124a + '" class="page-frame animation-fade active"></iframe>');
            _0x24803f = _0xb8312e.find('iframe[name="' + _0x1c124a + '\x22]');
            $['site']['iframeEvents'](_0x24803f);
        },
        'tabSize': function() {
            var _0x34a2db, _0x4e5671 = $('.con-tabs'),
                _0x188609 = _0x4e5671.find('li')['size']();
            _0x34a2db = this['tabWidth'] * _0x188609;
            _0x4e5671['css']('width', _0x34a2db);
        },
        'tabEvent': function(_0x1320a6, _0x2f7eb9) {
            var _0x383e50 = $('.con-tabs')['width'](),
                _0x9935b8 = this['view'],
                _0x3d97ec = this['tabWidth'];
            if (_0x383e50 > this['view']) {
                this['tabPosition'](_0x1320a6, _0x3d97ec, 'left', _0x9935b8, _0x383e50, _0x2f7eb9);
                this['btnView']('visible');
            } else {
                this['btnView']('hide');
            }
            if (this['currentView'] < _0x9935b8 || this['currentContent'] > _0x383e50) {
                this['tabPosition'](_0x1320a6, _0x3d97ec, 'right', _0x9935b8, _0x383e50, _0x2f7eb9);
            }
            this['currentView'] = _0x9935b8;
            this['currentContent'] = _0x383e50;
        },
        'tabPosition': function(_0x2de256, _0x548dfa, _0x33d884, _0x2e4626, _0x386ac2, _0x4c7ffa) {
            var _0x53d6f3 = this,
                _0x543b46 = _0x2de256['position']()['left'],
                _0x10b096 = function(_0x2f7fae) {
                    var _0x4730bf = _0x2f7fae + _0x548dfa;
                    if (_0x4730bf > 0x0) {
                        _0x53d6f3['relative'] = _0x2f7fae;
                        return 0x0;
                    } else {
                        return _0x2f7fae;
                    }
                };
            if (_0x33d884 === 'left') {
                if (_0x543b46 <= _0x2e4626 - _0x386ac2) {
                    return ! [];
                }
                if (typeof _0x4c7ffa !== 'undefined') {
                    _0x543b46 = _0x2e4626 - _0x386ac2;
                } else {
                    _0x543b46 = this['relative'] !== 0x0 ? _0x543b46 - _0x548dfa + this['relative'] : _0x543b46 - _0x548dfa;
                    this['relative'] = 0x0;
                }
            } else if (_0x33d884 === 'right') {
                if (_0x543b46 === 0x0) {
                    return ! [];
                }
                if (typeof _0x4c7ffa !== 'undefined') {
                    _0x543b46 = _0x386ac2 <= _0x2e4626 ? 0x0: _0x2e4626 - _0x386ac2;
                } else {
                    _0x543b46 = _0x10b096(_0x543b46 + _0x548dfa);
                }
            }
            _0x2de256['animate']({
                    'left': _0x543b46
                },
                0x64);
        },
        '_throttle': function(_0x5c2649, _0x25bb88) {
            var _0x123d5c = _0x5c2649,
                _0x12b7de, _0x233279 = !![];
            return function() {
                var _0x3703e3 = arguments,
                    _0x1f5baf = this;
                if (_0x233279) {
                    _0x123d5c['apply'](_0x1f5baf, _0x3703e3);
                    _0x233279 = ![];
                }
                if (_0x12b7de) {
                    return ! [];
                }
                _0x12b7de = setTimeout(function() {
                        clearTimeout(_0x12b7de);
                        _0x12b7de = null;
                        _0x123d5c['apply'](_0x1f5baf, _0x3703e3);
                    },
                    _0x25bb88 || 0x1f4);
            };
        },
        'closeTab': function(_0x1be84c) {
            var _0x192b6c = _0x1be84c['children']('a').attr('target'),
                _0xb612cb = '',
                _0x299c3e = _0x1be84c['next']('li'),
                _0x5918d4 = this['$content'];
            if (_0x1be84c.is('.active')) {
                if (_0x299c3e['size']() > 0x0) {
                    _0xb612cb = _0x299c3e;
                } else {
                    _0xb612cb = _0x1be84c['prev']('li');
                }
                _0xb612cb['addClass']('active');
                this.enable(_0xb612cb);
                this['_checkoutTab'](_0xb612cb.find('a'));
            }
            _0x1be84c['remove']();
            _0x5918d4['children']('[name="' + _0x192b6c + '\x22]')['remove']();
            this['_updateSetting'](_0x192b6c);
            this['tabSize']();
            this['tabEvent']($('.con-tabs'), 'media');
        },
        'btnView': function(_0x2f4e80) {
            var _0x2953ba = $('.site-contabs'),
                _0xead9e4 = _0x2953ba['children']('button.pull-left'),
                _0x57ca30 = _0x2953ba.find('.pull-right > button.btn-icon');
            if (_0x2f4e80 === 'visible') {
                _0xead9e4['removeClass']('hide');
                _0x57ca30['removeClass']('hide');
            } else if (_0x2f4e80 === 'hide') {
                _0xead9e4['addClass']('hide');
                _0x57ca30['addClass']('hide');
            }
        }
    };
} ());
