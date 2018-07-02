const fs = require('fs');
const { BrowserWindow } = require('electron');

const Module = require('../core/Module');

const APPLICATION = `APPLICATION_${ Math.round(Math.random() * Date.now()) }`;

module.exports = class WindowManager extends Module {

    constructor (kind, app) {
        super(kind, app);

        this.registered = new Map();
    }

    connect (app) {
        global[ APPLICATION ] = app;

        app.subscribe('run').forEach(() => {
            this.register('root', { width: 800, height: 600 });
            this.open('root');
        });
    }

    open (id, path = `${ __dirname }/../windows/`) {
        this.registered.get(id).loadURL(`data:text/html,
            <!doctype html>
            <html>
                <head>
                    <title>${ this.app.kind }</title>
                </head>
                <body>
                    <script>
                        {
                            const electron = require('electron');
                            const app = electron.remote.getGlobal('${ APPLICATION }');
                            const path = '${( path.match(/\/$/) ? path : `${ path }/`).replace(/\\/g, '/') }${ id }';
                            const window = require(path);

                            window.open(app);
                        }
                    </script>
                </body>
            </html>
        `);
    }

    register (id, { width, height }) {
        this.registered.set(id, new BrowserWindow({ width, height }));
    }
}
