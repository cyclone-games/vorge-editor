const element = require('quark/core/element');

const Window = require('../../../../core/Window');

const Container = require('../../components/Container');
const Toolbar = require('../../components/Toolbar');

module.exports = new Window('main', app => {
    const palette = app.settings.get('ui.theme.palette');

    console.log(palette);

    document.body.appendChild(new Container({ }, [
        element(Toolbar),
        element('div', { style: { width: '100%', height: '48px', background: '#1b1824' } })
    ]));
});
