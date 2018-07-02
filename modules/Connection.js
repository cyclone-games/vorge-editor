const Module = require('../core/Module');

module.exports = class Connection extends Module {

    constructor (name, server) {
        super(name, server);
    }

    connect (server) {

    }

    establish (socket) {

    }

    handshake (id) {

    }

    send (id, message) {

    }

    broadcast (message, except) {

    }
}
