(function() {
    'use strict';
    $.components.register('panel', {
        'api': function() {
            var _document = $(document);
            _document.off('click.site.panel');
            _document.on('click.site.panel', '[data-toggle="panel-fullscreen"]', function(e) {
                e.preventDefault();
                var _this = $(this),
                    _panel = _this.closest('.panel');
                var _panelApi = _panel.data('panel-api');
                _panelApi.toggleFullscreen();
            });
            _document.on('click.site.panel', '[data-toggle="panel-collapse"]', function(e) {
                e.preventDefault();
                var _this = $(this),
                    _panel = _this.closest('.panel');
                var _panelApi = _panel.data('panel-api');
                _panelApi.toggleContent();
            });
            _document.on('click.site.panel', '[data-toggle="panel-close"]', function(e) {
                e.preventDefault();
                var _this = $(this),
                    _panel = _this.closest('.panel');
                var _panelApi = _panel.data('panel-api');
                _panelApi.close();
            });
            _document.on('click.site.panel', '[data-toggle="panel-refresh"]', function(e) {
                e.preventDefault();
                var _this = $(this);
                var _panel = _this.closest('.panel');
                var _panelApi = _panel.data('panel-api');
                var _callback = _this.data('loadCallback');
                if ($['isFunction'](window[_callback])) {
                    _panelApi.load(window[_callback]);
                } else {
                    _panelApi.load();
                }
            });
        },
        'init': function(scope) {
            $('.panel', scope).each(function() {
                var _this = $(this);
                var _isLeaveFull = false;
                var _isOpen = false;
                var _isshowContent = false;
                var _isCallFuncs = false;
                var _FullScreenPanel = _this.find('[data-toggle="panel-fullscreen"]');
                var _CollapseScreenPanel = _this.find('[data-toggle="panel-collapse"]');
                var _loading;
                var __this = this;
                if (_this.hasClass('is-collapse')) {
                    _isshowContent = true;
                }
                var _api = {
                    'load': function(callfuncs) {
                        var _loaderType = _this.data('loader-type');
                        if (!_loaderType) {
                            _loaderType = 'default';
                        }
                        _loading = $('<div class="panel-loading">' + '<div class="loader loader-' + _loaderType + '"></div>' + '</div>');
                        _loading.appendTo(_this);
                        _this.addClass('is-loading');
                        _this.trigger('loading.uikit.panel');
                        _isCallFuncs = true;
                        if ($.isFunction(callfuncs)) {
                            callfuncs.call(__this, this['done']);
                        }
                    },
                    'done': function() {
                        if (_isCallFuncs === true) {
                            _loading.remove();
                            _this.removeClass('is-loading');
                            _this.trigger('loading.done.uikit.panel');
                        }
                    },
                    'toggleContent': function() {
                        if (_isshowContent) {
                            this.showContent();
                        } else {
                            this.hideContent();
                        }
                    },
                    'showContent': function() {
                        if (_isshowContent !== false) {
                            _this.removeClass('is-collapse');
                            if (_CollapseScreenPanel.hasClass('wb-plus')) {
                                _CollapseScreenPanel.removeClass('wb-plus').addClass('wb-minus');
                            }
                            _this.trigger('shown.uikit.panel');
                            _isshowContent = false;
                        }
                    },
                    'hideContent': function() {
                        if (_isshowContent !== true) {
                            _this.addClass('is-collapse');
                            if (_CollapseScreenPanel.hasClass('wb-minus')) {
                                _CollapseScreenPanel.removeClass('wb-minus').addClass('wb-plus');
                            }
                            _this.trigger('hidden.uikit.panel');
                            _isshowContent = true;
                        }
                    },
                    'toggleFullscreen': function() {
                        if (_isLeaveFull) {
                            this.leaveFullscreen();
                        } else {
                            this.enterFullscreen();
                        }
                    },
                    'enterFullscreen': function() {
                        if (_isLeaveFull !== true) {
                            _this.addClass('is-fullscreen');
                            if (_FullScreenPanel.hasClass('wb-expand')) {
                                _FullScreenPanel.removeClass('wb-expand').addClass('wb-contract');
                            }
                            _this.trigger('enter.fullscreen.uikit.panel');
                            _isLeaveFull = true;
                        }
                    },
                    'leaveFullscreen': function() {
                        if (_isLeaveFull !== false) {
                            _this.removeClass('is-fullscreen');
                            if (_FullScreenPanel.hasClass('wb-contract')) {
                                _FullScreenPanel.removeClass('wb-contract').addClass('wb-expand');
                            }
                            _this.trigger('leave.fullscreen.uikit.panel');
                            _isLeaveFull = false;
                        }
                    },
                    'toggle': function() {
                        if (_isOpen) {
                            this.open();
                        } else {
                            this.close();
                        }
                    },
                    'open': function() {
                        if (_isOpen !== false) {
                            _this.removeClass('is-close');
                            _this.trigger('open.uikit.panel');
                            _isOpen = false;
                        }
                    },
                    'close': function() {
                        if (_isOpen !== true) {
                            _this.addClass('is-close');
                            _this.trigger('close.uikit.panel');
                            _isOpen = true;
                        }
                    }
                };
                _this.data('panel-api', _api);
            });
        }
    });
}());
