const Application = require('norway/core/Application');
const common = require('norway/plugins/common');
const electron = require('electron');

const Toolbox = require('./modules/Toolbox');

const scriptEditor = require('./tools/scriptEditor');

Object.assign(Application.modules, {
    tools: Toolbox
});

function main () {
    const quill = new Application('Quill', [ common ]);

    quill.ui.register('main', `${ process.cwd() }/windows/main`);
    quill.tools.add(scriptEditor);
    quill.start();
}

electron.app.on('ready', main);
