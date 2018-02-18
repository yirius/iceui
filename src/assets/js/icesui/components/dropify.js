/**
 * Created by yangyuance1 on 2017/11/17.
 */
(function() {
    'use strict';
    $.components.register('dropify', {
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
}());
