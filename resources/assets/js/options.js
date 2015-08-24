global.$ = require('jquery');
var Option = require('./option.js');

class Options {
    static getOptions() {
        return $('#minify-options').find('input').map(function (index, element) {
            var element = $(element);
            var name = element.attr('name');
            var enabled = element.is(':checked');
            var option = new Option(name, enabled);

            return option;
        }).toArray();
    }
}

module.exports = Options;