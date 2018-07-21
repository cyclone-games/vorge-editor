const Plugin = require('quantum/core/Plugin');

module.exports = new Plugin('vorge', application => {
    application.tabs.create('tilepainter', {
        name: '2D Tile Painter',
        icon: 'maps/layers',
        src: `${ __dirname }/tools/TilePainter`
    });
    application.tabs.create('scripteditor', {
        name: 'Script Editor',
        icon: 'action/code',
        src: `${ __dirname }/tools/ScriptEditor`
    });
});
