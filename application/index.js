const electron = require('electron');
const Application = require('quantum/core/Application');

const application = new Application('Quill');

function main () {
    application.ui.register('main', `${ process.cwd() }/windows/main`);
}

electron.app.on('ready', main);
