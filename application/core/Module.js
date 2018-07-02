const Module = require('vorge/core/Module');

module.exports = class ApplicationModule extends Module {

    constructor (kind, game) {
        super(kind, game);
        delete this.game;
        this.app = game;
    }
}
