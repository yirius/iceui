(function() {
    'use strict';
    $.components.register('table', {
        'mode': 'api',
        'api': function() {
            var _ontoustart = typeof document['ontouchstart'] !== 'undefined',
                _event = 'click';
            if (_ontoustart) {
                _event = 'touchstart';
            }
            $(document).on(_event, '.table-section', function(e) {
                if ('checkbox' !== e.target.type && 'button' !== e.target.type && 'a' !== e.target.tagName.toLowerCase() && !$(e.target).parent('div.checkbox-custom').length) {
                    if ($(this).hasClass('active')) {
                        $(this).removeClass('active');
                    } else {
                        $(this).siblings('.table-section').removeClass('active');
                        $(this).addClass('active');
                    }
                }
            });
        }
    });
}());
