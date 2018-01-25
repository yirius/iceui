(function() {
    'use strict';
    $.components.register('plyr', {
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
            }
            (function(document, _url) {
                var xmlHttp = new XMLHttpRequest(),
                    body = document['body'];
                if ('withCredentials' in xmlHttp) {
                    xmlHttp.open('GET', _url, true);
                    xmlHttp.send();
                    xmlHttp.onload = function() {
                        var _div = document['createElement']('div');
                        _div.style.display = 'none';
                        _div.innerHTML = xmlHttp['responseText'];
                        body.insertBefore(_div, body['childNodes'][0]);
                    };
                }
            }(document, 'https://cdn.plyr.io/1.1.5/sprite.svg'));
            plyr.setup();
        }
    });
}());
