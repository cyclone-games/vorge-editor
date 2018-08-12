const fs = require('fs');

const codemirror = require('codemirror');

const Component = require('quark/core/Component');
const element = require('quark/core/element');

const Canvas = require('elementary/components/Canvas');
const Flex = require('elementary/components/Flex');
const Menu = require('elementary/components/Menu');
const Pane = require('elementary/components/Pane');
const Tab = require('elementary/components/Tab');
const Toolbar = require('elementary/components/Toolbar');
const palette = require('elementary/core/palette');

class UIDesigner extends Component {

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

    render () {
        return [
            element(Toolbar, { }, [

            ]),
            element(Pane.Split, { grow: 1, direction: 'row' }, [
                element(Pane.Split, { direction: 'column', basis: '280px' }, [
                    element(Pane, { }, [
                        element(Toolbar, { small: true }, [
                            element(Toolbar.Label, { text: 'User Interfaces' }),
                            element(Flex, { grow: 1, justify: 'flex-end' }, [
                                element(Toolbar.Button, { icon: 'content/remove' }),
                                element(Toolbar.Button, { icon: 'content/add' })
                            ])
                        ]),
                        element(Menu.Tree, { }, [
                            element(Menu.Item, { text: 'interfaces' }, [
                                element(Menu.Item, { text: 'Main Menu' }),
                                element(Menu.Item, { text: 'Inventory' })
                            ])
                        ])
                    ]),
                    element(Pane, { grow: 1 }, [
                        element(Toolbar, { small: true }, [
                            element(Toolbar.Label, { text: 'Widgets' })
                        ])
                    ])
                ]),
                element(Tab.Group, { fluid: true }, [
                    element(Tab, { text: 'Main Menu', temporary: true }, [
                        element(Flex, { grow: 1, align: 'center', justify: 'center' }, [
                            element(Canvas, { id: 'preview', width: 800, height: 600 })
                        ])
                    ]),
                    element(Tab, { text: 'Inventory', temporary: true }, [

                    ])
                ])
            ])
        ];
    }
}

UIDesigner.elementName = 'quill-ui-designer';

UIDesigner.defaultProperties = {

};

module.exports = UIDesigner;
