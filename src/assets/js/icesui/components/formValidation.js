/**
 * Created by yangyuance1 on 2017/11/17.
 */
(function() {
    'use strict';
    $.components.register('formValidation', {
        'mode': 'default',
        'defaults': {
            'locale': 'zh_CN',
            'framework': 'bootstrap',
            'excluded': ':disabled',
            'icon': {
                'valid': 'icon wb-check',
                'invalid': 'icon wb-close',
                'validating': 'icon wb-refresh'
            }
        }
    });
}());
