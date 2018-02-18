(function() {
    'use strict';
    $.components.register('timepicker', {
        'mode': 'default',
        'defaults': {
            'lang': {
                'am': '上午',
                'pm': '下午',
                'AM': '上午',
                'PM': '下午',
                'decimal': '.',
                'mins': '分钟',
                'hr': '小时',
                'hrs': '小时'
            },
            'timeFormat': 'ag:i'
        }
    });
}());
