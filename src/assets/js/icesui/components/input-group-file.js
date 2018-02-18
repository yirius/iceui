(function() {
    'use strict';
    $.components.register('input-group-file', {
        'api': function() {
            $(document).on('change', '.input-group-file [type=file]', function() {
                var _this = $(this);
                var _controls = $(this).parents('.input-group-file').find('.form-control');
                var _filenames = '';
                $.each(_this[0]['files'], function(name, value) {
                    _filenames += value['name'] + ', ';
                });
                _filenames = _filenames.substring(0, _filenames.length - 2);
                _controls.val(_filenames);
            });
        }
    });
}());
