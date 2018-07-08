const Module = require('quantum/core/Module');

class Toolbox extends Module {

    connect () {

    }

    add (tool) {
        this.box.set(tool.name, tool);
    }
}

module.exports = Toolbox;
