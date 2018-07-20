const Component = require('quark/core/Component');
const element = require('quark/core/element');

const Flex = require('elementary/components/Flex');
const Menu = require('elementary/components/Menu');
const Pane = require('elementary/components/Pane');
const Tab = require('elementary/components/Tab');
const Toolbar = require('elementary/components/Toolbar');
const palette = require('elementary/core/palette');

class TilePainter extends Component {

    get css () {
        const { foreground } = palette;

        return `
            :host {
                display: flex;
                flex-direction: column;
                flex-grow: 1;
            }

            #editor {
                position: relative;
            }

            #background {
                position: absolute;
                top: 0;
                right: 0;
                bottom: 0;
                left: 0;
                display: flex;
                align-items: center;
                justify-content: center;
                background-image: linear-gradient(rgba(255, 255, 255, .05) 1px, transparent 1px),
                                  linear-gradient(90deg, rgba(255, 255, 255, .05) 1px, transparent 1px);
                background-size: 8px 8px, 8px 8px;
                background-position: -1px -1px, -1px -1px;
                border: 1px solid rgba(255, 255, 255, .05);
            }

            #chunk {
                width: 640px;
                height: 480px;
                background-color: hsla(${ foreground[ 0 ] + 1 }, ${ foreground[ 1 ] }%, ${ foreground[ 2 ] - 4 }%, 0.96);
                background-image: linear-gradient(45deg, rgba(0, 0, 0, 0.18) 25%, transparent 25%, transparent 75%, rgba(0, 0, 0, 0.18) 75%, rgba(0, 0, 0, 0.18)),
                                  linear-gradient(45deg, rgba(0, 0, 0, 0.18) 25%, transparent 25%, transparent 75%, rgba(0, 0, 0, 0.18) 75%, rgba(0, 0, 0, 0.18));
                background-size: 16px 16px;
                background-position: 0 0, 8px 8px;
                box-shadow: 0 0 16px rgba(0, 0, 0, 0.25);
            }
        `;
    }

    render () {
        return [
            element(Toolbar, null, [
                element(Toolbar.Button, { icon: 'content/save' }),
                element(Toolbar.Button, { icon: 'content/undo' }),
                element(Toolbar.Button, { icon: 'content/redo' }),
                element(Toolbar.Divider),
                element(Toolbar.Button, { icon: 'action/zoom_in' }),
                element(Toolbar.Button, { icon: 'action/zoom_out' }),
                element(Toolbar.Divider),
                element(Toolbar.Button, { icon: 'editor/border_color' }),
                element(Toolbar.Button, { icon: 'editor/format_color_fill' }),
                element(Toolbar.Button, { icon: 'image/colorize' }),
                element(Toolbar.Button, { icon: 'editor/border_outer' })
            ]),
            element(Pane.Split, { direction: 'row', grow: 1 }, [
                element(Pane.Split, { basis: '240px', shrink: 1, grow: 0 }, [
                    element(Pane, { grow: 1 }, [
                        element(Menu.Tree, { }, [
                            element(Menu.Item, { text: 'realms' }, [
                                element(Menu.Item, { text: 'untitled-realm' })
                            ])
                        ])
                    ]),
                    element(Pane, { grow: 1 }, [
                        element(Menu.Tree, { }, [
                            element(Menu.Item, { text: 'chunks' }, [
                                element(Menu.Item, { text: 'untitled-chunk' }),
                                element(Menu.Item, { text: 'untitled-chunk-1' }),
                                element(Menu.Item, { text: 'untitled-chunk-2' })
                            ])
                        ])
                    ])
                ]),
                element(Flex, { id: 'editor', grow: 1 }, [
                    element('section', { id: 'background' }, [
                        element('article', { id: 'chunk' })
                    ])
                ]),
                element(Pane.Split, { basis: '320px', shrink: 1, grow: 0 }, [
                    element(Flex, { grow: 1, direction: 'column' }, [
                        element(Tab.Group, { }, [
                            element(Tab, { text: 'Tilesets' }, [
                                element(Pane, { connected: true, grow: 1 })
                            ]),
                            element(Tab, { text: 'Properties' }, [
                                element(Pane, { connected: true, grow: 1 })
                            ])
                        ])
                    ]),
                    element(Pane, { grow: 1 }, [
                        element(Menu.Tree, { }, [
                            element(Menu.Item, { text: 'layers' }, [
                                element(Menu.Item, { text: 'untitled-layer-1' }),
                                element(Menu.Item, { text: 'untitled-layer' }),
                                element(Menu.Item, { text: 'ground' })
                            ])
                        ])
                    ])
                ]),
            ]),
            element(Pane, { style: { marginTop: '4px' } }, [
                element('div', { style: { height: '12px' } })
            ])
        ]
    }
}

TilePainter.elementName = 'vorge-tile-painter';

module.exports = TilePainter;
