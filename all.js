'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var $ = require('jquery');
window.jQuery = $;
var bootstrap = require('bootstrap');

$.ajaxSetup({
    headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    }
});

var minify = require('./minify.js');
var Vue = require('vue');
var $ = require('jquery');

var vm = new Vue({
    el: '#html-minify',
    data: {
        'output': ''
    },
    methods: {
        minifyHtml: function minifyHtml(e) {
            var form = $('#html-minify');

            var options = require('./options.js');
            alert(options.exports.options.Options.getOptions());
            $.ajax({
                url: form.attr('action'),
                method: form.attr('method'),
                data: {
                    'html': $('#html-input').val(),
                    'options': []
                },
                success: function success(data) {
                    vm.$data.output = data.html;
                }
            });
            e.preventDefault();
        }
    }
});

var Option = (function () {
    function Option(name, enabled) {
        _classCallCheck(this, Option);

        this.name = name;
        enabled = enabled;
    }

    _createClass(Option, [{
        key: 'getName',
        value: function getName() {
            return this.name;
        }
    }, {
        key: 'setName',
        value: function setName(value) {
            this.name = value;
        }
    }, {
        key: 'isEnabled',
        value: function isEnabled() {
            return this.isEnabled;
        }
    }, {
        key: 'setEnabled',
        value: function setEnabled(value) {
            _this.isEnabled = value;
        }
    }]);

    return Option;
})();

var Options = (function () {
    function Options() {
        _classCallCheck(this, Options);
    }

    _createClass(Options, null, [{
        key: 'getOptions',
        value: function getOptions() {
            $('#minify-options').children('input').map(function (checkbox) {
                var name = checkbox.getAttribute('name');
                var enabled = checkbox.is(':checked');
                var option = new Option(name, enabled);

                return option;
            }).toArray();
        }
    }]);

    return Options;
})();
//# sourceMappingURL=all.js.map