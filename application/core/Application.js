const Event = require('vorge/core/Event');

const UserInterface = require('../modules/UserInterface');
const WindowManager = require('../modules/WindowManager');

module.exports = class Application extends Event.Emitter {

    constructor (name, extensions = [ ]) {
        super(name);

        this.extensions = extensions;

        for (const module of Object.keys(this.constructor)) {
            this[ module ] = new this.constructor[ module ](module, this);
        }

        const exclude = [ 'kind', 'extensions', 'observables' ];
        const modules = Object.keys(this).filter(key => !exclude.includes(key));

        for (const mod of modules.map(mod => this[ mod ])) {
            mod.connect(this);
        }

        this.refresh();
    }

    refresh (hard) {
        for (const extension of this.extensions) if (hard || !extension.enabled) {
            extension.enable(this);
        }
    }

    run () {
        this.emit('run', [ ]);
    }

    extend (extension) {
        this.extensions.push(extension);
    }
};

module.exports.ui = UserInterface;
module.exports.windows = WindowManager;
