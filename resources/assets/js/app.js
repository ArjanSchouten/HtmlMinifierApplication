alert('test');

var $ = require('jquery');
window.jQuery = $;
var bootstrap = require('bootstrap');

$.ajaxSetup({
    headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    }
});

var minify = require('./minify.js');