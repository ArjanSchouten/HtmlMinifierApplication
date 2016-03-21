global.jQuery = global.$ = require('jquery');
require('bootstrap');
require('./minify.js');

$.ajaxSetup({
    headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    }
});
