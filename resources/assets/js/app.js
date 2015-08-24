global.jQuery = global.$ = require('jQuery');
require('bootstrap');
require('./minify.js');

$.ajaxSetup({
    headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    }
});
