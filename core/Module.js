const Module = require('vorge/core/Module');

module.exports = class ApplicationModule extends Module {

    constructor (kind, app) {
        super(kind, app, 'app');
    }
}
