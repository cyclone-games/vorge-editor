const Application = require('norway/core/Application');
const common = require('norway/plugins/common');
const electron = require('electron');

const vorge = require('./plugins/vorge');

function main () {
    const quill = new Application('Quill', [ common, vorge ]);

    quill.ui.register('main', `${ process.cwd() }/windows/main`);
    quill.start();
}

electron.app.on('ready', main);
