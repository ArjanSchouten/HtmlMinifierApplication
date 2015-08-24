var Vue = require('vue');
global.$ = require('jquery');
var Options = require('./options.js');

var vm = new Vue({
    el: '#html-minify',
    data: {
        'output': ''
    },
    methods: {
        minifyHtml: function(e) {
            var form = $('#html-minify');

            var options = Options.getOptions();

            $.ajax({
                url: form.attr('action'),
                method: form.attr('method'),
                data: {
                    'html': $('#html-input').val(),
                    'options': options
                },
                success: function (data) {
                    vm.$data.output = data.html;
                }
            });

            e.preventDefault();
        }
    }
});
