/**
 * Created by yangyuance1 on 2017/11/17.
 */
(function(_0x5444eb, _0x1edaa9, $) {
    'use strict';
    $.components.register('bootbox', {
        'mode': 'init',
        'defaults': {
            'message': '',
            'locale': 'zh_CN'
        },
        'init': function() {
            if (typeof bootbox === 'undefined') {
                return;
            }
            var _0xf055ce = $['components']['getDefaults']('bootbox');
            $(_0x1edaa9)['on']('click.site.bootbox', '[data-plugin="bootbox"]', function() {
                var _0x9a9dab = $(this),
                    _0x2429e6 = _0x9a9dab['data']();
                _0x2429e6 = $['extend']( !! [], {}, _0xf055ce, _0x2429e6);
                if (_0x2429e6['classname']) {
                    _0x2429e6['className'] = _0x2429e6['classname'];
                }
                if (typeof _0x2429e6['callback'] === 'string' && $['isFunction'](_0x5444eb[_0x2429e6['callback']])) {
                    _0x2429e6['callback'] = _0x5444eb[_0x2429e6['callback']];
                }
                if (_0x2429e6['type']) {
                    switch (_0x2429e6['type']) {
                        case 'alert':
                            bootbox['alert'](_0x2429e6);
                            break;
                        case 'confirm':
                            bootbox['confirm'](_0x2429e6);
                            break;
                        case 'prompt':
                            bootbox['prompt'](_0x2429e6);
                            break;
                        default:
                            bootbox['dialog'](_0x2429e6);
                    }
                } else {
                    bootbox['dialog'](_0x2429e6);
                }
            });
        }
    });
}(window, document, jQuery));
