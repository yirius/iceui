/**
 * Created by yangyuance1 on 2017/11/17.
 */
(function() {
    'use strict';
    $.components.register('alertify', {
        'mode': 'init',
        'defaults': {
            'type': 'alert',
            'theme': 'bootstrap'
        },
        'init': function() {
            if (typeof alertify === 'undefined') {
                return;
            }
            var _alertify = $.components.getDefaults('alertify');
            $(document).on('click.site.alertify', '[data-plugin="alertify"]', function() {
                var _this = $(this),
                    _0x3714f6 = $.extend( !! [], {}, _alertify, _this.data());
                if (_0x3714f6['labelOk']) {
                    _0x3714f6['okBtn'] = _0x3714f6['labelOk'];
                }
                if (_0x3714f6['labelCancel']) {
                    _0x3714f6['cancelBtn'] = _0x3714f6['labelCancel'];
                }
                if (typeof _0x3714f6['delay'] !== 'undefined') {
                    alertify['delay'](_0x3714f6['delay']);
                }
                if (typeof _0x3714f6['theme'] !== 'undefined') {
                    alertify['theme'](_0x3714f6['theme']);
                }
                if (typeof _0x3714f6['cancelBtn'] !== 'undefined') {
                    alertify['cancelBtn'](_0x3714f6['cancelBtn']);
                }
                if (typeof _0x3714f6['okBtn'] !== 'undefined') {
                    alertify['okBtn'](_0x3714f6['okBtn']);
                }
                if (typeof _0x3714f6['placeholder'] !== 'undefined') {
                    alertify['delay'](_0x3714f6['placeholder']);
                }
                if (typeof _0x3714f6['defaultValue'] !== 'undefined') {
                    alertify['delay'](_0x3714f6['defaultValue']);
                }
                if (typeof _0x3714f6['maxLogItems'] !== 'undefined') {
                    alertify['delay'](_0x3714f6['maxLogItems']);
                }
                if (typeof _0x3714f6['closeLogOnClick'] !== 'undefined') {
                    alertify['delay'](_0x3714f6['closeLogOnClick']);
                }
                switch (_0x3714f6['type']) {
                    case 'alert':
                        alertify['alert'](_0x3714f6['alertMessage']);
                        break;
                    case 'confirm':
                        alertify['confirm'](_0x3714f6['confirmTitle'], function() {
                            alertify['success'](_0x3714f6['successMessage']);
                        }, function() {
                            alertify['error'](_0x3714f6['errorMessage']);
                        });
                        break;
                    case 'prompt':
                        alertify['prompt'](_0x3714f6['promptTitle'], function(_0x1f5331) {
                            var _0x27c53b = _0x3714f6['successMessage']['replace']('%s', _0x1f5331);
                            alertify['success'](_0x27c53b);
                        }, function() {
                            alertify['error'](_0x3714f6['errorMessage']);
                        });
                        break;
                    case 'log':
                        alertify['log'](_0x3714f6['logMessage']);
                        break;
                    case 'success':
                        alertify['success'](_0x3714f6['successMessage']);
                        break;
                    case 'error':
                        alertify['error'](_0x3714f6['errorMessage']);
                        break;
                }
            });
        }
    });
}());
