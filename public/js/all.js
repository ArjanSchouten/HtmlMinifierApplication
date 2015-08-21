'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

require('./option.js');

var Options = (function () {
    function Options() {
        _classCallCheck(this, Options);
    }

    _createClass(Options, null, [{
        key: 'getOptions',
        value: function getOptions() {
            $('#minify-options').children('input').map(function (checkbox) {
                var option = {};
                option.name = checkbox.getAttribute('name');
                option.enabled = checkbox.is(':checked');

                return option;
            }).toArray();
        }
    }]);

    return Options;
})();

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
//# sourceMappingURL=all.js.map