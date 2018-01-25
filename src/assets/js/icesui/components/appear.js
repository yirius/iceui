(function() {
    'use strict';
    $.components.register('appear', {
        'defaults': {},
        'api': function() {
            if (!$.fn['appear']) {
                return;
            }
            $('#admui-pageContent').on('appear', '[data-plugin="appear"]', function() {
                var _this = $(this),
                    _animate = _this.data('animate');
                if (_this.hasClass('appear-no-repeat')) {
                    return;
                }
                _this.removeClass('invisible').addClass('animation-' + _animate);
                if (_this.data('repeat') === ![]) {
                    _this.addClass('appear-no-repeat');
                }
            });
            $('#admui-pageContent').on('disappear', '[data-plugin="appear"]', function() {
                var _this = $(this),
                    _animate = _this.data('animate');
                if (_this.hasClass('appear-no-repeat')) {
                    return;
                }
                _this.addClass('invisible').removeClass('animation-' + _animate);
            });
        },
        'init': function(scope) {
            if (!$.fn['appear']) {
                return;
            }
            var _default = $.components.getDefaults('appear');
            $('[data-plugin="appear"]', scope).appear(_default);
            $('[data-plugin="appear"]', scope).not(':appeared').addClass('invisible');
        }
    });
}());
