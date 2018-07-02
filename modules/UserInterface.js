const { BrowserWindow } = require('electron');

const Module = require('../core/Module');

module.exports = class UserInterface extends Module {

    constructor (kind, app) {
        super(kind, app);
    }

    connect (app) {

    }
}
