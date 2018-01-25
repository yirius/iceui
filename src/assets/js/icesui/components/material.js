(function() {
    'use strict';
    $.components.register('material', {
        'init': function(scope) {
            $('.form-material', scope).each(function() {
                var _this = $(this);
                if (_this.data('material') === !! []) {
                    return;
                }
                var _controls = _this.find('.form-control');
                if (_controls.attr('data-hint')) {
                    _controls.after('<div class=hint>' + _controls.attr('data-hint') + '</div>');
                }
                if (_this.hasClass('floating')) {
                    if (_controls.hasClass('floating-label')) {
                        var _placeholder = _controls.attr('placeholder');
                        _controls.attr('placeholder', null).removeClass('floating-label');
                        _controls.after('<div class=floating-label>' + _placeholder + '</div>');
                    }
                    if (_controls.val() === null || _controls.val() === 'undefined' || _controls.val() === '') {
                        _controls.addClass('empty');
                    }
                }
                if (_controls.next().is('[type=file]')) {
                    _this.addClass('form-material-file');
                }
                _this.data('material', true);
            });
        },
        'api': function() {
            function _hotkey(_keys) {
                if (typeof _keys['which'] === 'undefined') {
                    return true;
                } else if (typeof _keys['which'] === 'number' && _keys['which'] > 0) {
                    return !_keys['ctrlKey'] && !_keys['metaKey'] && !_keys['altKey'] && _keys['which'] !== 8 && _keys['which'] !== 9;
                }
                return false;
            }
            $(document).on('keydown.site.material paste.site.material', '.form-control', function(key) {
                if (_hotkey(key)) {
                    $(this).removeClass('empty');
                }
            }).on('keyup.site.material change.site.material', '.form-control', function() {
                var _this = $(this);
                if (_this.val() === '' && (typeof _this[0]['checkValidity'] !== 'undefined' && _this[0]checkValidity())) {
                    _this.addClass('empty');
                } else {
                    _this.removeClass('empty');
                }
            }).on('focus', '.form-material-file', function() {
                $(this).find('input').addClass('focus');
            }).on('blur', '.form-material-file', function() {
                $(this).find('input').removeClass('focus');
            }).on('change', '.form-material-file [type=file]', function() {
                var _this = $(this);
                var _filenames = '';
                $.each(_this[0]['files'], function(name, value) {
                    _filenames += value['name'] + ', ';
                });
                _filenames = _filenames.substring(0, _filenames.length - 2);
                if (_filenames) {
                    _this.prev().removeClass('empty');
                } else {
                    _this.prev().addClass('empty');
                }
                _this.prev().val(_filenames);
            });
        }
    });
}());
