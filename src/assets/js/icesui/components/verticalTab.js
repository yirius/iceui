(function() {
    'use strict';
    $.components.register('verticalTab', {
        'mode': 'init',
        'init': function(scope) {
            if (!$.fn['matchHeight']) {
                return;
            }
            $('.nav-tabs-vertical', scope).each(function() {
                $(this).children().matchHeight();
            });
        }
    });
    $.components.register('horizontalTab', {
        'mode': 'init',
        'init': function(scope) {
            if (!$.fn['responsiveHorizontalTabs']) {
                return;
            }
            var navTabs = $('[data-approve="nav-tabs"]', scope);
            navTabs.each(function() {
                var _this = $(this),
                    _config = $.extend( true, {}, _this.data());
                _this.responsiveHorizontalTabs(_config);
            });
        }
    });
}());
