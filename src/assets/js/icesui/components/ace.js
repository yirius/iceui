/**
 * Created by yangyuance1 on 2017/11/17.
 */
(function() {
    'use strict';
    $.components.register('ace', {
        'mode': 'init',
        'defaults': {},
        'init': function(parent) {
            if (typeof ace === 'undefined') {
                return;
            }
            ace.config.loadModule('ace/ext/language_tools');
            $('[data-plugin="ace"]', parent).each(function() {
                var _id = $(this).attr('id'),
                    _mode = $(this).data('mode'),
                    _theme = $(this).data('theme'),
                    _editFuncs = ace.edit(_id);
                _editFuncs['container']['style']['opacity'] = '';
                if (_mode) {
                    _editFuncs['session']['setMode']('ace/mode/' + _mode);
                }
                if (_theme) {
                    _editFuncs['setTheme']('ace/theme/' + _theme);
                }
                _editFuncs.setOption('maxLines', 0x28);
                _editFuncs.setAutoScrollEditorIntoView( !! []);
                ace.config.loadModule('ace/ext/language_tools', function() {
                    _editFuncs['setOptions']({
                        'enableSnippets': !! [],
                        'enableBasicAutocompletion': !! []
                    });
                });
            });
        }
    });
}());
