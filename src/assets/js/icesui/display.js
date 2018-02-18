(function(_0x28c10e, _0x2dc36f, _0x2e9c20) {
    'use strict';
    if (_0x2e9c20('#accountContent')['size']() > 0x0) {
        _0x2e9c20('#displayForm')['prepend']('<input type="hidden" name="userId" value="' + _0x2e9c20('#admui-signOut')['attr']('data-user') + '\x22>');
    }
    if (!_0x28c10e['localStorage']) {
        return;
    }
    var _0x18c4d6 = {
        'path': _0x2e9c20['ctx'] + icesConfig.statics + '/css/',
        '$siteSidebar': _0x2e9c20['parentFrame']['find']('.site-menubar'),
        '$siteNavbar': _0x2e9c20['parentFrame']['find']('.site-navbar'),
        'navbarSkins': 'bg-primary-600 bg-brown-600 bg-cyan-600 bg-green-600 bg-grey-600 bg-indigo-600 bg-orange-600 bg-pink-600 bg-purple-600 bg-red-600 bg-teal-600 bg-yellow-700',
        'init': function() {
            var _0x5b19df = this;
            _0x2e9c20(_0x2dc36f)['on']('change', '#skintoolsSidebar',
                function() {
                    _0x5b19df['sidebarEvents'](_0x2e9c20(this));
                });
            _0x2e9c20(_0x2dc36f)['on']('click', '#skintoolsNavbar input',
                function() {
                    _0x5b19df['navbarEvents'](_0x2e9c20(this));
                });
            _0x2e9c20(_0x2dc36f)['on']('click', '#skintoolsPrimary\x20input',
                function() {
                    _0x5b19df['primaryEvents'](_0x2e9c20(this));
                });
            _0x2e9c20(_0x2dc36f)['on']('change', 'input[name=\x22menuDisplay\x22]',
                function() {
                    var _0x238772 = _0x2e9c20('#menuFoldSetting'),
                        _0x538b30 = _0x2e9c20(this)['val']();
                    if (_0x538b30 === 'site-menubar-unfold') {
                        _0x238772['addClass']('hidden');
                        _0x2e9c20['site']['menubar']['unfold']();
                    } else {
                        _0x238772['removeClass']('hidden');
                        _0x2e9c20['site']['menubar']['fold']();
                    }
                });
            _0x2e9c20(_0x2dc36f)['on']('change', 'input[name=\x22menuTxtIcon\x22]',
                function() {
                    var _0x3f9ef6 = _0x2e9c20(this)['val']();
                    if (_0x3f9ef6 === 'site-menubar-keep') {
                        _0x2e9c20['parentFrame']['find']('body')['removeClass']('site-menubar-fold-alt')['addClass']('site-menubar-keep');
                    } else {
                        _0x2e9c20['parentFrame']['find']('body')['removeClass']('site-menubar-keep')['addClass']('site-menubar-fold-alt');
                    }
                });
            _0x2e9c20(_0x2dc36f)['on']('change', 'input[name="tabFlag"]',
                function() {
                    var _0x5d4c4e = _0x2e9c20(this)['val']();
                    if (_0x5d4c4e === 'site-contabs-open') {
                        _0x2e9c20('#admui-siteConTabs\x20ul.con-tabs', _0x2e9c20['parentFrame'])['removeAttr']('style');
                        _0x2e9c20['parentFrame']['find']('body')['addClass']('site-contabs-open');
                    } else {
                        _0x2e9c20['parentFrame']['find']('body')['removeClass']('site-contabs-open');
                    }
                });
            _0x2e9c20(_0x2dc36f)['on']('click', "button[name='save']",
                function(_0x5c5fd3) {
                    _0x5c5fd3['preventDefault']();
                    _0x2e9c20['ajax']({
                        'url': _0x2e9c20['ctx'] + '/icesui/display/save',
                        'type': 'POST',
                        'data': _0x2e9c20('.form-horizontal')['serialize'](),
                        'dataType': 'JSON',
                        'success': function(data) {
                            if(data.code == 1){
                                parent.location.reload(true);
                            }else{
                                toastr.error('出错了，请重试！');
                            }
                        },
                        'error': function() {
                            toastr['error']('服务器异常，请稍后再试！');
                        }
                    });
                });
            _0x2e9c20(_0x2dc36f)['on']('click', '#skintoolsReset',
                function(_0xea1637) {
                    _0xea1637['preventDefault']();
                    _0x2e9c20['ajax']({
                        'url': _0x2e9c20['ctx'] + '/icesui/display/save',
                        'type': 'POST',
                        'dataType': 'JSON',
                        'success': function(data) {
                            if(data.code == 1){
                                parent.location.reload(true);
                            }else{
                                toastr.error('出错了，请重试！');
                            }
                        },
                        'error': function() {
                            toastr['error']('服务器异常，请稍后再试！');
                        }
                    });
                });
            _0x2e9c20('#skintoolsSidebar')['selectpicker'](_0x2e9c20['po']('selectpicker'));
        },
        'sidebarEvents': function(_0x347d3e) {
            var _0x56f9b2 = _0x347d3e['val']();
            this['sidebarImprove'](_0x56f9b2);
        },
        'navbarEvents': function(_0x5e9841) {
            var _0x25cc97 = _0x5e9841['val'](),
                _0x3b1eeb = _0x5e9841['prop']('checked');
            this['navbarImprove'](_0x25cc97, _0x3b1eeb);
        },
        'primaryEvents': function(_0x47c93a) {
            var _0x2d0365 = _0x47c93a['val']();
            this['primaryImprove'](_0x2d0365);
        },
        'sidebarImprove': function(_0x4b6fc5) {
            if (_0x4b6fc5 === 'site-menubar-light') {
                this['$siteSidebar']['removeClass']('site-menubar-dark')['addClass'](_0x4b6fc5);
            } else {
                this['$siteSidebar']['removeClass']('site-menubar-light')['addClass'](_0x4b6fc5);
            }
        },
        'navbarImprove': function(_0x25a2dc, _0x323798) {
            if (_0x25a2dc === 'navbar-inverse') {
                _0x323798 ? this['$siteNavbar']['addClass'](_0x25a2dc) : this['$siteNavbar']['removeClass'](_0x25a2dc);
            } else {
                this['$siteNavbar']['removeClass'](this['navbarSkins'])['addClass'](_0x25a2dc);
            }
        },
        'primaryImprove': function(_0x493d12) {
            var _0x50d74a = this,
                _0x3ddfe0 = _0x2e9c20('#admui-siteStyle', _0x2e9c20['parentFrame']),
                _0x5494a1 = _0x2e9c20['parentFrame']['find']('#admui-pageContent>iframe'),
                _0x330303,
                _0x446209 = _0x3ddfe0['prop']('href')['indexOf']('?v=') === -0x1 ? '': '.min';
            if (_0x493d12 === 'primary') {
                _0x330303 = this['path'] + '/css/index' + _0x446209 + '.css';
            } else {
                _0x330303 = this['path'] + '/skins/' + _0x493d12 + '/index' + _0x446209 + '.css';
            }
            _0x3ddfe0['attr']('href', _0x330303);
            _0x5494a1['each'](function() {
                var _0x2e2ca5 = _0x2e9c20(this)['attr']('name'),
                    _0x24e773 = _0x2e9c20('#admui-siteStyle', parent['frames'][_0x2e2ca5]['document']),
                    _0x4aab80,
                    _0x3b9981;
                if (_0x24e773['length']) {
                    _0x4aab80 = _0x24e773['prop']('href')['indexOf']('?v=') === -0x1 ? '': '.min';
                    if (_0x493d12 === 'primary') {
                        _0x3b9981 = _0x50d74a['path'] + '/css/site' + _0x4aab80 + '.css';
                    } else {
                        _0x3b9981 = _0x50d74a['path'] + '/skins/' + _0x493d12 + '/site' + _0x4aab80 + '.css';
                    }
                    _0x24e773['attr']('href', _0x3b9981);
                }
            });
        }
    };
    _0x18c4d6['init']();
} (window, document, jQuery));
