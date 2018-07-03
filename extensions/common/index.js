const Extension = require('../../core/Extension');

module.exports = new Extension('common', app => {
    app.ui.register('main', `${ __dirname }/windows/main`);

    app.settings.set('ui.theme.palette', {
        primary: '#cc1a3f'
    });

    app.subscribe('run').forEach(() => {
        app.ui.render('main', { width: 1024, height: 768, autoHideMenuBar: true, frame: false, transparent: true, webPreferences: { webSecurity: false } });
    });
});
