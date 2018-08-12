const Plugin = require('quantum/core/Plugin');

module.exports = new Plugin('quill', application => {
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
    application.tabs.create('assets', {
        name: 'Asset Manager',
        icon: 'file/folder_open',
        src: `${ __dirname }/tools/AssetManager`
    });
    application.tabs.create('entities', {
        name: 'Entity Creator',
        icon: 'av/recent_actors',
        src: `${ __dirname }/tools/EntityCreator`
    });
    application.tabs.create('particles', {
        name: 'Particle Designer',
        icon: 'editor/bubble_chart',
        src: `${ __dirname }/tools/ParticleDesigner`
    });
    application.tabs.create('ui', {
        name: 'UI Designer',
        icon: 'action/picture_in_picture',
        src: `${ __dirname }/tools/UIDesigner`
    });
    application.tabs.create('help', {
        name: 'Help',
        location: 'end',
        icon: 'action/help_outline',
        src: `${ __dirname }/tools/Help`
    });
});
