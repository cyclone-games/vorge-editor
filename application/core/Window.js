module.exports = class Window {

    constructor (name, fn) {
        this.kind = name;
        this.fn = fn;
    }

    open (app) {
        this.fn(app);
    }

    extend () {
        
    }
}
