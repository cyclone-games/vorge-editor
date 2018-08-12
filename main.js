const Application = require('norway/core/Application');
const common = require('norway/plugins/common');
const electron = require('electron');

const quill = require('./plugins/quill');

function main () {
    const application = new Application('Quill', [ common, quill ]);

    application.ui.register('main', `${ process.cwd() }/windows/main`);
    application.start();
}

electron.app.on('ready', main);
