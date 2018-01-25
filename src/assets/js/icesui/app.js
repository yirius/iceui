(function() {
    'use strict';
    $.parentFrame = $(window['top']['document']);
    var _topFrame = window.parentFrame = window['top'];
    $.ctx = _topFrame.$.ctx;
    $.colors = _topFrame.$.colors;
    $.po = _topFrame.$.po;
    $.storage = _topFrame.$.storage;
    $.sessionStorage = _topFrame.$.sessionStorage;
    $.site = _topFrame.$.site;
    $.site.contentTabs.ifameTabs(document);
    $.configs = _topFrame.$.configs;
    _topFrame.$['components']['init'](document, window);
    window['Breakpoints'] = _topFrame['Breakpoints'];
    window['toastr'] = _topFrame['toastr'];
    window['layer'] = _topFrame['layer'];
    window['notifyFn'] = _topFrame.$['notifyFn'];
    var _0x20dec2 = _0x20dec2 || {};
    $.extend(_0x20dec2, {
        '_queue': {
            'prepare': [],
            'run': [],
            'complete': []
        },
        'run': function() {
            var _0x50aa31 = this;
            this['_dequeue']('prepare',
                function() {
                    _0x50aa31['_trigger']('before.run', _0x50aa31);
                });
            this['_dequeue']('run',
                function() {
                    _0x50aa31['_dequeue']('complete',
                        function() {
                            _0x50aa31['_trigger']('after.run', _0x50aa31);
                        });
                });
        },
        '_dequeue': function(_0x4f1a37, _0x20f296) {
            var _0x229b7c = this,
                _0x4f1461 = this['_getQueue'](_0x4f1a37),
                _0x1b2f8f = _0x4f1461['shift'](),
                _0x2d02e8 = function() {
                    _0x229b7c['_dequeue'](_0x4f1a37, _0x20f296);
                };
            if (_0x1b2f8f) {
                _0x1b2f8f['call'](this, _0x2d02e8);
            } else if ($['isFunction'](_0x20f296)) {
                _0x20f296['call'](this);
            }
        },
        '_getQueue': function(_0x59d736) {
            if (!$['isArray'](this['_queue'][_0x59d736])) {
                this['_queue'][_0x59d736] = [];
            }
            return this['_queue'][_0x59d736];
        },
        'extend': function(_0x6c816) {
            $['each'](this['_queue'],
                function(_0xdc09d3, _0x153937) {
                    if ($['isFunction'](_0x6c816[_0xdc09d3])) {
                        _0x153937['unshift'](_0x6c816[_0xdc09d3]);
                        delete _0x6c816[_0xdc09d3];
                    }
                });
            $['extend'](this, _0x6c816);
            return this;
        },
        '_trigger': function(_0x24ee62, _0x4da7d7, _0x3d618e) {
            if (typeof _0x24ee62 === 'undefined') {
                return;
            }
            if (typeof _0x3d618e === 'undefined') {
                _0x3d618e = $('#admui-pageContent');
            }
            _0x3d618e['trigger'](_0x24ee62 + '.app', _0x4da7d7);
        }
    });
    var _0x2304dc = {
        'pageAside': function() {
            var _pageaside = $('.page-aside');
            _pageaside.toggleClass('open', !_pageaside.hasClass('open'));
        },
        'run': function(_0x574054) {
            var _0x17216a = this;
            $(document)['on']('click', '.page-aside-switch',
                function(_0x266299) {
                    _0x17216a['pageAside']();
                    _0x266299['stopPropagation']();
                });
            _0x574054();
        }
    };
    window['App'] = $['extend']({},_0x20dec2);
    App.extend(_0x2304dc);
} ());
