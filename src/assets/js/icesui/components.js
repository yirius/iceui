(function(_0x3a4244, _0x201f2b, jQuery) {
    'use strict';
    jQuery.components.register('ace', {
        'mode': 'init',
        'defaults': {},
        'init': function(_0x27ae4d) {
            if (typeof ace === 'undefined') {
                return;
            }
            ace['config']['loadModule']('ace/ext/language_tools');
            jQuery('[data-plugin=\x22ace\x22]', _0x27ae4d)['each'](function() {
                var _0x530767 = jQuery(this)['attr']('id'),
                    _0x3329df = jQuery(this)['data']('mode'),
                    _0x5f2693 = jQuery(this)['data']('theme'),
                    _0x4a9d79 = ace['edit'](_0x530767);
                _0x4a9d79['container']['style']['opacity'] = '';
                if (_0x3329df) {
                    _0x4a9d79['session']['setMode']('ace/mode/' + _0x3329df);
                }
                if (_0x5f2693) {
                    _0x4a9d79['setTheme']('ace/theme/' + _0x5f2693);
                }
                _0x4a9d79['setOption']('maxLines', 0x28);
                _0x4a9d79['setAutoScrollEditorIntoView']( !! []);
                ace['config']['loadModule']('ace/ext/language_tools',
                    function() {
                        _0x4a9d79['setOptions']({
                            'enableSnippets': !![],
                            'enableBasicAutocompletion': !![]
                        });
                    });
            });
        }
    });
} (window, document, jQuery)); (function(_0x568a3a, _0x4c0948, _0x35ff2d) {
    'use strict';
    _0x35ff2d.components.register('alertify', {
        'mode': 'init',
        'defaults': {
            'type': 'alert',
            'theme': 'bootstrap'
        },
        'init': function() {
            if (typeof alertify === 'undefined') {
                return;
            }
            var _0x3a55f3 = _0x35ff2d.components['getDefaults']('alertify');
            _0x35ff2d(_0x4c0948)['on']('click.site.alertify', '[data-plugin="alertify"]',
                function() {
                    var _0x622ea8 = _0x35ff2d(this),
                        _0x3714f6 = _0x35ff2d['extend']( !! [], {},
                            _0x3a55f3, _0x622ea8['data']());
                    if (_0x3714f6['labelOk']) {
                        _0x3714f6['okBtn'] = _0x3714f6['labelOk'];
                    }
                    if (_0x3714f6['labelCancel']) {
                        _0x3714f6['cancelBtn'] = _0x3714f6['labelCancel'];
                    }
                    if (typeof _0x3714f6['delay'] !== 'undefined') {
                        alertify['delay'](_0x3714f6['delay']);
                    }
                    if (typeof _0x3714f6['theme'] !== 'undefined') {
                        alertify['theme'](_0x3714f6['theme']);
                    }
                    if (typeof _0x3714f6['cancelBtn'] !== 'undefined') {
                        alertify['cancelBtn'](_0x3714f6['cancelBtn']);
                    }
                    if (typeof _0x3714f6['okBtn'] !== 'undefined') {
                        alertify['okBtn'](_0x3714f6['okBtn']);
                    }
                    if (typeof _0x3714f6['placeholder'] !== 'undefined') {
                        alertify['delay'](_0x3714f6['placeholder']);
                    }
                    if (typeof _0x3714f6['defaultValue'] !== 'undefined') {
                        alertify['delay'](_0x3714f6['defaultValue']);
                    }
                    if (typeof _0x3714f6['maxLogItems'] !== 'undefined') {
                        alertify['delay'](_0x3714f6['maxLogItems']);
                    }
                    if (typeof _0x3714f6['closeLogOnClick'] !== 'undefined') {
                        alertify['delay'](_0x3714f6['closeLogOnClick']);
                    }
                    switch (_0x3714f6['type']) {
                        case 'alert':
                            alertify['alert'](_0x3714f6['alertMessage']);
                            break;
                        case 'confirm':
                            alertify['confirm'](_0x3714f6['confirmTitle'],
                                function() {
                                    alertify['success'](_0x3714f6['successMessage']);
                                },
                                function() {
                                    alertify['error'](_0x3714f6['errorMessage']);
                                });
                            break;
                        case 'prompt':
                            alertify['prompt'](_0x3714f6['promptTitle'],
                                function(_0x1f5331) {
                                    var _0x27c53b = _0x3714f6['successMessage']['replace']('%s', _0x1f5331);
                                    alertify['success'](_0x27c53b);
                                },
                                function() {
                                    alertify['error'](_0x3714f6['errorMessage']);
                                });
                            break;
                        case 'log':
                            alertify['log'](_0x3714f6['logMessage']);
                            break;
                        case 'success':
                            alertify['success'](_0x3714f6['successMessage']);
                            break;
                        case 'error':
                            alertify['error'](_0x3714f6['errorMessage']);
                            break;
                    }
                });
        }
    });
} (window, document, jQuery)); (function(_0x3a7f0d, _0x1acfb6, _0x4e3cab) {
    'use strict';
    _0x4e3cab.components.register('animate-list', {
        'mode': 'init',
        'defaults': {
            'child': '.panel',
            'duration': 0xfa,
            'delay': 0x32,
            'animate': 'scale-up',
            'fill': 'backwards'
        },
        'init': function() {
            var _0x4ce1e7 = this;
            _0x4e3cab('[data-plugin=animateList]')['each'](function() {
                var _0x8b6230 = _0x4e3cab(this),
                    _0x105416 = _0x4e3cab['extend']({},
                        _0x4ce1e7['defaults'], _0x8b6230['data'](), !![]);
                var _0x511851 = function(_0x4ae2cf, _0x3b1797) {
                    this['options'] = _0x3b1797;
                    this['$children'] = _0x4ae2cf['find'](_0x3b1797['child']);
                    this['$children']['addClass']('animation-' + _0x3b1797['animate']);
                    this['$children']['css']('animation-fill-mode', _0x3b1797['fill']);
                    this['$children']['css']('animation-duration', _0x3b1797['duration'] + 'ms');
                    var _0x14340d = 0x0,
                        _0x47ec1b = this;
                    this['$children']['each'](function() {
                        _0x4e3cab(this)['css']('animation-delay', _0x14340d + 'ms');
                        _0x14340d += _0x47ec1b['options']['delay'];
                    });
                };
                _0x511851['prototype'] = {
                    'run': function(_0x1b2eb0) {
                        var _0x5207e3 = this;
                        this['$children']['removeClass']('animation-' + this['options']['animate']);
                        if (typeof _0x1b2eb0 !== 'undefined') {
                            this['options']['animate'] = _0x1b2eb0;
                        }
                        setTimeout(function() {
                                _0x5207e3['$children']['addClass']('animation-' + _0x5207e3['options']['animate']);
                            },
                            0x0);
                    }
                };
                _0x8b6230['data']('animateList', new _0x511851(_0x8b6230, _0x105416));
            });
        }
    });
} (window, document, jQuery)); (function(_0x5444eb, _0x1edaa9, _0x21b4fb) {
    'use strict';
    _0x21b4fb.components.register('bootbox', {
        'mode': 'init',
        'defaults': {
            'message': '',
            'locale': 'zh_CN'
        },
        'init': function() {
            if (typeof bootbox === 'undefined') {
                return;
            }
            var _0xf055ce = _0x21b4fb.components['getDefaults']('bootbox');
            _0x21b4fb(_0x1edaa9)['on']('click.site.bootbox', '[data-plugin="bootbox"]',
                function() {
                    var _0x9a9dab = _0x21b4fb(this),
                        _0x2429e6 = _0x9a9dab['data']();
                    _0x2429e6 = _0x21b4fb['extend']( !! [], {},
                        _0xf055ce, _0x2429e6);
                    if (_0x2429e6['classname']) {
                        _0x2429e6['className'] = _0x2429e6['classname'];
                    }
                    if (typeof _0x2429e6['callback'] === 'string' && _0x21b4fb['isFunction'](_0x5444eb[_0x2429e6['callback']])) {
                        _0x2429e6['callback'] = _0x5444eb[_0x2429e6['callback']];
                    }
                    if (_0x2429e6['type']) {
                        switch (_0x2429e6['type']) {
                            case 'alert':
                                bootbox['alert'](_0x2429e6);
                                break;
                            case 'confirm':
                                bootbox['confirm'](_0x2429e6);
                                break;
                            case 'prompt':
                                bootbox['prompt'](_0x2429e6);
                                break;
                            default:
                                bootbox['dialog'](_0x2429e6);
                        }
                    } else {
                        bootbox['dialog'](_0x2429e6);
                    }
                });
        }
    });
} (window, document, jQuery)); (function(_0xb0bf4c, _0x361ac8, _0x40d912) {
    'use strict';
    _0x40d912.components.register('colorpicker', {
        'defaults': {},
        'mode': 'default'
    });
} (window, document, jQuery)); (function(_0xb4f8fb, _0x18c9dc, _0x4be2c0) {
    'use strict';
    _0x4be2c0.components.register('datepicker', {
        'mode': 'default',
        'defaults': {
            'autoclose': !![]
        }
    });
} (window, document, jQuery)); (function(_0x379912, _0x3d3568, _0x5411c2) {
    'use strict';
    _0x5411c2.components.register('daterangepicker', {
        'defaults': {
            'locale': {
                'format': 'YYYY-MM-DD',
                'separator': ' 至 ',
                'applyLabel': '确定',
                'cancelLabel': '取消',
                'fromLabel': '从',
                'toLabel': '到',
                'customRangeLabel': '自定义',
                'weekLabel': 'W',
                'daysOfWeek': ['日', '一', '二', '三', '四', '五', '六'],
                'monthNames': ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
                'firstDay': 0x1
            },
            'alwaysShowCalendars': !![]
        },
        'init': function(_0x53e3c3) {
            if (!_0x5411c2['fn']['daterangepicker']) {
                return;
            }
            var _0x181f09 = _0x5411c2.components['getDefaults']('daterangepicker');
            var _0xdfa29b = {
                'ranges': {
                    '今天': [moment(), moment()],
                    '昨天': [moment()['subtract'](0x1, 'days'), moment()['subtract'](0x1, 'days')],
                    '最近7天': [moment()['subtract'](0x6, 'days'), moment()],
                    '最近30天': [moment()['subtract'](0x1d, 'days'), moment()],
                    '本月': [moment()['startOf']('month'), moment()['endOf']('month')],
                    '上月': [moment()['subtract'](0x1, 'month')['startOf']('month'), moment()['subtract'](0x1, 'month')['endOf']('month')]
                }
            };
            _0x5411c2('[data-plugin="daterangepicker"]', _0x53e3c3)['each'](function() {
                var _0x402b45 = _0x5411c2['extend']( !! [], {},
                    _0x181f09, _0xdfa29b, _0x5411c2(this)['data']());
                _0x5411c2(this)['daterangepicker'](_0x402b45);
            });
        }
    });
} (window, document, jQuery)); (function(_0x284132, _0x261513, _0x566c49) {
    'use strict';
    _0x566c49.components.register('maxlength', {
        'mode': 'default',
        'defaults': {}
    });
} (window, document, jQuery)); (function(_0x263f26, _0x36b000, _0x339141) {
    'use strict';
    _0x339141.components.register('markdown', {
        'mode': 'init',
        'defaults': {
            'autofocus': ![],
            'savable': ![],
            'language': 'zh'
        },
        'init': function(_0x52b94e) {
            if (!_0x339141['fn']['markdown']) {
                return;
            }
            var _0x560e0b = this['defaults'];
            _0x339141('textarea[data-plugin="markdown"]', _0x52b94e)['each'](function() {
                var _0x42de64 = _0x339141['extend']( !! [], {},
                    _0x560e0b, _0x339141(this)['data']());
                _0x339141(this)['markdown'](_0x42de64);
            });
        }
    });
} (window, document, jQuery)); (function(_0x176c7c, _0x34bbd6, _0x1ecc0d) {
    'use strict';
    _0x1ecc0d.components.register('selectpicker', {
        'mode': 'default',
        'defaults': {
            'noneSelectedText': '没有选中任何项',
            'noneResultsText': '没有找到匹配项',
            'countSelectedText': '已选中{1}项中的{0}项',
            'maxOptionsText': ['超出限制\x20(最多选择{n}项)', '组选择超出限制(最多选择{n}组)'],
            'selectAllText': '选择全部',
            'deselectAllText': '取消全部选择',
            'doneButtonText': '关闭',
            'style': 'btn-select',
            'iconBase': 'icon',
            'tickIcon': 'wb-check'
        }
    });
} (window, document, jQuery)); (function(_0x37e3c6, _0x3e78fc, _0x302258) {
    'use strict';
    _0x302258.components.register('bootstrapSlider', {
        'defaults': {},
        'mode': 'default'
    });
} (window, document, jQuery)); (function(_0x13f1e5, _0x3f042b, _0x3a6393) {
    'use strict';
    _0x3a6393.components.register('sweetalert', {
        'mode': 'api',
        'defaults': {
            'confirmButtonText': '确定',
            'cancelButtonText': '取消'
        },
        'api': function() {
            if (typeof swal === 'undefined') {
                return;
            }
            var _0x51cc6c = _0x3a6393.components['getDefaults']('sweetalert');
            _0x3a6393(_0x3f042b)['on']('click.site.sweetalert', '[data-plugin="sweetalert"]',
                function() {
                    var _0x27b3de = _0x3a6393['extend']( !! [], {},
                        _0x51cc6c, _0x3a6393(this)['data']());
                    swal(_0x27b3de);
                });
        }
    });
} (window, document, jQuery)); (function(_0x22eccf, _0x55401c, _0xd7ce2a) {
    'use strict';
    _0xd7ce2a.components.register('tagsinput', {
        'defaults': {
            'tagClass': 'label\x20label-default'
        },
        'mode': 'default'
    });
} (window, document, jQuery)); (function(_0x46ab6c, _0x934f9c, _0x21678a) {
    'use strict';
    _0x21678a.components.register('tokenfield', {
        'mode': 'default',
        'defaults': {}
    });
} (window, document, jQuery)); (function(_0x1b0230, _0x193f6c, _0x251613) {
    'use strict';
    _0x251613.components.register('TouchSpin', {
        'mode': 'default',
        'defaults': {
            'verticalupclass': 'wb-plus',
            'verticaldownclass': 'wb-minus',
            'buttondown_class': 'btn btn-outline btn-default',
            'buttonup_class': 'btn btn-outline btn-default'
        }
    });
} (window, document, jQuery)); (function(_0x41b455, _0x15c5ac, _0x3bfd00) {
    'use strict';
    _0x3bfd00.components.register('buttons', {
        'mode': 'api',
        'defaults': {},
        'api': function() {
            _0x3bfd00(_0x15c5ac)['on']('click.site.loading', '[data-loading-text]',
                function() {
                    var _0x2291d9 = _0x3bfd00(this),
                        _0x38e932 = _0x2291d9['text'](),
                        _0x3b1073 = 0x14,
                        _0x15e7a3 = _0x2291d9['data']('loadingText');
                    _0x2291d9['text'](_0x15e7a3 + '(' + _0x3b1073 + ')')['css']('opacity', '.6');
                    var _0x194784 = setInterval(function() {
                            _0x2291d9['text'](_0x15e7a3 + '(' + --_0x3b1073 + ')');
                            if (_0x3b1073 === 0x0) {
                                clearInterval(_0x194784);
                                _0x2291d9['text'](_0x38e932)['css']('opacity', '1');
                            }
                        },
                        0x3e8);
                });
            _0x3bfd00(_0x15c5ac)['on']('click.site.morebutton', '[data-more]',
                function() {
                    var _0x54ecdd = _0x3bfd00(_0x3bfd00(this)['data']('more'));
                    _0x54ecdd['toggleClass']('show');
                });
        }
    });
} (window, document, jQuery)); (function(_0x5c50b0, _0x29b690, _0x41e140) {
    'use strict';
    _0x41e140.components.register('card', {
        'mode': 'init',
        'defaults': {},
        'init': function(_0x565e8c) {
            if (!_0x41e140['fn']['card']) {
                return;
            }
            var _0x322a47 = _0x41e140.components['getDefaults']('card');
            _0x41e140('[data-plugin=\x22card\x22]', _0x565e8c)['each'](function() {
                var _0x21c5d1 = _0x41e140['extend']({},
                    _0x322a47, _0x41e140(this)['data']());
                if (_0x21c5d1['target']) {
                    _0x21c5d1['container'] = _0x41e140(_0x21c5d1['target']);
                }
                _0x41e140(this)['card'](_0x21c5d1);
            });
        }
    });
} (window, document, jQuery)); (function(_0x107456, _0x9c9850, _0x334d6f) {
    'use strict';
    _0x334d6f.components.register('clockpicker', {
        'mode': 'default'
    });
} (window, document, jQuery)); (function(_0x4e98db, _0x57cf7e, _0x47bf8f) {
    'use strict';
    _0x47bf8f.components.register('dataTable', {
        'defaults': {
            'responsive': !![],
            'dom': '<\x27row\x27<\x27col-xs-6\x27<\x27hidden-xs\x27l>><\x27col-xs-6\x27f>>' + '<\x27row\x27<\x27col-xs-12\x27tr>>' + '<\x27row\x27<\x27col-sm-5\x27i><\x27col-sm-7\x27p>>',
            'language': {
                'sSearchPlaceholder': '快速查找',
                'lengthMenu': '每页显示 _MENU_ 条',
                'search': '_INPUT_',
                'info': '第 _START_ 至 _END_ 项，共 _TOTAL_ 项',
                'infoEmpty': '共 0 项',
                'emptyTable': '无数据',
                'zeroRecords': '抱歉，没有找到符合条件的记录',
                'sInfoFiltered': '(从 _MAX_ 条记录中查找)',
                'loadingRecords': '加载中，请稍后…',
                'processing': '正在处理，请稍后…',
                'paginate': {
                    'first': '第一页',
                    'last': '最后一页',
                    'previous': '<i class="icon wb-chevron-left-mini"></i>',
                    'next': '<i\x20class=\x22icon\x20wb-chevron-right-mini\x22></i>'
                },
                'aria': {
                    'sortAscending': '升序排列',
                    'sortDescending': '降序排列'
                }
            }
        },
        'init': function(_0x52ac53) {
            if (!_0x47bf8f['fn']['dataTable']) {
                return;
            }
            var _0x40c76a = this['defaults'];
            _0x47bf8f('[data-plugin="dataTable"]', _0x52ac53)['each'](function() {
                var _0x28d359 = _0x47bf8f['extend']( !! [], {},
                    _0x40c76a, _0x47bf8f(this)['data']());
                _0x47bf8f(this)['dataTable'](_0x28d359);
            });
        }
    });
} (window, document, jQuery)); (function(_0x34531b, _0x5888b5, _0x58f8d8) {
    'use strict';
    _0x58f8d8.components.register('datepair', {
        'mode': 'default',
        'defaults': {
            'startClass': 'datepair-start',
            'endClass': 'datepair-end',
            'timeClass': 'datepair-time',
            'dateClass': 'datepair-date'
        }
    });
} (window, document, jQuery)); (function(_0x4e01ec, _0x29510a, _0x27b0da) {
    'use strict';
    _0x27b0da.components.register('dropify', {
        'mode': 'default',
        'defaults': {
            'messages': {
                'default': '单击或直接拖动需要上传的文件到此处',
                'replace': '将文件拖放到此处或单击此处替换',
                'remove': '移除',
                'error': '出错了…'
            },
            'error': {
                'fileSize': '文件大小超出限制(文件大小不能超过{{ value }})。',
                'minWidth': '图片宽度太小(不能小于{{ value }}}px)。',
                'maxWidth': '图片宽度太大(不能大于{{ value }}}px)。',
                'minHeight': '图片高度太小(不能小于{{ value }}}px)。',
                'maxHeight': '图片高度太大(不能大于{{ value }}px)。',
                'imageFormat': '图片格式不支持(允许的格式为：{{ value }})。'
            }
        }
    });
} (window, document, jQuery)); (function(_0x18dca2, _0x2cadd8, _0x224f10) {
    'use strict';
    _0x224f10.components.register('editableTable', {
        'mode': 'init',
        'init': function(_0x4e6090) {
            if (!_0x224f10['fn']['editableTableWidget']) {
                return;
            }
            var _0x4abe27 = _0x224f10.components['getDefaults']('editableTable');
            _0x224f10('[data-plugin="editableTable"]', _0x4e6090)['each'](function() {
                var _0x18623d = _0x224f10['extend']( !! [], {},
                    _0x4abe27, _0x224f10(this)['data']());
                _0x224f10(this)['editableTableWidget'](_0x18623d);
            });
        }
    });
} (window, document, jQuery)); (function(_0x59ab6a, _0xd4bf17, _0x45321f) {
    'use strict';
    _0x45321f.components.register('filterable', {
        'mode': 'init',
        'defaults': {
            'animationOptions': {
                'duration': 0x2ee,
                'easing': 'linear',
                'queue': ![]
            }
        },
        'init': function(_0x401e79) {
            if (typeof _0x45321f['fn']['isotope'] === 'undefined') {
                return;
            }
            var _0x1fb2f = _0x45321f.components['getDefaults']('filterable');
            var _0x5d03cb = function() {
                _0x45321f('[data-filterable]', _0x401e79)['each'](function() {
                    var _0x895679 = _0x45321f(this);
                    var _0x54cc44 = _0x45321f['extend']( !! [], {},
                        _0x1fb2f, _0x895679['data'](), {
                            'filter': '*'
                        });
                    _0x895679['isotope'](_0x54cc44);
                });
                _0x45321f('[data-filter]', _0x401e79)['click'](function(_0x2c7acf) {
                    var _0x1e4d1d = _0x45321f(this);
                    var _0x2d05e5 = _0x1e4d1d['data']('target');
                    var _0x427def = _0x1e4d1d['parent']('li');
                    if (!_0x2d05e5) {
                        _0x2d05e5 = _0x1e4d1d['attr']('href');
                        _0x2d05e5 = _0x2d05e5 && _0x2d05e5['replace'](/.*(?=#[^\s]*$)/, '');
                    }
                    _0x427def['siblings']('.active')['each'](function() {
                        _0x45321f(this)['find']('a')['attr']('aria-expanded', ![]);
                        _0x45321f(this)['removeClass']('active');
                    });
                    _0x427def['addClass']('active');
                    _0x1e4d1d['attr']('aria-expanded', !![]);
                    var _0x530d08 = _0x45321f(_0x2d05e5, _0x401e79);
                    var _0x3dc20c = _0x1e4d1d['attr']('data-filter');
                    if (_0x3dc20c !== '*') {
                        _0x3dc20c = '[data-type="' + _0x3dc20c + '\x22]';
                    }
                    _0x530d08['isotope']({
                        'filter': _0x3dc20c
                    });
                    _0x2c7acf['preventDefault']();
                });
            };
            if (_0x401e79 !== _0xd4bf17) {
                _0x5d03cb();
            } else {
                _0x45321f(_0x59ab6a)['on']('load',
                    function() {
                        _0x5d03cb();
                    });
            }
        }
    });
} (window, document, jQuery)); (function(_0x345db6, _0x32481b, _0x1f25c3) {
    'use strict';
    _0x1f25c3.components.register('iconpicker', {
        'mode': 'default',
        'defaults': {
            'fullClassFormatter': function(_0x5287b1) {
                return 'icon ' + _0x5287b1;
            },
            'templates': {
                'popover': '<div class="iconpicker-popover popover"><div class="arrow"></div>' + '<div class="popover-title"></div><div class="popover-content"></div></div>',
                'footer': '<div\x20class=\x22popover-footer\x22></div>',
                'buttons': '<button class="iconpicker-btn iconpicker-btn-cancel btn btn-default btn-sm">取消</button>' + ' <button class="iconpicker-btn iconpicker-btn-accept btn btn-primary btn-sm">确认</button>',
                'search': '<input type="search" class="form-control iconpicker-search" placeholder="查找图标">',
                'iconpicker': '<div class="iconpicker"><div class="iconpicker-items"></div></div>',
                'iconpickerItem': '<a role="button" href="#" class="iconpicker-item"><i></i></a>'
            },
            'icons': ['fa-adjust', 'fa-anchor', 'fa-archive', 'fa-area-chart', 'fa-arrows', 'fa-arrows-h', 'fa-arrows-v', 'fa-asterisk', 'fa-at', 'fa-automobile', 'fa-ban', 'fa-bank', 'fa-bar-chart', 'fa-bar-chart-o', 'fa-barcode', 'fa-bars', 'fa-bed', 'fa-beer', 'fa-bell', 'fa-bell-o', 'fa-bell-slash', 'fa-bell-slash-o', 'fa-bicycle', 'fa-binoculars', 'fa-birthday-cake', 'fa-bolt', 'fa-bomb', 'fa-book', 'fa-bookmark', 'fa-bookmark-o', 'fa-briefcase', 'fa-bug', 'fa-building', 'fa-building-o', 'fa-bullhorn', 'fa-bullseye', 'fa-bus', 'fa-cab', 'fa-calculator', 'fa-calendar', 'fa-calendar-o', 'fa-camera', 'fa-camera-retro', 'fa-car', 'fa-caret-square-o-down', 'fa-caret-square-o-left', 'fa-caret-square-o-right', 'fa-caret-square-o-up', 'fa-cart-arrow-down', 'fa-cart-plus', 'fa-cc', 'fa-certificate', 'fa-check', 'fa-check-circle', 'fa-check-circle-o', 'fa-check-square', 'fa-check-square-o', 'fa-child', 'fa-circle', 'fa-circle-o', 'fa-circle-o-notch', 'fa-circle-thin', 'fa-clock-o', 'fa-close', 'fa-cloud', 'fa-cloud-download', 'fa-cloud-upload', 'fa-code', 'fa-code-fork', 'fa-coffee', 'fa-cog', 'fa-cogs', 'fa-comment', 'fa-comment-o', 'fa-comments', 'fa-comments-o', 'fa-compass', 'fa-copyright', 'fa-credit-card', 'fa-crop', 'fa-crosshairs', 'fa-cube', 'fa-cubes', 'fa-cutlery', 'fa-dashboard', 'fa-database', 'fa-desktop', 'fa-diamond', 'fa-dot-circle-o', 'fa-download', 'fa-edit', 'fa-ellipsis-h', 'fa-ellipsis-v', 'fa-envelope', 'fa-envelope-o', 'fa-envelope-square', 'fa-eraser', 'fa-exchange', 'fa-exclamation', 'fa-exclamation-circle', 'fa-exclamation-triangle', 'fa-external-link', 'fa-external-link-square', 'fa-eye', 'fa-eye-slash', 'fa-eyedropper', 'fa-fax', 'fa-female', 'fa-fighter-jet', 'fa-file-archive-o', 'fa-file-audio-o', 'fa-file-code-o', 'fa-file-excel-o', 'fa-file-image-o', 'fa-file-movie-o', 'fa-file-pdf-o', 'fa-file-photo-o', 'fa-file-picture-o', 'fa-file-powerpoint-o', 'fa-file-sound-o', 'fa-file-video-o', 'fa-file-word-o', 'fa-file-zip-o', 'fa-film', 'fa-filter', 'fa-fire', 'fa-fire-extinguisher', 'fa-flag', 'fa-flag-checkered', 'fa-flag-o', 'fa-flash', 'fa-flask', 'fa-folder', 'fa-folder-o', 'fa-folder-open', 'fa-folder-open-o', 'fa-frown-o', 'fa-futbol-o', 'fa-gamepad', 'fa-gavel', 'fa-gear', 'fa-gears', 'fa-genderless', 'fa-gift', 'fa-glass', 'fa-globe', 'fa-graduation-cap', 'fa-group', 'fa-hdd-o', 'fa-headphones', 'fa-heart', 'fa-heart-o', 'fa-heartbeat', 'fa-history', 'fa-home', 'fa-hotel', 'fa-image', 'fa-inbox', 'fa-info', 'fa-info-circle', 'fa-institution', 'fa-key', 'fa-keyboard-o', 'fa-language', 'fa-laptop', 'fa-leaf', 'fa-legal', 'fa-lemon-o', 'fa-level-down', 'fa-level-up', 'fa-life-bouy', 'fa-life-buoy', 'fa-life-ring', 'fa-life-saver', 'fa-lightbulb-o', 'fa-line-chart', 'fa-location-arrow', 'fa-lock', 'fa-magic', 'fa-magnet', 'fa-mail-forward', 'fa-mail-reply', 'fa-mail-reply-all', 'fa-male', 'fa-map-marker', 'fa-meh-o', 'fa-microphone', 'fa-microphone-slash', 'fa-minus', 'fa-minus-circle', 'fa-minus-square', 'fa-minus-square-o', 'fa-mobile', 'fa-mobile-phone', 'fa-money', 'fa-moon-o', 'fa-mortar-board', 'fa-motorcycle', 'fa-music', 'fa-navicon', 'fa-newspaper-o', 'fa-paint-brush', 'fa-paper-plane', 'fa-paper-plane-o', 'fa-paw', 'fa-pencil', 'fa-pencil-square', 'fa-pencil-square-o', 'fa-phone', 'fa-phone-square', 'fa-photo', 'fa-picture-o', 'fa-pie-chart', 'fa-plane', 'fa-plug', 'fa-plus', 'fa-plus-circle', 'fa-plus-square', 'fa-plus-square-o', 'fa-power-off', 'fa-print', 'fa-puzzle-piece', 'fa-qrcode', 'fa-question', 'fa-question-circle', 'fa-quote-left', 'fa-quote-right', 'fa-random', 'fa-recycle', 'fa-refresh', 'fa-remove', 'fa-reorder', 'fa-reply', 'fa-reply-all', 'fa-retweet', 'fa-road', 'fa-rocket', 'fa-rss', 'fa-rss-square', 'fa-search', 'fa-search-minus', 'fa-search-plus', 'fa-send', 'fa-send-o', 'fa-server', 'fa-share', 'fa-share-alt', 'fa-share-alt-square', 'fa-share-square', 'fa-share-square-o', 'fa-shield', 'fa-ship', 'fa-shopping-cart', 'fa-sign-in', 'fa-sign-out', 'fa-signal', 'fa-sitemap', 'fa-sliders', 'fa-smile-o', 'fa-soccer-ball-o', 'fa-sort', 'fa-sort-alpha-asc', 'fa-sort-alpha-desc', 'fa-sort-amount-asc', 'fa-sort-amount-desc', 'fa-sort-asc', 'fa-sort-desc', 'fa-sort-down', 'fa-sort-numeric-asc', 'fa-sort-numeric-desc', 'fa-sort-up', 'fa-space-shuttle', 'fa-spinner', 'fa-spoon', 'fa-square', 'fa-square-o', 'fa-star', 'fa-star-half', 'fa-star-half-empty', 'fa-star-half-full', 'fa-star-half-o', 'fa-star-o', 'fa-street-view', 'fa-suitcase', 'fa-sun-o', 'fa-support', 'fa-tablet', 'fa-tachometer', 'fa-tag', 'fa-tags', 'fa-tasks', 'fa-taxi', 'fa-terminal', 'fa-thumb-tack', 'fa-thumbs-down', 'fa-thumbs-o-down', 'fa-thumbs-o-up', 'fa-thumbs-up', 'fa-ticket', 'fa-times', 'fa-times-circle', 'fa-times-circle-o', 'fa-tint', 'fa-toggle-down', 'fa-toggle-left', 'fa-toggle-off', 'fa-toggle-on', 'fa-toggle-right', 'fa-toggle-up', 'fa-trash', 'fa-trash-o', 'fa-tree', 'fa-trophy', 'fa-truck', 'fa-tty', 'fa-umbrella', 'fa-university', 'fa-unlock', 'fa-unlock-alt', 'fa-unsorted', 'fa-upload', 'fa-user', 'fa-user-plus', 'fa-user-secret', 'fa-user-times', 'fa-users', 'fa-video-camera', 'fa-volume-down', 'fa-volume-off', 'fa-volume-up', 'fa-warning', 'fa-wheelchair', 'fa-wifi', 'fa-wrench', 'fa-ambulance', 'fa-subway', 'fa-train', 'fa-mars', 'fa-mars-double', 'fa-mars-stroke', 'fa-mars-stroke-h', 'fa-mars-stroke-v', 'fa-mercury', 'fa-neuter', 'fa-transgender', 'fa-transgender-alt', 'fa-venus', 'fa-venus-double', 'fa-venus-mars', 'fa-file', 'fa-file-o', 'fa-file-text', 'fa-file-text-o', 'fa-cc-amex', 'fa-cc-discover', 'fa-cc-mastercard', 'fa-cc-paypal', 'fa-cc-stripe', 'fa-cc-visa', 'fa-google-wallet', 'fa-paypal', 'fa-bitcoin', 'fa-btc', 'fa-cny', 'fa-dollar', 'fa-eur', 'fa-euro', 'fa-gbp', 'fa-ils', 'fa-inr', 'fa-jpy', 'fa-krw', 'fa-rmb', 'fa-rouble', 'fa-rub', 'fa-ruble', 'fa-rupee', 'fa-shekel', 'fa-sheqel', 'fa-try', 'fa-turkish-lira', 'fa-usd', 'fa-won', 'fa-yen', 'fa-align-center', 'fa-align-justify', 'fa-align-left', 'fa-align-right', 'fa-bold', 'fa-chain', 'fa-chain-broken', 'fa-clipboard', 'fa-columns', 'fa-copy', 'fa-cut', 'fa-dedent', 'fa-files-o', 'fa-floppy-o', 'fa-font', 'fa-header', 'fa-indent', 'fa-italic', 'fa-link', 'fa-list', 'fa-list-alt', 'fa-list-ol', 'fa-list-ul', 'fa-outdent', 'fa-paperclip', 'fa-paragraph', 'fa-paste', 'fa-repeat', 'fa-rotate-left', 'fa-rotate-right', 'fa-save', 'fa-scissors', 'fa-strikethrough', 'fa-subscript', 'fa-superscript', 'fa-table', 'fa-text-height', 'fa-text-width', 'fa-th', 'fa-th-large', 'fa-th-list', 'fa-underline', 'fa-undo', 'fa-unlink', 'fa-angle-double-down', 'fa-angle-double-left', 'fa-angle-double-right', 'fa-angle-double-up', 'fa-angle-down', 'fa-angle-left', 'fa-angle-right', 'fa-angle-up', 'fa-arrow-circle-down', 'fa-arrow-circle-left', 'fa-arrow-circle-o-down', 'fa-arrow-circle-o-left', 'fa-arrow-circle-o-right', 'fa-arrow-circle-o-up', 'fa-arrow-circle-right', 'fa-arrow-circle-up', 'fa-arrow-down', 'fa-arrow-left', 'fa-arrow-right', 'fa-arrow-up', 'fa-arrows-alt', 'fa-caret-down', 'fa-caret-left', 'fa-caret-right', 'fa-caret-up', 'fa-chevron-circle-down', 'fa-chevron-circle-left', 'fa-chevron-circle-right', 'fa-chevron-circle-up', 'fa-chevron-down', 'fa-chevron-left', 'fa-chevron-right', 'fa-chevron-up', 'fa-hand-o-down', 'fa-hand-o-left', 'fa-hand-o-right', 'fa-hand-o-up', 'fa-long-arrow-down', 'fa-long-arrow-left', 'fa-long-arrow-right', 'fa-long-arrow-up', 'fa-backward', 'fa-compress', 'fa-eject', 'fa-expand', 'fa-fast-backward', 'fa-fast-forward', 'fa-forward', 'fa-pause', 'fa-play', 'fa-play-circle', 'fa-play-circle-o', 'fa-step-backward', 'fa-step-forward', 'fa-stop', 'fa-youtube-play', 'fa-adn', 'fa-android', 'fa-angellist', 'fa-apple', 'fa-behance', 'fa-behance-square', 'fa-bitbucket', 'fa-bitbucket-square', 'fa-buysellads', 'fa-codepen', 'fa-connectdevelop', 'fa-css3', 'fa-dashcube', 'fa-delicious', 'fa-deviantart', 'fa-digg', 'fa-dribbble', 'fa-dropbox', 'fa-drupal', 'fa-empire', 'fa-facebook', 'fa-facebook-f', 'fa-facebook-official', 'fa-facebook-square', 'fa-flickr', 'fa-forumbee', 'fa-foursquare', 'fa-ge', 'fa-git', 'fa-git-square', 'fa-github', 'fa-github-alt', 'fa-github-square', 'fa-gittip', 'fa-google', 'fa-google-plus', 'fa-google-plus-square', 'fa-gratipay', 'fa-hacker-news', 'fa-html5', 'fa-instagram', 'fa-ioxhost', 'fa-joomla', 'fa-jsfiddle', 'fa-lastfm', 'fa-lastfm-square', 'fa-leanpub', 'fa-linkedin', 'fa-linkedin-square', 'fa-linux', 'fa-maxcdn', 'fa-meanpath', 'fa-medium', 'fa-openid', 'fa-pagelines', 'fa-pied-piper', 'fa-pied-piper-alt', 'fa-pinterest', 'fa-pinterest-p', 'fa-pinterest-square', 'fa-qq', 'fa-ra', 'fa-rebel', 'fa-reddit', 'fa-reddit-square', 'fa-renren', 'fa-sellsy', 'fa-shirtsinbulk', 'fa-simplybuilt', 'fa-skyatlas', 'fa-skype', 'fa-slack', 'fa-slideshare', 'fa-soundcloud', 'fa-spotify', 'fa-stack-exchange', 'fa-stack-overflow', 'fa-steam', 'fa-steam-square', 'fa-stumbleupon', 'fa-stumbleupon-circle', 'fa-tencent-weibo', 'fa-trello', 'fa-tumblr', 'fa-tumblr-square', 'fa-twitch', 'fa-twitter', 'fa-twitter-square', 'fa-viacoin', 'fa-vimeo-square', 'fa-vine', 'fa-vk', 'fa-wechat', 'fa-weibo', 'fa-weixin', 'fa-whatsapp', 'fa-windows', 'fa-wordpress', 'fa-xing', 'fa-xing-square', 'fa-yahoo', 'fa-yelp', 'fa-youtube', 'fa-youtube-square', 'fa-h-square', 'fa-hospital-o', 'fa-medkit', 'fa-stethoscope', 'fa-user-md']
        }
    });
    _0x1f25c3.components.register('iconpickerWb', {
        'mode': 'default',
        'defaults': {
            'fullClassFormatter': function(_0x3729cf) {
                return 'icon\x20' + _0x3729cf;
            },
            'templates': {
                'popover': '<div class="iconpicker-popover popover"><div class="arrow"></div>' + '<div class="popover-title"></div><div class="popover-content"></div></div>',
                'footer': '<div class="popover-footer"></div>',
                'buttons': '<button\x20class=\x22iconpicker-btn\x20iconpicker-btn-cancel\x20btn\x20btn-default\x20btn-sm\x22>取消</button>' + ' <button class="iconpicker-btn iconpicker-btn-accept btn btn-primary btn-sm">确认</button>',
                'search': '<input type="search" class="form-control iconpicker-search" placeholder="查找图标">',
                'iconpicker': '<div class="iconpicker"><div class="iconpicker-items"></div></div>',
                'iconpickerItem': '<a role="button" href="#" class="iconpicker-item"><i></i></a>'
            },
            'icons': ['wb-dashboard', 'wb-inbox', 'wb-cloud', 'wb-bell', 'wb-book', 'wb-bookmark', 'wb-tag', 'wb-library', 'wb-share', 'wb-reply', 'wb-refresh', 'wb-move', 'wb-chat', 'wb-chat-working', 'wb-chat-text', 'wb-chat-group', 'wb-envelope', 'wb-envelope-open', 'wb-user', 'wb-user-circle', 'wb-users', 'wb-user-add', 'wb-grid-9', 'wb-grid-4', 'wb-menu', 'wb-layout', 'wb-fullscreen', 'wb-fullscreen-exit', 'wb-expand', 'wb-contract', 'wb-arrow-expand', 'wb-arrow-shrink', 'wb-desktop', 'wb-mobile', 'wb-signal', 'wb-power', 'wb-more-horizontal', 'wb-more-vertical', 'wb-globe', 'wb-map', 'wb-flag', 'wb-pie-chart', 'wb-stats-bars', 'wb-pluse', 'wb-home', 'wb-shopping-cart', 'wb-payment', 'wb-briefcase', 'wb-search', 'wb-zoom-in', 'wb-zoom-out', 'wb-download', 'wb-upload', 'wb-sort-asc', 'wb-sort-des', 'wb-graph-up', 'wb-graph-down', 'wb-replay', 'wb-edit', 'wb-pencil', 'wb-rubber', 'wb-crop', 'wb-eye', 'wb-eye-close', 'wb-image', 'wb-gallery', 'wb-video', 'wb-camera', 'wb-folder', 'wb-clipboard', 'wb-order', 'wb-file', 'wb-copy', 'wb-add-file', 'wb-print', 'wb-calendar', 'wb-time', 'wb-trash', 'wb-plugin', 'wb-extension', 'wb-memory', 'wb-settings', 'wb-scissor', 'wb-wrench', 'wb-hammer', 'wb-lock', 'wb-unlock', 'wb-volume-low', 'wb-volume-high', 'wb-volume-off', 'wb-pause', 'wb-play', 'wb-stop', 'wb-musical', 'wb-random', 'wb-reload', 'wb-loop', 'wb-text', 'wb-bold', 'wb-italic', 'wb-underline', 'wb-format-clear', 'wb-text-type', 'wb-table', 'wb-attach-file', 'wb-paperclip', 'wb-link-intact', 'wb-link', 'wb-link-broken', 'wb-indent-increase', 'wb-indent-decrease', 'wb-align-justify', 'wb-align-left', 'wb-align-center', 'wb-align-right', 'wb-list-numbered', 'wb-list-bulleted', 'wb-list', 'wb-emoticon', 'wb-quote-right', 'wb-code', 'wb-code-working', 'wb-code-unfold', 'wb-chevron-right', 'wb-chevron-left', 'wb-chevron-left-mini', 'wb-chevron-right-mini', 'wb-chevron-up', 'wb-chevron-down', 'wb-chevron-up-mini', 'wb-chevron-down-mini', 'wb-arrow-left', 'wb-arrow-right', 'wb-arrow-up', 'wb-arrow-down', 'wb-dropdown', 'wb-dropup', 'wb-dropright', 'wb-dropleft', 'wb-sort-vertical', 'wb-triangle-left', 'wb-triangle-right', 'wb-triangle-down', 'wb-triangle-up', 'wb-check-circle', 'wb-check', 'wb-check-mini', 'wb-close', 'wb-close-mini', 'wb-plus-circle', 'wb-plus', 'wb-minus-circle', 'wb-minus', 'wb-alert-circle', 'wb-alert', 'wb-help-circle', 'wb-help', 'wb-info-circle', 'wb-info', 'wb-warning', 'wb-heart', 'wb-heart-outline', 'wb-star', 'wb-star-half', 'wb-star-outline', 'wb-thumb-up', 'wb-thumb-down', 'wb-small-point', 'wb-medium-point', 'wb-large-point']
        }
    });
} (window, document, jQuery)); (function(_0x5ee88d, _0xcfb0a8, _0x47b1b9) {
    'use strict';
    _0x47b1b9.components.register('formatter', {
        'mode': 'init',
        'defaults': {
            'persistent': !![]
        },
        'init': function(_0x5d5b2e) {
            if (!_0x47b1b9['fn']['formatter']) {
                return;
            }
            var _0x4f5e6d = _0x47b1b9.components['getDefaults']('formatter'),
                _0x3c07fa = navigator['userAgent']['toLowerCase'](),
                _0x3e2614;
            if (/msie/i['test'](_0x3c07fa) && !/opera/ ['test'](_0x3c07fa)) {
                _0x3e2614 = {
                    'persistent': ![]
                };
            } else {
                _0x3e2614 = {};
            }
            _0x47b1b9('[data-plugin="formatter"]', _0x5d5b2e)['each'](function() {
                var _0x39e37c = _0x47b1b9['extend']({},
                    _0x4f5e6d, _0x3e2614, _0x47b1b9(this)['data']());
                if (_0x39e37c['pattern']) {
                    _0x39e37c['pattern'] = _0x39e37c['pattern']['replace'](/\[\[/g, '{{')['replace'](/\]\]/g, '}}');
                }
                _0x47b1b9(this)['formatter'](_0x39e37c);
            });
        }
    });
} (window, document, jQuery)); (function(_0x4e61c5, _0x23527a, _0x1dc8ac) {
    'use strict';
    _0x1dc8ac.components.register('formValidation', {
        'mode': 'default',
        'defaults': {
            'locale': 'zh_CN',
            'framework': 'bootstrap',
            'excluded': ':disabled',
            'icon': {
                'valid': 'icon wb-check',
                'invalid': 'icon wb-close',
                'validating': 'icon wb-refresh'
            }
        }
    });
} (window, document, jQuery)); (function(_0x538e53, _0xd74e88, _0x20a865) {
    'use strict';
    _0x20a865.components.register('gauge', {
        'mode': 'init',
        'defaults': {
            'lines': 0xc,
            'angle': 0.12,
            'lineWidth': 0.4,
            'pointer': {
                'length': 0.68,
                'strokeWidth': 0.03,
                'color': _0x20a865['colors']('blue-grey', 0x190)
            },
            'limitMax': !![],
            'colorStart': _0x20a865['colors']('blue-grey', 0xc8),
            'colorStop': _0x20a865['colors']('blue-grey', 0xc8),
            'strokeColor': _0x20a865['colors']('purple', 0x1f4),
            'generateGradient': !![]
        },
        'init': function(_0x575779) {
            if (typeof Gauge === undefined) {
                return;
            }
            var _0x355b19 = _0x20a865.components['getDefaults']('gauge');
            _0x20a865('[data-plugin="gauge"]', _0x575779)['each'](function() {
                var _0x1b63a9 = _0x20a865(this),
                    _0x3a7a12 = _0x1b63a9['data'](),
                    _0x4a4157 = _0x1b63a9['find']('.gauge-label'),
                    _0x481b37 = _0x1b63a9['find']('canvas');
                _0x3a7a12 = _0x20a865['extend']( !! [], {},
                    _0x355b19, _0x3a7a12);
                if (_0x481b37['length'] === 0x0) {
                    return;
                }
                var _0x371319 = new Gauge(_0x481b37[0x0])['setOptions'](_0x3a7a12);
                _0x1b63a9['data']('gauge', _0x371319);
                _0x371319['animationSpeed'] = 0x32;
                _0x371319['maxValue'] = _0x1b63a9['data']('max-value');
                _0x371319['set'](_0x1b63a9['data']('value'));
                if (_0x4a4157['length'] > 0x0) {
                    _0x371319['setTextField'](_0x4a4157[0x0]);
                }
            });
        }
    });
    _0x20a865.components.register('donut', {
        'mode': 'init',
        'defaults': {
            'lines': 0xc,
            'angle': 0.3,
            'lineWidth': 0.08,
            'pointer': {
                'length': 0.9,
                'strokeWidth': 0.035,
                'color': _0x20a865['colors']('blue-grey', 0x190)
            },
            'limitMax': ![],
            'colorStart': _0x20a865['colors']('blue-grey', 0xc8),
            'colorStop': _0x20a865['colors']('blue-grey', 0xc8),
            'strokeColor': _0x20a865['colors']('purple', 0x1f4),
            'generateGradient': !![]
        },
        'init': function(_0x534a72) {
            if (typeof Gauge === undefined) {
                return;
            }
            var _0x13a41e = _0x20a865.components['getDefaults']('donut');
            _0x20a865('[data-plugin="donut"]', _0x534a72)['each'](function() {
                var _0x3c1a1d = _0x20a865(this),
                    _0x559b11 = _0x3c1a1d['data'](),
                    _0x454fa7 = _0x3c1a1d['find']('.donut-label'),
                    _0x1e5dc4 = _0x3c1a1d['find']('canvas');
                _0x559b11 = _0x20a865['extend']( !! [], {},
                    _0x13a41e, _0x559b11);
                if (_0x1e5dc4['length'] === 0x0) {
                    return;
                }
                var _0xc08785 = new Donut(_0x1e5dc4[0x0])['setOptions'](_0x559b11);
                _0x3c1a1d['data']('donut', _0xc08785);
                _0xc08785['animationSpeed'] = 0x32;
                _0xc08785['maxValue'] = _0x3c1a1d['data']('max-value');
                _0xc08785['set'](_0x3c1a1d['data']('value'));
                if (_0x454fa7['length'] > 0x0) {
                    _0xc08785['setTextField'](_0x454fa7[0x0]);
                }
            });
        }
    });
} (window, document, jQuery)); (function(_0x1c6750, _0x51805e, _0x1b01dc) {
    'use strict';
    _0x1b01dc.components.register('gridstack', {
        'mode': 'init',
        'defaults': {
            'cellHeight': 0x50,
            'verticalMargin': 0x14
        },
        'init': function(_0x507f93) {
            if (!_0x1b01dc['fn']['gridstack']) {
                return;
            }
            var _0xc14806 = _0x1b01dc.components['getDefaults']('gridstack');
            _0x1b01dc('[data-plugin=\x22gridstack\x22]', _0x507f93)['each'](function() {
                var _0x18b51e = _0x1b01dc['extend']( !! [], {},
                    _0xc14806, _0x1b01dc(this)['data']());
                _0x1b01dc(this)['gridstack'](_0x18b51e);
            });
        }
    });
} (window, document, jQuery)); (function(_0x3e55f7, _0x3c6019, _0xe96efd) {
    'use strict';
    _0xe96efd.components.register('highlight', {
        'mode': 'init',
        'defaults': {},
        'init': function(_0x1b4c69) {
            if (typeof hljs === 'undefined') {
                return;
            }
            _0xe96efd('[data-plugin="highlight"]', _0x1b4c69)['each'](function(_0x2b6bce, _0x10935b) {
                hljs['highlightBlock'](_0x10935b);
            });
        }
    });
} (window, document, jQuery)); (function(_0x1a6b42, _0x474f45, _0x4f1bfd) {
    'use strict';
    _0x4f1bfd.components.register('sortable', {
        'defaults': {},
        'mode': 'default'
    });
} (window, document, jQuery)); (function(_0x3a2bba, _0x21232e, _0x36e714) {
    'use strict';
    _0x36e714.components.register('iCheck', {
        'mode': 'default',
        'defaults': {}
    });
} (window, document, jQuery)); (function(_0x21e849, _0x319094, _0x40db18) {
    'use strict';
    _0x40db18.components.register('input-group-file', {
        'api': function() {
            _0x40db18(_0x319094)['on']('change', '.input-group-file [type=file]',
                function() {
                    var _0xaa163c = _0x40db18(this);
                    var _0x2ac54e = _0x40db18(this)['parents']('.input-group-file')['find']('.form-control');
                    var _0x295700 = '';
                    _0x40db18['each'](_0xaa163c[0x0]['files'],
                        function(_0x9dfb5c, _0x1a7fea) {
                            _0x295700 += _0x1a7fea['name'] + ',\x20';
                        });
                    _0x295700 = _0x295700['substring'](0x0, _0x295700['length'] - 0x2);
                    _0x2ac54e['val'](_0x295700);
                });
        }
    });
} (window, document, jQuery)); (function(_0x273f61, _0x28d0d6, _0x61b074) {
    'use strict';
    _0x61b074.components.register('isotope', {
        'mode': 'init',
        'defaults': {},
        'init': function(_0x2a4f8d) {
            if (typeof _0x61b074['fn']['isotope'] === 'undefined') {
                return;
            }
            var _0x4125d3 = _0x61b074.components['getDefaults']('isotope');
            var _0x181262 = function() {
                _0x61b074('[data-plugin="isotope"]', _0x2a4f8d)['each'](function() {
                    var _0x2b2c03 = _0x61b074(this),
                        _0xa2c497 = _0x61b074['extend']( !! [], {},
                            _0x4125d3, _0x2b2c03['data']());
                    _0x2b2c03['isotope'](_0xa2c497);
                });
            };
            if (_0x2a4f8d !== _0x28d0d6) {
                _0x181262();
            } else {
                _0x61b074(_0x273f61)['on']('load',
                    function() {
                        _0x181262();
                    });
            }
        }
    });
} (window, document, jQuery)); (function(_0x2f6b5c, _0x4881c6, _0xaca90c) {
    'use strict';
    _0xaca90c.components.register('appear', {
        'defaults': {},
        'api': function() {
            if (!_0xaca90c['fn']['appear']) {
                return;
            }
            _0xaca90c('#admui-pageContent')['on']('appear', '[data-plugin="appear"]',
                function() {
                    var _0x40c0ba = _0xaca90c(this),
                        _0x1820f4 = _0x40c0ba['data']('animate');
                    if (_0x40c0ba['hasClass']('appear-no-repeat')) {
                        return;
                    }
                    _0x40c0ba['removeClass']('invisible')['addClass']('animation-' + _0x1820f4);
                    if (_0x40c0ba['data']('repeat') === ![]) {
                        _0x40c0ba['addClass']('appear-no-repeat');
                    }
                });
            _0xaca90c('#admui-pageContent')['on']('disappear', '[data-plugin=\x22appear\x22]',
                function() {
                    var _0x1cb9a6 = _0xaca90c(this),
                        _0x26c1ea = _0x1cb9a6['data']('animate');
                    if (_0x1cb9a6['hasClass']('appear-no-repeat')) {
                        return;
                    }
                    _0x1cb9a6['addClass']('invisible')['removeClass']('animation-' + _0x26c1ea);
                });
        },
        'init': function(_0x240101) {
            if (!_0xaca90c['fn']['appear']) {
                return;
            }
            var _0xc02a38 = _0xaca90c.components['getDefaults']('appear');
            _0xaca90c('[data-plugin="appear"]', _0x240101)['appear'](_0xc02a38);
            _0xaca90c('[data-plugin="appear"]', _0x240101)['not'](':appeared')['addClass']('invisible');
        }
    });
} (window, document, jQuery)); (function(_0x2638cf, _0x25a748, _0x5c6c84) {
    'use strict';
    _0x5c6c84.components.register('knob', {
        'mode': 'default',
        'defaults': {
            'min': -0x32,
            'max': 0x32,
            'width': 0x78,
            'height': 0x78,
            'thickness': '.1'
        }
    });
} (window, document, jQuery)); (function(_0x1edd81, _0x1a2272, _0x17d5ac) {
    'use strict';
    _0x17d5ac.components.register('labelauty', {
        'mode': 'default',
        'defaults': {
            'same_width': !![],
            'checked_label': '选中',
            'unchecked_label': '未选中'
        }
    });
} (window, document, jQuery)); (function(_0x199e6e, _0x3e49cc, _0x2e488d) {
    'use strict';
    _0x2e488d.components.register('strength', {
        'mode': 'default',
        'defaults': {
            'showMeter': !![],
            'showToggle': ![],
            'templates': {
                'toggle': '<div\x20class=\x22checkbox-custom\x20checkbox-primary\x20show-password-wrap\x22><input\x20type=\x22checkbox\x22\x20class=\x22{toggleClass}\x22\x20title=\x22显示/隐藏密码\x22\x20id=\x22show_password\x22\x20/><label\x20for=\x22show_password\x22>显示密码</label></div>',
                'meter': '<div class="{meterClass}">{score}</div>',
                'score': '<div\x20class=\x22{scoreClass}\x22></div>',
                'main': '<div class="{containerClass}">{input}{meter}{toggle}</div>'
            },
            'classes': {
                'container': 'strength-container',
                'status': 'strength-{status}',
                'input': 'strength-input',
                'toggle': 'strength-toggle',
                'meter': 'strength-meter',
                'score': 'strength-score'
            },
            'scoreLables': {
                'invalid': 'Invalid',
                'weak': 'Weak',
                'good': 'Good',
                'strong': 'Strong'
            },
            'scoreClasses': {
                'invalid': 'strength-invalid',
                'weak': 'strength-weak',
                'good': 'strength-good',
                'strong': 'strength-strong'
            }
        }
    });
} (window, document, jQuery)); (function(_0x40b75d, _0x27e924, _0x5ec01c) {
    'use strict';
    _0x5ec01c.components.register('treegrid', {
        'mode': 'default',
        'defaults': {
            'expanderExpandedClass': 'icon wb-triangle-down',
            'expanderCollapsedClass': 'icon wb-triangle-right'
        }
    });
} (window, document, jQuery)); (function(_0x19bf6f, _0x3c96a0, _0x28f315) {
    'use strict';
    _0x28f315.components.register('wizard', {
        'mode': 'default',
        'defaults': {
            'step': '.steps .step, .pearls .pearl',
            'buttonLabels': {
                'back': '上一步',
                'next': '下一步',
                'finish': '完成'
            },
            'templates': {
                'buttons': function() {
                    var _0x234a31 = this['options'];
                    return '<div\x20class=\x22wizard-buttons\x22>' + '<a class="btn btn-default btn-outline" href="#' + this['id'] + '" data-wizard="back" role="button">' + _0x234a31['buttonLabels']['back'] + '</a>' + '<a class="btn btn-primary btn-outline pull-right" href="#' + this['id'] + '\x22\x20data-wizard=\x22next\x22\x20role=\x22button\x22>' + _0x234a31['buttonLabels']['next'] + '</a>' + '<a\x20class=\x22btn\x20btn-success\x20btn-outline\x20pull-right\x22\x20href=\x22#' + this['id'] + '" data-wizard="finish" role="button">' + _0x234a31['buttonLabels']['finish'] + '</a>' + '</div>';
                }
            }
        }
    });
} (window, document, jQuery)); (function(_0x5ea0ec, _0x4b6de3, _0x474003) {
    'use strict';
    _0x474003.components.register('jstree', {
        'mode': 'default',
        'defaults': {}
    });
} (window, document, jQuery)); (function(_0x460a66, _0x16088a, _0x16aaf9) {
    'use strict';
    _0x16aaf9.components.register('timepicker', {
        'mode': 'default',
        'defaults': {
            'lang': {
                'am': '上午',
                'pm': '下午',
                'AM': '上午',
                'PM': '下午',
                'decimal': '.',
                'mins': '分钟',
                'hr': '小时',
                'hrs': '小时'
            },
            'timeFormat': 'ag:i'
        }
    });
} (window, document, jQuery)); (function(_0x297b2e, _0x1da956, _0x3687ba) {
    'use strict';
    _0x3687ba.components.register('ladda', {
        'mode': 'init',
        'defaults': {
            'timeout': 0x7d0
        },
        'init': function() {
            if (typeof Ladda === 'undefined') {
                return;
            }
            var _0x58de14 = _0x3687ba.components['getDefaults']('ladda');
            Ladda['bind']('[data-plugin="ladda"]', _0x58de14);
        }
    });
    _0x3687ba.components.register('laddaProgress', {
        'mode': 'init',
        'defaults': {},
        'init': function() {
            if (typeof Ladda === 'undefined') {
                return;
            }
            var _0x525bef = _0x3687ba.components['getDefaults']('laddaProgress'),
                _0x1887e7 = _0x3687ba['extend']({},
                    _0x525bef, {
                        'callback': function(_0x55eb77) {
                            var _0x1ef8e6 = 0x0;
                            var _0x17a3be = setInterval(function() {
                                    _0x1ef8e6 = Math['min'](_0x1ef8e6 + Math['random']() * 0.1, 0x1);
                                    _0x55eb77['setProgress'](_0x1ef8e6);
                                    if (_0x1ef8e6 === 0x1) {
                                        _0x55eb77['stop']();
                                        clearInterval(_0x17a3be);
                                    }
                                },
                                0x12c);
                        }
                    });
            Ladda['bind']('[data-plugin=\x22laddaProgress\x22]', _0x1887e7);
        }
    });
} (window, document, jQuery)); (function(_0x45a145, _0x42ce11, _0x37eb2e) {
    'use strict';
    _0x37eb2e.components.register('magnificPopup', {
        'mode': 'default',
        'defaults': {
            'type': 'image',
            'closeOnContentClick': !![],
            'tClose': '关闭 (ESC)',
            'tLoading': '加载中...',
            'gallery': {
                'tPrev': '上一张',
                'tNext': '下一张',
                'tCounter': '%curr%\x20/\x20%total%'
            },
            'image': {
                'tError': '<a href="%url%" target="_blank">图片</a> 加载失败'
            },
            'ajax': {
                'tError': '<a href="%url%" target="_blank">内容</a> 加载失败'
            }
        }
    });
} (window, document, jQuery)); (function(_0x479215, _0x566ba8, _0x37064a) {
    'use strict';
    _0x37064a.components.register('masonry', {
        'mode': 'init',
        'defaults': {
            'itemSelector': '.masonry-item'
        },
        'init': function(_0x53b852) {
            if (typeof _0x37064a['fn']['masonry'] === 'undefined') {
                return;
            }
            var _0x50ca5c = _0x37064a.components['getDefaults']('masonry');
            _0x37064a('[data-plugin="masonry"]', _0x53b852)['each'](function() {
                var _0x39e592 = _0x37064a(this),
                    _0x400097 = _0x37064a['extend']( !! [], {},
                        _0x50ca5c, _0x39e592['data']());
                _0x39e592['masonry'](_0x400097);
            });
        }
    });
} (window, document, jQuery)); (function(_0xad15b3, _0x1a696f, _0x553f2a) {
    'use strict';
    _0x553f2a.components.register('matchHeight', {
        'mode': 'init',
        'defaults': {},
        'init': function(_0x922598) {
            if (typeof _0x553f2a['fn']['matchHeight'] === 'undefined') {
                return;
            }
            var _0x4be6cb = _0x553f2a.components['getDefaults']('matchHeight');
            _0x553f2a('[data-plugin="matchHeight"]', _0x922598)['each'](function() {
                var _0x392e10 = _0x553f2a(this),
                    _0x1a2b25 = _0x553f2a['extend']( !! [], {},
                        _0x4be6cb, _0x392e10['data']()),
                    _0x3c724f = _0x392e10['data']('matchSelector');
                if (_0x3c724f) {
                    _0x392e10['find'](_0x3c724f)['matchHeight'](_0x1a2b25);
                } else {
                    _0x392e10['children']()['matchHeight'](_0x1a2b25);
                }
            });
        }
    });
} (window, document, jQuery)); (function(_0x3ec01d, _0x2a4f0b, _0x229170) {
    'use strict';
    _0x229170.components.register('material', {
        'init': function(_0x407ff1) {
            _0x229170('.form-material', _0x407ff1)['each'](function() {
                var _0x2f723c = _0x229170(this);
                if (_0x2f723c['data']('material') === !![]) {
                    return;
                }
                var _0x2561a8 = _0x2f723c['find']('.form-control');
                if (_0x2561a8['attr']('data-hint')) {
                    _0x2561a8['after']('<div class=hint>' + _0x2561a8['attr']('data-hint') + '</div>');
                }
                if (_0x2f723c['hasClass']('floating')) {
                    if (_0x2561a8['hasClass']('floating-label')) {
                        var _0xbd97eb = _0x2561a8['attr']('placeholder');
                        _0x2561a8['attr']('placeholder', null)['removeClass']('floating-label');
                        _0x2561a8['after']('<div class=floating-label>' + _0xbd97eb + '</div>');
                    }
                    if (_0x2561a8['val']() === null || _0x2561a8['val']() === 'undefined' || _0x2561a8['val']() === '') {
                        _0x2561a8['addClass']('empty');
                    }
                }
                if (_0x2561a8['next']()['is']('[type=file]')) {
                    _0x2f723c['addClass']('form-material-file');
                }
                _0x2f723c['data']('material', !![]);
            });
        },
        'api': function() {
            function _0x3f527c(_0x2cac0f) {
                if (typeof _0x2cac0f['which'] === 'undefined') {
                    return !! [];
                } else if (typeof _0x2cac0f['which'] === 'number' && _0x2cac0f['which'] > 0x0) {
                    return ! _0x2cac0f['ctrlKey'] && !_0x2cac0f['metaKey'] && !_0x2cac0f['altKey'] && _0x2cac0f['which'] !== 0x8 && _0x2cac0f['which'] !== 0x9;
                }
                return ! [];
            }
            _0x229170(_0x2a4f0b)['on']('keydown.site.material paste.site.material', '.form-control',
                function(_0x4a6b7f) {
                    if (_0x3f527c(_0x4a6b7f)) {
                        _0x229170(this)['removeClass']('empty');
                    }
                })['on']('keyup.site.material change.site.material', '.form-control',
                function() {
                    var _0x17812c = _0x229170(this);
                    if (_0x17812c['val']() === '' && (typeof _0x17812c[0x0]['checkValidity'] !== 'undefined' && _0x17812c[0x0]['checkValidity']())) {
                        _0x17812c['addClass']('empty');
                    } else {
                        _0x17812c['removeClass']('empty');
                    }
                })['on']('focus', '.form-material-file',
                function() {
                    _0x229170(this)['find']('input')['addClass']('focus');
                })['on']('blur', '.form-material-file',
                function() {
                    _0x229170(this)['find']('input')['removeClass']('focus');
                })['on']('change', '.form-material-file [type=file]',
                function() {
                    var _0x24f6fb = _0x229170(this);
                    var _0x1b68e0 = '';
                    _0x229170['each'](_0x24f6fb[0x0]['files'],
                        function(_0x22f17e, _0x21c8fd) {
                            _0x1b68e0 += _0x21c8fd['name'] + ',\x20';
                        });
                    _0x1b68e0 = _0x1b68e0['substring'](0x0, _0x1b68e0['length'] - 0x2);
                    if (_0x1b68e0) {
                        _0x24f6fb['prev']()['removeClass']('empty');
                    } else {
                        _0x24f6fb['prev']()['addClass']('empty');
                    }
                    _0x24f6fb['prev']()['val'](_0x1b68e0);
                });
        }
    });
} (window, document, jQuery)); (function(_0x125acd, _0x14974d, _0x494d66) {
    'use strict';
    _0x494d66.components.register('multiSelect', {
        'mode': 'default',
        'defaults': {}
    });
} (window, document, jQuery)); (function(_0x287a29, _0x25a754, _0x4137f8) {
    'use strict';
    _0x4137f8.components.register('nestable', {
        'mode': 'default',
        'defaults': {}
    });
} (window, document, jQuery)); (function(_0x4ed5ab, _0x5c5dfa, _0x355bb5) {
    'use strict';
    _0x355bb5.components.register('nprogress', {
        'mode': 'init',
        'defaults': {
            'minimum': 0.15,
            'trickleRate': 0.07,
            'trickleSpeed': 0x168,
            'showSpinner': ![],
            'template': '<div class="bar" role="bar"></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
        },
        'init': function() {
            if (typeof NProgress === 'undefined') {
                return;
            }
            var _0x1ab84c = _0x355bb5.components['getDefaults']('nprogress');
            NProgress['configure'](_0x1ab84c);
        }
    });
} (window, document, jQuery)); (function(_0x1f4c05, _0x7b877a, _0x21f5ea) {
    'use strict';
    _0x21f5ea.components.register('owlCarousel', {
        'mode': 'default',
        'defaults': {
            'loop': !![],
            'nav': !![],
            'dots': ![],
            'dotsClass': 'owl-dots owl-dots-fall',
            'responsive': {
                0 : {
                    'items': 0x1
                },
                600 : {
                    'items': 0x3
                }
            }
        }
    });
} (window, document, jQuery)); (function(_0x1cd21b, _0x4a870b, _0x2851d5) {
    'use strict';
    _0x2851d5.components.register('panel', {
        'api': function() {
            var _0x427355 = _0x2851d5(_0x4a870b);
            _0x427355['off']('click.site.panel');
            _0x427355['on']('click.site.panel', '[data-toggle="panel-fullscreen"]',
                function(_0x17cfbb) {
                    _0x17cfbb['preventDefault']();
                    var _0x576e8a = _0x2851d5(this),
                        _0x32fc2f = _0x576e8a['closest']('.panel');
                    var _0x344fe6 = _0x32fc2f['data']('panel-api');
                    _0x344fe6['toggleFullscreen']();
                });
            _0x427355['on']('click.site.panel', '[data-toggle="panel-collapse"]',
                function(_0x525efb) {
                    _0x525efb['preventDefault']();
                    var _0x2c8513 = _0x2851d5(this),
                        _0x255c53 = _0x2c8513['closest']('.panel');
                    var _0x354c48 = _0x255c53['data']('panel-api');
                    _0x354c48['toggleContent']();
                });
            _0x427355['on']('click.site.panel', '[data-toggle=\x22panel-close\x22]',
                function(_0x6e069a) {
                    _0x6e069a['preventDefault']();
                    var _0x14ca91 = _0x2851d5(this),
                        _0x3579f1 = _0x14ca91['closest']('.panel');
                    var _0x3feaec = _0x3579f1['data']('panel-api');
                    _0x3feaec['close']();
                });
            _0x427355['on']('click.site.panel', '[data-toggle="panel-refresh"]',
                function(_0x37c74b) {
                    _0x37c74b['preventDefault']();
                    var _0x4ce226 = _0x2851d5(this);
                    var _0x38d596 = _0x4ce226['closest']('.panel');
                    var _0x229d44 = _0x38d596['data']('panel-api');
                    var _0x5c234a = _0x4ce226['data']('loadCallback');
                    if (_0x2851d5['isFunction'](_0x1cd21b[_0x5c234a])) {
                        _0x229d44['load'](_0x1cd21b[_0x5c234a]);
                    } else {
                        _0x229d44['load']();
                    }
                });
        },
        'init': function(_0xee7998) {
            _0x2851d5('.panel', _0xee7998)['each'](function() {
                var _0x131fb9 = _0x2851d5(this);
                var _0x2327c1 = ![];
                var _0x320841 = ![];
                var _0x207b6d = ![];
                var _0x2278e1 = ![];
                var _0x20df95 = _0x131fb9['find']('[data-toggle="panel-fullscreen"]');
                var _0x53da5c = _0x131fb9['find']('[data-toggle="panel-collapse"]');
                var _0x356aad;
                var _0x4bbe03 = this;
                if (_0x131fb9['hasClass']('is-collapse')) {
                    _0x207b6d = !![];
                }
                var _0x5a013a = {
                    'load': function(_0x4cc9bb) {
                        var _0x23bfe4 = _0x131fb9['data']('loader-type');
                        if (!_0x23bfe4) {
                            _0x23bfe4 = 'default';
                        }
                        _0x356aad = _0x2851d5('<div class="panel-loading">' + '<div class="loader loader-' + _0x23bfe4 + '\x22></div>' + '</div>');
                        _0x356aad['appendTo'](_0x131fb9);
                        _0x131fb9['addClass']('is-loading');
                        _0x131fb9['trigger']('loading.uikit.panel');
                        _0x2278e1 = !![];
                        if (_0x2851d5['isFunction'](_0x4cc9bb)) {
                            _0x4cc9bb['call'](_0x4bbe03, this['done']);
                        }
                    },
                    'done': function() {
                        if (_0x2278e1 === !![]) {
                            _0x356aad['remove']();
                            _0x131fb9['removeClass']('is-loading');
                            _0x131fb9['trigger']('loading.done.uikit.panel');
                        }
                    },
                    'toggleContent': function() {
                        if (_0x207b6d) {
                            this['showContent']();
                        } else {
                            this['hideContent']();
                        }
                    },
                    'showContent': function() {
                        if (_0x207b6d !== ![]) {
                            _0x131fb9['removeClass']('is-collapse');
                            if (_0x53da5c['hasClass']('wb-plus')) {
                                _0x53da5c['removeClass']('wb-plus')['addClass']('wb-minus');
                            }
                            _0x131fb9['trigger']('shown.uikit.panel');
                            _0x207b6d = ![];
                        }
                    },
                    'hideContent': function() {
                        if (_0x207b6d !== !![]) {
                            _0x131fb9['addClass']('is-collapse');
                            if (_0x53da5c['hasClass']('wb-minus')) {
                                _0x53da5c['removeClass']('wb-minus')['addClass']('wb-plus');
                            }
                            _0x131fb9['trigger']('hidden.uikit.panel');
                            _0x207b6d = !![];
                        }
                    },
                    'toggleFullscreen': function() {
                        if (_0x2327c1) {
                            this['leaveFullscreen']();
                        } else {
                            this['enterFullscreen']();
                        }
                    },
                    'enterFullscreen': function() {
                        if (_0x2327c1 !== !![]) {
                            _0x131fb9['addClass']('is-fullscreen');
                            if (_0x20df95['hasClass']('wb-expand')) {
                                _0x20df95['removeClass']('wb-expand')['addClass']('wb-contract');
                            }
                            _0x131fb9['trigger']('enter.fullscreen.uikit.panel');
                            _0x2327c1 = !![];
                        }
                    },
                    'leaveFullscreen': function() {
                        if (_0x2327c1 !== ![]) {
                            _0x131fb9['removeClass']('is-fullscreen');
                            if (_0x20df95['hasClass']('wb-contract')) {
                                _0x20df95['removeClass']('wb-contract')['addClass']('wb-expand');
                            }
                            _0x131fb9['trigger']('leave.fullscreen.uikit.panel');
                            _0x2327c1 = ![];
                        }
                    },
                    'toggle': function() {
                        if (_0x320841) {
                            this['open']();
                        } else {
                            this['close']();
                        }
                    },
                    'open': function() {
                        if (_0x320841 !== ![]) {
                            _0x131fb9['removeClass']('is-close');
                            _0x131fb9['trigger']('open.uikit.panel');
                            _0x320841 = ![];
                        }
                    },
                    'close': function() {
                        if (_0x320841 !== !![]) {
                            _0x131fb9['addClass']('is-close');
                            _0x131fb9['trigger']('close.uikit.panel');
                            _0x320841 = !![];
                        }
                    }
                };
                _0x131fb9['data']('panel-api', _0x5a013a);
            });
        }
    });
} (window, document, jQuery)); (function(_0x4a88b7, _0x38875a, _0x26587e) {
    'use strict';
    _0x26587e.components.register('peityBar', {
        'mode': 'init',
        'defaults': {
            'delimiter': ',',
            'fill': [_0x26587e['colors']('purple', 0x190)],
            'height': 0x12,
            'max': null,
            'min': 0x0,
            'padding': 0.1,
            'width': 0x2c
        },
        'init': function(_0x3ef5d7) {
            if (!_0x26587e['fn']['peity']) {
                return;
            }
            var _0x1bd64e = _0x26587e.components['getDefaults']('peityBar');
            _0x26587e('[data-plugin="peityBar"]', _0x3ef5d7)['each'](function() {
                var _0x2d1dd3 = _0x26587e(this),
                    _0x34cceb = _0x2d1dd3['data']();
                if (_0x34cceb['skin']) {
                    if (_0x26587e['colors'](_0x34cceb['skin'])) {
                        var _0x1a925a = _0x26587e['colors'](_0x34cceb['skin']);
                        _0x1bd64e['fill'] = [_0x1a925a[0x190]];
                    }
                }
                _0x34cceb = _0x26587e['extend']( !! [], {},
                    _0x1bd64e, _0x34cceb);
                _0x2d1dd3['peity']('bar', _0x34cceb);
            });
        }
    });
    _0x26587e.components.register('peityDonut', {
        'mode': 'init',
        'defaults': {
            'delimiter': null,
            'fill': [_0x26587e['colors']('purple', 0x2bc), _0x26587e['colors']('purple', 0x190), _0x26587e['colors']('purple', 0xc8)],
            'height': null,
            'innerRadius': null,
            'radius': 0xb,
            'width': null
        },
        'init': function(_0x3d876a) {
            if (!_0x26587e['fn']['peity']) {
                return;
            }
            var _0x3bb204 = _0x26587e.components['getDefaults']('peityDonut');
            _0x26587e('[data-plugin="peityDonut"]', _0x3d876a)['each'](function() {
                var _0x1c5ac8 = _0x26587e(this),
                    _0x2ec79 = _0x1c5ac8['data']();
                if (_0x2ec79['skin']) {
                    if (_0x26587e['colors'](_0x2ec79['skin'])) {
                        var _0xa3a0cf = _0x26587e['colors'](_0x2ec79['skin']);
                        _0x3bb204['fill'] = [_0xa3a0cf[0x2bc], _0xa3a0cf[0x190], _0xa3a0cf[0xc8]];
                    }
                }
                _0x2ec79 = _0x26587e['extend']( !! [], {},
                    _0x3bb204, _0x2ec79);
                _0x1c5ac8['peity']('donut', _0x2ec79);
            });
        }
    });
    _0x26587e.components.register('peityLine', {
        'mode': 'init',
        'defaults': {
            'delimiter': ',',
            'fill': [_0x26587e['colors']('purple', 0xc8)],
            'height': 0x12,
            'max': null,
            'min': 0x0,
            'stroke': _0x26587e['colors']('purple', 0x258),
            'strokeWidth': 0x1,
            'width': 0x2c
        },
        'init': function(_0x3bc5be) {
            if (!_0x26587e['fn']['peity']) {
                return;
            }
            var _0x322342 = _0x26587e.components['getDefaults']('peityLine');
            _0x26587e('[data-plugin=\x22peityLine\x22]', _0x3bc5be)['each'](function() {
                var _0x1284c5 = _0x26587e(this),
                    _0x1efeaa = _0x1284c5['data']();
                if (_0x1efeaa['skin']) {
                    if (_0x26587e['colors'](_0x1efeaa['skin'])) {
                        var _0x2694b1 = _0x26587e['colors'](_0x1efeaa['skin']);
                        _0x322342['fill'] = [_0x2694b1[0xc8]];
                        _0x322342['stroke'] = _0x2694b1[0x258];
                    }
                }
                _0x1efeaa = _0x26587e['extend']( !! [], {},
                    _0x322342, _0x1efeaa);
                _0x1284c5['peity']('line', _0x1efeaa);
            });
        }
    });
    _0x26587e.components.register('peityPie', {
        'mode': 'init',
        'defaults': {
            'delimiter': null,
            'fill': [_0x26587e['colors']('purple', 0x2bc), _0x26587e['colors']('purple', 0x190), _0x26587e['colors']('purple', 0xc8)],
            'height': null,
            'radius': 0xb,
            'width': null
        },
        'init': function(_0x6460ed) {
            if (!_0x26587e['fn']['peity']) {
                return;
            }
            var _0x5de5d6 = _0x26587e.components['getDefaults']('peityPie');
            _0x26587e('[data-plugin="peityPie"]', _0x6460ed)['each'](function() {
                var _0x764a6a = _0x26587e(this),
                    _0x4da60d = _0x764a6a['data']();
                if (_0x4da60d['skin']) {
                    if (_0x26587e['colors'](_0x4da60d['skin'])) {
                        var _0x1ff2af = _0x26587e['colors'](_0x4da60d['skin']);
                        _0x5de5d6['fill'] = [_0x1ff2af[0x2bc], _0x1ff2af[0x190], _0x1ff2af[0xc8]];
                    }
                }
                _0x4da60d = _0x26587e['extend']( !! [], {},
                    _0x5de5d6, _0x4da60d);
                _0x764a6a['peity']('pie', _0x4da60d);
            });
        }
    });
} (window, document, jQuery)); (function(_0x270d2d, _0xb8dec5, _0x355b9f) {
    'use strict';
    _0x355b9f.components.register('plyr', {
        'mode': 'init',
        'default': {
            'i18n': {
                'restart': '重新开始',
                'rewind': '向后 {seektime} 秒',
                'play': '播放',
                'pause': '暂停',
                'forward': '向前 {seektime} 秒',
                'buffered': '缓冲',
                'currentTime': '当前时间',
                'duration': '持续时间',
                'volume': '声音',
                'toggleMute': '切换静音',
                'toggleCaptions': '切换字幕',
                'toggleFullscreen': '切换全屏'
            }
        },
        'init': function() {
            if (typeof plyr === 'undefined') {
                return;
            } (function(_0x232038, _0xa19984) {
                var _0x1f46f1 = new XMLHttpRequest(),
                    _0x3853b5 = _0x232038['body'];
                if ('withCredentials' in _0x1f46f1) {
                    _0x1f46f1['open']('GET', _0xa19984, !![]);
                    _0x1f46f1['send']();
                    _0x1f46f1['onload'] = function() {
                        var _0x47ce04 = _0x232038['createElement']('div');
                        _0x47ce04['style']['display'] = 'none';
                        _0x47ce04['innerHTML'] = _0x1f46f1['responseText'];
                        _0x3853b5['insertBefore'](_0x47ce04, _0x3853b5['childNodes'][0x0]);
                    };
                }
            } (_0xb8dec5, 'https://cdn.plyr.io/1.1.5/sprite.svg'));
            plyr['setup']();
        }
    });
} (window, document, jQuery)); (function(_0x3a5554, _0x415396, _0xd1300b) {
    'use strict';
    _0xd1300b.components.register('rating', {
        'mode': 'init',
        'defaults': {
            'targetKeep': !![],
            'icon': 'font',
            'starType': 'i',
            'starOff': 'icon wb-star',
            'starOn': 'icon wb-star orange-600',
            'cancelOff': 'icon wb-minus-circle',
            'cancelOn': 'icon wb-minus-circle orange-600',
            'starHalf': 'icon wb-star-half orange-500',
            'cancelHint': '取消评分',
            'hints': ['很差', '差', '一般', '好', '非常好']
        },
        'init': function(_0x399be3) {
            if (!_0xd1300b['fn']['raty']) {
                return;
            }
            var _0x36164b = this['defaults'];
            _0xd1300b('[data-plugin="rating"]', _0x399be3)['each'](function() {
                var _0x565112 = _0xd1300b(this);
                var _0x2731d1 = _0xd1300b['extend']( !! [], {},
                    _0x36164b, _0x565112['data']());
                if (_0x2731d1['hints'] && typeof _0x2731d1['hints'] === 'string') {
                    _0x2731d1['hints'] = _0x2731d1['hints']['split'](',');
                }
                _0x565112['raty'](_0x2731d1);
            });
        }
    });
} (window, document, jQuery)); (function(_0x118230, _0x468131, _0x5d00f7) {
    'use strict';
    _0x5d00f7.components.register('select2', {
        'mode': 'default',
        'defaults': {
            placeholder: '--请选择--',
            allowClear: true,
            'width': 'style',
            'language': 'zh-CN'
        }
    });
} (window, document, jQuery)); (function(_0x1de34e, _0x50386d, _0x3fb1ff) {
    'use strict';
    _0x3fb1ff.components.register('selectable', {
        'mode': 'init',
        'defaults': {
            'allSelector': '.selectable-all',
            'itemSelector': '.selectable-item',
            'rowSelector': 'tr',
            'rowSelectable': ![],
            'rowActiveClass': 'active',
            'onChange': null
        },
        'init': function(_0xee0b88) {
            if (!_0x3fb1ff['fn']['asSelectable']) {
                return;
            }
            var _0x295934 = _0x3fb1ff.components['getDefaults']('selectable');
            _0x3fb1ff('[data-plugin="selectable"], [data-selectable="selectable"]', _0xee0b88)['each'](function() {
                var _0x4f47bd = _0x3fb1ff['extend']({},
                    _0x295934, _0x3fb1ff(this)['data']());
                _0x3fb1ff(this)['asSelectable'](_0x4f47bd);
            });
        }
    });
} (window, document, jQuery)); (function(_0x1d33d7, _0x4e5441, _0x591526) {
    'use strict';
    _0x591526.components.register('slidePanel', {
        'mode': 'manual',
        'defaults': {
            'closeSelector': '.slidePanel-close',
            'mouseDragHandler': '.slidePanel-handler',
            'loading': {
                'template': function(_0x587130) {
                    return '<div class="' + _0x587130['classes']['loading'] + '\x22>' + '<div class="loader loader-default"></div>' + '</div>';
                },
                'showCallback': function(_0x18084d) {
                    this['$el']['addClass'](_0x18084d['classes']['loading'] + '-show');
                },
                'hideCallback': function(_0x4435ec) {
                    this['$el']['removeClass'](_0x4435ec['classes']['loading'] + '-show');
                }
            }
        }
    });
} (window, document, jQuery)); (function(_0x56ae77, _0x3376a3, _0x1bda25) {
    'use strict';
    _0x1bda25.components.register('slimScroll', {
        'mode': 'default',
        'defaults': {
            'height': '100%',
            'size': '4px',
            'color': _0x1bda25['configs']['colors']['blue-grey']['500'],
            'position': 'right',
            'distance': '1px',
            'railVisible': !![],
            'railColor': _0x1bda25['configs']['colors']['blue-grey']['300'],
            'railOpacity': 0.1,
            'railDraggable': !![],
            'wheelStep': 0xf,
            'borderRadius': '4px',
            'railBorderRadius': '4px'
        }
    });
} (window, document, jQuery)); (function(_0x32327e, _0x2b1cf1, _0x33e533) {
    'use strict';
    _0x33e533.components.register('summernote', {
        'mode': 'default',
        'defaults': {
            height: 0x12c
        }
    });
} (window, document, jQuery)); (function(_0x4c8d51, _0x2089ac, _0x428f91) {
    'use strict';
    _0x428f91.components.register('switchery', {
        'mode': 'init',
        'defaults': {
            'color': _0x428f91['colors']('purple', 0x258)
        },
        'init': function(_0x3b9f9d) {
            if (typeof Switchery === 'undefined') {
                return;
            }
            var _0x61928b = _0x428f91.components['getDefaults']('switchery');
            _0x428f91('[data-plugin="switchery"]', _0x3b9f9d)['each'](function() {
                var _0x397fb7 = _0x428f91['extend']({},
                    _0x61928b, _0x428f91(this)['data']());
                new Switchery(this, _0x397fb7);
            });
        }
    });
} (window, document, jQuery)); (function(_0x60cd18, _0x1f4bd5, _0x448fea) {
    'use strict';
    _0x448fea.components.register('table', {
        'mode': 'api',
        'api': function() {
            var _0x32c589 = typeof _0x1f4bd5['ontouchstart'] !== 'undefined',
                _0x5c3439 = 'click';
            if (_0x32c589) {
                _0x5c3439 = 'touchstart';
            }
            _0x448fea(_0x1f4bd5)['on'](_0x5c3439, '.table-section',
                function(_0x1a3a54) {
                    if ('checkbox' !== _0x1a3a54['target']['type'] && 'button' !== _0x1a3a54['target']['type'] && 'a' !== _0x1a3a54['target']['tagName']['toLowerCase']() && !_0x448fea(_0x1a3a54['target'])['parent']('div.checkbox-custom')['length']) {
                        if (_0x448fea(this)['hasClass']('active')) {
                            _0x448fea(this)['removeClass']('active');
                        } else {
                            _0x448fea(this)['siblings']('.table-section')['removeClass']('active');
                            _0x448fea(this)['addClass']('active');
                        }
                    }
                });
        }
    });
} (window, document, jQuery)); (function(_0xf4bd5, _0x1c4f14, _0x48712d) {
    'use strict';
    _0x48712d.components.register('verticalTab', {
        'mode': 'init',
        'init': function(_0xb8c46b) {
            if (!_0x48712d['fn']['matchHeight']) {
                return;
            }
            _0x48712d('.nav-tabs-vertical', _0xb8c46b)['each'](function() {
                _0x48712d(this)['children']()['matchHeight']();
            });
        }
    });
    _0x48712d.components.register('horizontalTab', {
        'mode': 'init',
        'init': function(_0x8ad9b7) {
            if (!_0x48712d['fn']['responsiveHorizontalTabs']) {
                return;
            }
            var _0x48804e = _0x48712d('[data-approve=\x22nav-tabs\x22]', _0x8ad9b7);
            _0x48804e['each'](function() {
                var _0x562fdc = _0x48712d(this),
                    _0x51a12a = _0x48712d['extend']( !! [], {},
                        _0x562fdc['data']());
                _0x562fdc['responsiveHorizontalTabs'](_0x51a12a);
            });
        }
    });
} (window, document, jQuery)); (function(_0x1b9d8e, _0x40cc95, _0x5d3a5c) {
    'use strict';
    _0x5d3a5c.components.register('taskList', {
        'mode': 'api',
        'api': function() {
            _0x5d3a5c(_0x40cc95)['on']('change.site.task', '[data-role=\x22task\x22]',
                function() {
                    var _0x400591 = _0x5d3a5c(this),
                        _0x2d83e3 = _0x400591['find']('[type="checkbox"]');
                    if (_0x2d83e3['is'](':checked')) {
                        _0x400591['addClass']('task-done');
                    } else {
                        _0x400591['removeClass']('task-done');
                    }
                });
            _0x5d3a5c('[data-role=\x22task\x22]')['trigger']('change.site.task');
        }
    });
} (window, document, jQuery)); (function(_0x51ea19, _0x580158, _0x59eb31) {
    'use strict';
    _0x59eb31.components.register('toastr', {
        'mode': 'api',
        'defaults': {},
        'api': function() {
            if (typeof toastr === 'undefined') {
                return;
            }
            var _0x59a03a = _0x59eb31.components['getDefaults']('toastr');
            _0x59eb31('#admui-pageContent')['on']('click.site.toastr', '[data-plugin=\x22toastr\x22]',
                function(_0x5db386) {
                    _0x5db386['preventDefault']();
                    var _0x220788 = _0x59eb31(this);
                    var _0x27784f = _0x59eb31['extend']( !! [], {},
                        _0x59a03a, _0x220788['data']());
                    var _0x48e704 = _0x27784f['message'] || '';
                    var _0x5061ea = _0x27784f['type'] || 'info';
                    var _0x38ca7d = _0x27784f['title'] || undefined;
                    switch (_0x5061ea) {
                        case 'success':
                            toastr['success'](_0x48e704, _0x38ca7d, _0x27784f);
                            break;
                        case 'warning':
                            toastr['warning'](_0x48e704, _0x38ca7d, _0x27784f);
                            break;
                        case 'error':
                            toastr['error'](_0x48e704, _0x38ca7d, _0x27784f);
                            break;
                        case 'info':
                            toastr['info'](_0x48e704, _0x38ca7d, _0x27784f);
                            break;
                        default:
                            toastr['info'](_0x48e704, _0x38ca7d, _0x27784f);
                    }
                });
        }
    });
} (window, document, jQuery)); (function(_0x52238e, _0x339a54, _0x44032f) {
    'use strict';
    _0x44032f.components.register('toolbar', {
        'mode': 'init',
        'defaults': {
            'adjustment': 0xf,
            'zIndex': 0x76c
        },
        'init': function(scope) {
            if (!_0x44032f['fn']['toolbar']) {
                return;
            }
            var _0xd8a8e6 = _0x44032f.components['getDefaults']('toolbar');
            _0x44032f('[data-plugin="toolbar"]', scope)['each'](function() {
                var _0x3fd214 = _0x44032f(this);
                var _0x2a584e = _0x3fd214['data']('toolbar');
                var _0x1f2443 = _0x44032f['extend']( !! [], {},
                    _0xd8a8e6);
                if (_0x2a584e) {
                    _0x1f2443['content'] = _0x2a584e;
                }
                _0x3fd214['toolbar'](_0x1f2443);
            });
        }
    });
} (window, document, jQuery)); (function(_0x3ddd30, _0x2616ba, _0x2ab176) {
    'use strict';
    _0x2ab176.components.register('twbsPagination', {
        'mode': 'default',
        'defaults': {
            'first': '<span class="icon fa-angle-double-left" title="第一页"></span>',
            'prev': '<span class="icon fa-angle-left" title="上一页"></span>',
            'next': '<span class="icon fa-angle-right" title="下一页"></span>',
            'last': '<span class="icon fa-angle-double-right" title="最后一页"></span>'
        }
    });
} (window, document, jQuery)); (function(window, document, _0x2be8fb) {
    'use strict';
    _0x2be8fb.components.register('webuiPopover', {
        'mode': 'default',
        'defaults': {
            'trigger': 'click',
            'width': 0x140,
            'multi': !![],
            'cloaseable': ![],
            'style': '',
            'delay': 0x12c,
            'padding': !![]
        }
    });
} (window, document, jQuery));
