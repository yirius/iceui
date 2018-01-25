(function() {
    'use strict';
    $.components.register('filterable', {
        'mode': 'init',
        'defaults': {
            'animationOptions': {
                'duration': 0x2ee,
                'easing': 'linear',
                'queue': false
            }
        },
        'init': function(scope) {
            if (typeof $.fn['isotope'] === 'undefined') {
                return;
            }
            var _default = $.components.getDefaults('filterable');
            var _filterable = function() {
                $('[data-filterable]', scope).each(function() {
                    var _this = $(this);
                    var _0x54cc44 = $.extend(true, {}, _default, _this.data(), {
                        'filter': '*'
                    });
                    _this.isotope(_0x54cc44);
                });
                $('[data-filter]', scope).click(function(e) {
                    var _this = $(this);
                    var _target = _this.data('target');
                    var _pli = _this.parent('li');
                    if (!_target) {
                        _target = _this.attr('href');
                        _target = _target && _target.replace(/.*(?=#[^\s]*$)/, '');
                    }
                    _pli.siblings('.active').each(function() {
                        $(this).find('a').attr('aria-expanded', false);
                        $(this).removeClass('active');
                    });
                    _pli.addClass('active');
                    _this.attr('aria-expanded', true);
                    var _that = $(_target, scope);
                    var _datafilter = _this.attr('data-filter');
                    if (_datafilter !== '*') {
                        _datafilter = '[data-type="' + _datafilter + '"]';
                    }
                    _that.isotope({
                        'filter': _datafilter
                    });
                    e.preventDefault();
                });
            };
            if (scope !== document) {
                _filterable();
            } else {
                $(window).on('load', function() {
                    _filterable();
                });
            }
        }
    });
}());
