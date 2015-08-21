class Options {
    static getOptions() {
        $('#minify-options').children('input').map(function (checkbox) {
            var name = checkbox.getAttribute('name');
            var enabled = checkbox.is(':checked');
            var option = new Option(name,  enabled);

            return option;
        }).toArray();
    }
}
