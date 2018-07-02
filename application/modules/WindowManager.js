const { BrowserWindow } = require('electron');

const Module = require('../core/Module');

module.exports = class WindowManager extends Module {

    constructor (kind, app) {
        super(kind, app);

        this.registered = new Map();
    }

    connect (app) {
        app.subscribe('run').forEach(method => {
            this.register('root', {
                src: '_/client.html',
                width: 800,
                height: 600
            });

            this.open(...method.arguments);
        });
    }

    open (id = 'root') {
        const { src, window } = this.registered.get(id);

        window.loadURL(`file://${ process.cwd() }/${ src }`);
    }

    register (id, { src, width, height }) {
        const window = new BrowserWindow({ width, height });

        this.registered.set(id, { src, window });
    }
}
