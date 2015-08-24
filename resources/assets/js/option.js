class Option {
    constructor(name, enabled) {
        this.name = name;
        this.enabled = enabled;
    }

    getName() {
        return this.name;
    }

    setName(value) {
        this.name = value;
    }

    isEnabled() {
        return this.isEnabled;
    }

    setEnabled(value) {
        _this.isEnabled = value;
    }
}

module.exports = Option;
