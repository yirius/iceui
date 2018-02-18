/**
 * Created by yangyuance1 on 2017/11/17.
 */
(function() {
    'use strict';
    $.components.register('dataTable', {
        'defaults': {
            'responsive': true,
            'dom': '<\x27row\x27<\x27col-xs-6\x27<\x27hidden-xs\x27l>><\x27col-xs-6\x27f>>' + '<\x27row\x27<\x27col-xs-12\x27tr>>' + '<\x27row\x27<\x27col-sm-5\x27i><\x27col-sm-7\x27p>>',
            'language': {
                'sSearchPlaceholder': '快速查找',
                'lengthMenu': '每页显示 _MENU_ 条',
                'search': '_INPUT_',
                'info': '第 _START_ 至 _END_ 项，共 _TOTAL_ 项',
                'infoEmpty': '共 0 项',
                'emptyTable': '无数据',
                'zeroRecords': '抱歉，没有找到符合条件的记录',
                'sInfoFiltered': '(从 _MAX_ 条记录中查找)',
                'loadingRecords': '加载中，请稍后…',
                'processing': '正在处理，请稍后…',
                'paginate': {
                    'first': '第一页',
                    'last': '最后一页',
                    'previous': '<i class="icon wb-chevron-left-mini"></i>',
                    'next': '<i class="icon wb-chevron-right-mini"></i>'
                },
                'aria': {
                    'sortAscending': '升序排列',
                    'sortDescending': '降序排列'
                }
            }
        },
        'init': function(scope) {
            if (!$.fn['dataTable']) {
                return;
            }
            var _default = this.defaults;
            $('[data-plugin="dataTable"]', scope).each(function() {
                var _config = $.extend( !! [], {}, _default, $(this).data());
                $(this).dataTable(_config);
            });
        }
    });
}());
