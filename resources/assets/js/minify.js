var Vue = require('vue');
var $ = require('jquery');

alert('test');
console.log(Options.getOptions());

var vm = new Vue({
    el: '#html-minify',
    data: {
        'output': ''
    },
    methods: {
        minifyHtml: function(e) {
            var form = $('#html-minify');

            $.ajax({
                url: form.attr('action'),
                method: form.attr('method'),
                data: {
                    'html': $('#html-input').val(),
                    'options': []
                },
                success: function (data) {
                    vm.$data.output = data.html;
                }
            });
            e.preventDefault();
        }
    }
});
