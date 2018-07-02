module.exports = class Extension {

    constructor (name, fn) {
        this.enabled = false;
        this.kind = name;
        this.fn = fn;
    }

    enable (app) {
        this.fn(app);
    }
}
