(function() {
    'use strict';
    $.components.register('editableTable', {
        'mode': 'init',
        'init': function(scope) {
            if (!$.fn['editableTableWidget']) {
                return;
            }
            var _default = $.components.getDefaults('editableTable');
            $('[data-plugin="editableTable"]', scope).each(function() {
                var _config = $.extend(true, {}, _default, $(this).data());
                $(this).editableTableWidget(_config);
            });
        }
    });
}());
