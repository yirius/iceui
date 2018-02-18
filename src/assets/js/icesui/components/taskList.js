(function() {
    'use strict';
    $.components.register('taskList', {
        'mode': 'api',
        'api': function() {
            $(document).on('change.site.task', '[data-role="task"]', function() {
                var _this = $(this),
                    _checkboxs = _this.find('[type="checkbox"]');
                if (_checkboxs.is(':checked')) {
                    _this.addClass('task-done');
                } else {
                    _this.removeClass('task-done');
                }
            });
            $('[data-role="task"]').trigger('change.site.task');
        }
    });
}());
