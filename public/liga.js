/* A polyfill for browsers that don't support ligatures. */
/* The script tag referring to this file must be placed before the ending body tag. */

/* To provide support for elements dynamically added, this script adds
   method 'icomoonLiga' to the window object. You can pass element references to this method.
*/
(function () {
    'use strict';
    function supportsProperty(p) {
        var prefixes = ['Webkit', 'Moz', 'O', 'ms'],
            i,
            div = document.createElement('div'),
            ret = p in div.style;
        if (!ret) {
            p = p.charAt(0).toUpperCase() + p.substr(1);
            for (i = 0; i < prefixes.length; i += 1) {
                ret = prefixes[i] + p in div.style;
                if (ret) {
                    break;
                }
            }
        }
        return ret;
    }
    var icons;
    if (!supportsProperty('fontFeatureSettings')) {
        icons = {
            'spinner3': '&#xe97c;',
            'loading4': '&#xe97c;',
            'search': '&#xe986;',
            'magnifier': '&#xe986;',
            'star-empty': '&#xe9d7;',
            'rate': '&#xe9d7;',
            'star-half': '&#xe9d8;',
            'rate2': '&#xe9d8;',
            'star-full': '&#xe9d9;',
            'rate3': '&#xe9d9;',
            'google': '&#xea88;',
            'brand2': '&#xea88;',
            'google2': '&#xea89;',
            'brand3': '&#xea89;',
            'google-plus': '&#xea8b;',
            'brand5': '&#xea8b;',
            'google-plus2': '&#xea8c;',
            'brand6': '&#xea8c;',
            'facebook': '&#xea90;',
            'brand10': '&#xea90;',
            'facebook2': '&#xea91;',
            'brand11': '&#xea91;',
          '0': 0
        };
        delete icons['0'];
        window.icomoonLiga = function (els) {
            var classes,
                el,
                i,
                innerHTML,
                key;
            els = els || document.getElementsByTagName('*');
            if (!els.length) {
                els = [els];
            }
            for (i = 0; ; i += 1) {
                el = els[i];
                if (!el) {
                    break;
                }
                classes = el.className;
                if (/icon-/.test(classes)) {
                    innerHTML = el.innerHTML;
                    if (innerHTML && innerHTML.length > 1) {
                        for (key in icons) {
                            if (icons.hasOwnProperty(key)) {
                                innerHTML = innerHTML.replace(new RegExp(key, 'g'), icons[key]);
                            }
                        }
                        el.innerHTML = innerHTML;
                    }
                }
            }
        };
        window.icomoonLiga();
    }
}());
