module.exports = class Window {

    constructor (name, options, fn) {
        this.kind = name;
        this.fn = fn;
    }

    open (app) {
        this.fn(app);
    }

    extend () {

    }
}
