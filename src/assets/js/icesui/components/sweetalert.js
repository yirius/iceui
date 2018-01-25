/**
 * Created by yangyuance1 on 2017/11/17.
 */
(function() {
    'use strict';
    $.components.register('sweetalert', {
        'mode': 'api',
        'defaults': {
            'confirmButtonText': '确定',
            'cancelButtonText': '取消'
        },
        'api': function() {
            if (typeof swal === 'undefined') {
                return;
            }
            var _default = $.components.getDefaults('sweetalert');
            $(document).on('click.site.sweetalert', '[data-plugin="sweetalert"]', function() {
                var _config = $['extend'](true, {}, _default, $(this).data());
                swal(_config);
            });
        }
    });
}());
