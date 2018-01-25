(function() {
    'use strict';
    $.components.register('slidePanel', {
        'mode': 'manual',
        'defaults': {
            'closeSelector': '.slidePanel-close',
            'mouseDragHandler': '.slidePanel-handler',
            'loading': {
                'template': function(value) {
                    return '<div class="' + value['classes']['loading'] + '">' + '<div class="loader loader-default"></div>' + '</div>';
                },
                'showCallback': function(value) {
                    this['$el'].addClass(value['classes']['loading'] + '-show');
                },
                'hideCallback': function(value) {
                    this['$el'].removeClass(value['classes']['loading'] + '-show');
                }
            }
        }
    });
}());
