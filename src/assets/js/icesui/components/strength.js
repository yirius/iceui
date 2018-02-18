(function() {
    'use strict';
    $.components.register('strength', {
        'mode': 'default',
        'defaults': {
            'showMeter': true,
            'showToggle': false,
            'templates': {
                'toggle': '<div class="checkbox-custom checkbox-primary show-password-wrap"><input type="checkbox" class="{toggleClass}" title="显示/隐藏密码" id="show_password" /><label for="show_password">显示密码</label></div>',
                'meter': '<div class="{meterClass}">{score}</div>',
                'score': '<div class="{scoreClass}"></div>',
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
}());
