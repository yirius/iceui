/**
 * Created by yangyuance1 on 2017/11/17.
 */
(function() {
    'use strict';
    $.components.register('toastr', {
        'mode': 'api',
        'defaults': {},
        'api': function() {
            if (typeof toastr === 'undefined') {
                return;
            }
            var _toastr = $.components.getDefaults('toastr');
            $('#admui-pageContent').on('click.site.toastr', '[data-plugin="toastr"]', function(e) {
                e.preventDefault();
                var _this = $(this);
                var _extend = $.extend(true, {}, _toastr, _this.data());
                var _message = _extend['message'] || '';
                var _type = _extend['type'] || 'info';
                var _title = _extend['title'] || undefined;
                switch (_type) {
                    case 'success':
                        toastr.success(_message, _title, _extend);
                        break;
                    case 'warning':
                        toastr.warning(_message, _title, _extend);
                        break;
                    case 'error':
                        toastr.error(_message, _title, _extend);
                        break;
                    case 'info':
                        toastr.info(_message, _title, _extend);
                        break;
                    default:
                        toastr.info(_message, _title, _extend);
                }
            });
        }
    });
}());
