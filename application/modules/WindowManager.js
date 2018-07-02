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
            this.show('root');
        });
    }

    show (id = 'root') {
        this.registered.get(id).loadURL(`data:text/html,
            <!doctype html>
            <html>
                <head>
                    <title>${ this.app.kind }</title>
                </head>
                <body>
                    <script>
                        {
                            const ${ APPLICATION } = require('electron').remote.getGlobal('${ APPLICATION }');

                            function ${ APPLICATION }_MAIN (${ APPLICATION }) {
                                const path = '${ __dirname.replace(/\\/g, '/') }/../windows/${ id }';
                                const window = require(path);

                                window.open(${ APPLICATION });
                            }

                            ${ APPLICATION }_MAIN(${ APPLICATION });
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
