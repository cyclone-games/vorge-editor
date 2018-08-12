const fs = require('fs');

const codemirror = require('codemirror');

const Component = require('quark/core/Component');
const element = require('quark/core/element');

const Explorer = require('elementary/components/Explorer');
const Flex = require('elementary/components/Flex');
const Pane = require('elementary/components/Pane');
const Toolbar = require('elementary/components/Toolbar');
const palette = require('elementary/core/palette');

class AssetManager extends Component {

    get css () {
        const { background, foreground, highlight, darklight } = palette;

        return `
            :host {
                display: flex;
                flex-grow: 1;
                flex-direction: column;
            }

            ${ Toolbar.elementName }:not(#main-toolbar) {
                margin: -4px -4px 0;
                border-top: 1px solid hsla(${ highlight[ 0 ] }, ${ highlight[ 1 ] }%, ${ highlight[ 2 ] }%, 1);
            }
        `;
    }

    handleComponentReady () {
        Object.assign(Explorer.File.types, {
            'quill/map': 'maps/layers'
        });
    }

    render () {
        return [
            element(Toolbar, { id: 'main-toolbar' }, [
                element(Toolbar.Button, { icon: 'navigation/arrow_back' }),
                element(Toolbar.Button, { icon: 'navigation/arrow_forward' }),
                element(Toolbar.Button, { icon: 'navigation/refresh' }),
                element(Toolbar.Button, { icon: 'navigation/first_page' }),
                element(Toolbar.Divider),
                element(Toolbar.Label, { text: '/project name/assets' })
            ]),
            element(Pane.Split, { direction: 'row', grow: 1 }, [
                element(Explorer, { onselect: e => { }, onopen: e => { } }, [
                    element(Explorer.Directory, { name: 'audios' }, [ ]),
                    element(Explorer.Directory, { name: 'images' }, [ ]),
                    element(Explorer.Directory, { name: 'videos' }, [ ]),
                    element(Explorer.Directory, { name: 'scripts' }, [ ]),
                    element(Explorer.File, { name: 'assets.json', type: 'application/json' }),
                    element(Explorer.File, { name: 'foo.map', type: 'quill/map' })
                ]),
                element(Pane, { basis: '400px' }, [
                    element(Toolbar, { small: true }, [
                        element(Toolbar.Label, { text: 'File Information' })
                    ])
                ])
            ])
        ];
    }
}

AssetManager.elementName = 'quill-asset-manager';

AssetManager.defaultProperties = {

};

module.exports = AssetManager;
