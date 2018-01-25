/**
 * Created by yangyuance1 on 2017/11/17.
 */
(function() {
    'use strict';
    $.components.register('formatter', {
        'mode': 'init',
        'defaults': {
            'persistent': true
        },
        'init': function(scope) {
            if (!$.fn['formatter']) {
                return;
            }
            var _default = $.components.getDefaults('formatter'),
                userAgent = navigator.userAgent.toLowerCase(),
                _canPersistent;
            if (/msie/i .test(userAgent) && !/opera/ .test(userAgent)) {
                _canPersistent = {
                    'persistent': false
                };
            } else {
                _canPersistent = {};
            }
            $('[data-plugin="formatter"]', scope).each(function() {
                var _config = $.extend({}, _default, _canPersistent, $(this).data());
                if (_config['pattern']) {
                    _config['pattern'] = _config['pattern']['replace'](/\[\[/g, '{{')['replace'](/\]\]/g, '}}');
                }
                $(this).formatter(_config);
            });
        }
    });
}());
