const Plugin = require('quantum/core/Plugin');

module.exports = new Plugin('vorge', application => {
    console.log(application);
    application.tabs.create('scripteditor', {
        name: 'Script Editor',
        icon: 'action/code',
        src: `${ __dirname }/components/ScriptEditor`
    });
});
