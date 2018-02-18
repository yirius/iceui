/**
 * Created by yangyuance1 on 2017/11/17.
 */
(function() {
    'use strict';
    $.components.register('buttons', {
        'mode': 'api',
        'defaults': {},
        'api': function() {
            $(document)['on']('click.site.loading', '[data-loading-text]', function() {
                var _this = $(this),
                    _text = _this.text(),
                    _decount = 20,
                    _loadingText = _this.data('loadingText');
                _this.text(_loadingText + '(' + _decount + ')').css('opacity', '.6');
                var _interval = setInterval(function() {
                    _this.text(_loadingText + '(' + --_decount + ')');
                    if (_decount === 0) {
                        clearInterval(_interval);
                        _this.text(_text).css('opacity', '1');
                    }
                }, 1000);
            });
            $(document).on('click.site.morebutton', '[data-more]', function() {
                var _moew = $($(this).data('more'));
                _moew.toggleClass('show');
            });
        }
    });
}());
