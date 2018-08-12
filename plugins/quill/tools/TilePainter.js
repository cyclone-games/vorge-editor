const electron = require('electron');

const Component = require('quark/core/Component');
const element = require('quark/core/element');

const Canvas = require('elementary/components/Canvas');
const Flex = require('elementary/components/Flex');
const Input = require('elementary/components/Input');
const Menu = require('elementary/components/Menu');
const Pane = require('elementary/components/Pane');
const Tab = require('elementary/components/Tab');
const Toolbar = require('elementary/components/Toolbar');
const palette = require('elementary/core/palette');

class TilePainter extends Component {

    get css () {
        const { foreground, highlight } = palette;

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
                display: flex;
                width: 100%;
                align-items: center;
                justify-content: center;
                background-image: linear-gradient(rgba(255, 255, 255, .05) 1px, transparent 1px),
                                  linear-gradient(90deg, rgba(255, 255, 255, .05) 1px, transparent 1px);
                background-size: 8px 8px, 8px 8px;
                background-position: -1px -1px, -1px -1px;
                border: 1px solid rgba(255, 255, 255, .05);
            }

            #tileset {
                display: block;
                flex-grow: 1;
                flex-shrink: 0;
            }

            ${ Toolbar.elementName }:not(#main-toolbar) {
                margin: -4px -4px 0;
                border-top: 1px solid hsla(${ highlight[ 0 ] }, ${ highlight[ 1 ] }%, ${ highlight[ 2 ] }%, 1);
            }

            ${ Toolbar.elementName }#info-toolbar {
                margin: 4px 0 -4px;
            }
        `;
    }

    handleComponentReady () {
        const { brand } = palette;

        window.requestAnimationFrame(() => {
            const chunk = this.shadowRoot.getElementById('chunk');
            const context = chunk.getContext('2d');

            chunk.onclick = event => {
                const position = chunk.getBoundingClientRect();
                const x = event.clientX - position.left;
                const y = event.clientY - position.top;

                context.fillStyle = `hsl(${ brand[ 0 ] }, ${ brand[ 1 ] }%, ${ brand[ 2 ] }%)`;
                context.fillRect(x - (x % 32), y - (y % 32), 32, 32);
            };
        });
    }

    render () {
        return [
            element(Toolbar, { id: 'main-toolbar' }, [
                element(Toolbar.Button, { icon: 'content/save' }),
                element(Toolbar.Button, { icon: 'content/undo' }),
                element(Toolbar.Button, { icon: 'content/redo' }),
                element(Toolbar.Divider),
                element(Toolbar.Button, { icon: 'action/zoom_in' }),
                element(Toolbar.Button, { icon: 'action/zoom_out' }),
                element(Toolbar.Divider),
                element(Toolbar.Button, { icon: 'editor/border_color', toggle: true, group: 'paint' }),
                element(Toolbar.Button, { icon: 'editor/format_color_fill', toggle: true, group: 'paint' }),
                element(Toolbar.Button, { icon: 'image/colorize', toggle: true, group: 'paint' }),
                element(Toolbar.Button, { icon: 'editor/border_outer', toggle: true, group: 'paint' })
            ]),
            element(Pane.Split, { direction: 'row', grow: 1 }, [
                element(Pane.Split, { basis: '240px', shrink: 1, grow: 0 }, [
                    element(Pane, { grow: 1 }, [
                        element(Toolbar, { small: true }, [
                            element(Toolbar.Label, { text: 'Realms' }),
                            element(Flex, { grow: 1, justify: 'flex-end' }, [
                                element(Toolbar.Button, { icon: 'content/remove' }),
                                element(Toolbar.Button, { icon: 'content/add' })
                            ])
                        ]),
                        element(Menu.Tree, { }, [
                            element(Menu.Item, { text: 'realms' }, [
                                element(Menu.Item, { text: 'world' })
                            ])
                        ])
                    ]),
                    element(Pane, { grow: 1 }, [
                        element(Toolbar, { small: true }, [
                            element(Toolbar.Label, { text: 'Chunks' }),
                            element(Flex, { grow: 1, justify: 'flex-end' }, [
                                element(Toolbar.Button, { icon: 'content/remove' }),
                                element(Toolbar.Button, { icon: 'content/add' })
                            ])
                        ]),
                        element(Menu.Tree, { }, [
                            element(Menu.Item, { text: 'chunks' }, [
                                element(Menu.Item, { text: 'spawn' })
                            ])
                        ])
                    ])
                ]),
                element(Flex, { id: 'editor', grow: 1 }, [
                    element('section', { id: 'background' }, [
                        element(Canvas, { id: 'chunk', width: 800, height: 600 })
                    ])
                ]),
                element(Pane.Split, { basis: '320px', shrink: 1, grow: 0 }, [
                    element(Flex, { grow: 1, direction: 'column' }, [
                        element(Tab.Group, { }, [
                            element(Tab, { text: 'Tilesets' }, [
                                element(Pane, { connected: true, grow: 1 }, [
                                    element('div', { style: { padding: '0 0 4px' } }, [
                                        element(Input, { type: 'select' }, [

                                        ])
                                    ]),
                                    element(Canvas, { id: 'tileset', grow: 1 })
                                ])
                            ]),
                            element(Tab, { text: 'Properties' }, [
                                element(Pane, { connected: true, grow: 1 })
                            ])
                        ])
                    ]),
                    element(Flex, { grow: 1, direction: 'column' }, [
                        element(Pane, { grow: 1 }, [
                            element(Toolbar, { small: true }, [
                                element(Toolbar.Label, { text: 'Layers' }),
                                element(Flex, { grow: 1, justify: 'flex-end' }, [
                                    element(Toolbar.Button, { icon: 'content/remove' }),
                                    element(Toolbar.Button, { icon: 'content/add' })
                                ])
                            ]),
                            element(Menu.Tree, { }, [
                                element(Menu.Item, { text: 'layers' }, [
                                    element(Menu.Item, { text: 'obstacles' }),
                                    element(Menu.Item, { text: 'road' }),
                                    element(Menu.Item, { text: 'ground' })
                                ])
                            ])
                        ])
                    ])
                ]),
            ]),
            element(Toolbar, { id: 'info-toolbar', small: true }, [
                element(Toolbar.Label, { text: 'Information' })
            ])
        ]
    }
}

TilePainter.elementName = 'quill-tile-painter';

TilePainter.initialState = {
    realm: null,
    chunk: null,
    layer: null,
    tileset: null,
    tile: null,
    tool: null
};

module.exports = TilePainter;
