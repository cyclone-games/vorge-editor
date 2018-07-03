const { BrowserWindow } = require('electron');

const Module = require('../core/Module');

const APPLICATION = `APPLICATION_${ Math.round(Math.random() * Date.now()) }`;

module.exports = class UserInterface extends Module {

    constructor (kind, app) {
        super(kind, app);

        this.windows = new Map();

        global[ APPLICATION ] = app;
    }

    connect (app) {
        app.subscribe('window').forEach(method => this.render(...method.arguments));
    }

    register (id, src, options) {
        this.windows.set(id, { browser: null, options, html: `
            <!doctype html>
            <html>
                <head>
                    <title>${ this.app.kind }</title>
                    <style>
                        html, body {
                            display: flex;
                            width: 100%;
                            height: 100%;
                            margin: 0;
                        }
                    </style>
                </head>
                <body>
                    <script>
                        {
                            const application = require('electron').remote.getGlobal('${ APPLICATION }');
                            const window = require('${ src }');

                            window.open(application);
                        }
                    </script>
                </body>
            </html>
        `.replace(/\\/g, '/') });
    }

    render (id, options) {
        const window = this.windows.get(id);

        if (window) {

            if (!window.browser) {
                window.browser = new BrowserWindow({ ...window.options, ...options });
            }

            window.browser.loadURL(`data:text/html,${ window.html }`);
        }
        else {
            throw new Error('No');
        }
    }
}
