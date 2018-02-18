(function() {
    'use strict';
    $.components.register('highlight', {
        'mode': 'init',
        'defaults': {},
        'init': function(scope) {
            if (typeof hljs === 'undefined') {
                return;
            }
            $('[data-plugin="highlight"]', scope).each(function(name, value) {
                hljs.highlightBlock(value);
            });
        }
    });
}());
