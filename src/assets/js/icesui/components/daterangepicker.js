/**
 * Created by yangyuance1 on 2017/11/17.
 */
(function() {
    'use strict';
    $.components.register('daterangepicker', {
        'defaults': {
            'locale': {
                'format': 'YYYY-MM-DD',
                'separator': ' 至 ',
                'applyLabel': '确定',
                'cancelLabel': '取消',
                'fromLabel': '从',
                'toLabel': '到',
                'customRangeLabel': '自定义',
                'weekLabel': 'W',
                'daysOfWeek': ['日', '一', '二', '三', '四', '五', '六'],
                'monthNames': ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
                'firstDay': 1
            },
            'alwaysShowCalendars': true
        },
        'init': function(scope) {
            if (!$.fn['daterangepicker']) {
                return;
            }
            var _default = $.components.getDefaults('daterangepicker');
            var _configs = {
                'ranges': {
                    '今天': [moment(), moment()],
                    '昨天': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
                    '最近7天': [moment().subtract(6, 'days'), moment()],
                    '最近30天': [moment().subtract(29, 'days'), moment()],
                    '本月': [moment().startOf('month'), moment().endOf('month')],
                    '上月': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
                }
            };
            $('[data-plugin="daterangepicker"]', scope).each(function() {
                var _config = $.extend(true, {}, _default, _configs, $(this).data());
                $(this).daterangepicker(_config);
            });
        }
    });
}());
