const Window = require(`norway/core/Window`);

const element = require('quark/core/element');

const Flex = require('elementary/components/Flex');
const Frame = require('elementary/components/Frame');
const Menu = require('elementary/components/Menu');
const Pane = require('elementary/components/Pane');
const Tab = require('elementary/components/Tab');
const Toolbar = require('elementary/components/Toolbar');

module.exports = new Window('main', host => {
    element.renderNode(document.body, (
        element(Frame, { name: host.title }, [
            element(Menu, null, [
                element(Menu.Item, null, 'File'),
                element(Menu.Item, null, 'Edit'),
                element(Menu.Item, null, 'View'),
                element(Menu.Item, null, 'Help'),
            ]),
            element(Tab.Group, null, [
                element(Tab, { icon: 'maps/terrain' }, [
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
                            element(Pane, { grow: 1 }),
                            element(Pane, { grow: 1 }),
                            element(Pane, { grow: 1 })
                        ]),
                        element(Flex, { grow: 1 }),
                        element(Pane.Split, { basis: '380px', shrink: 1, grow: 0 }, [
                            element(Flex, { grow: 1, direction: 'column' }, [
                                element(Tab.Group, null, [
                                    element(Tab, { text: 'foo' }, [
                                        element(Pane, { grow: 1 })
                                    ]),
                                    element(Tab, { text: 'bar' }, [
                                        element(Pane, { grow: 1 })
                                    ]),
                                    element(Tab, { text: 'baz' }, [
                                        element(Pane, { grow: 1 })
                                    ])
                                ])
                            ]),
                            element(Pane, { grow: 1 })
                        ]),
                    ]),
                    element(Pane, { style: { marginTop: '4px' } }, [
                        element('div', { style: { height: '12px' } })
                    ])
                ]),
                element(Tab, { icon: 'editor/bubble_chart' }, [
                    element(Toolbar, null, [

                    ]),
                    element(Flex, { grow: 1 }, [

                    ])
                ]),
                element(Tab, { icon: 'action/rounded_corner' }, [
                    element('span', null, 'Another One')
                ]),
                element(Tab, { icon: 'file/folder_open' }, [
                    element('span', null, 'Another One')
                ]),
                element(Tab, { icon: 'action/code' }, [
                    element(Toolbar, null, [

                    ]),
                    element(Pane.Split, { direction: 'row', grow: 1 }, [
                        element(Pane, { basis: '240px', shrink: 1, grow: 0 }),
                        element(Tab.Group, { fluid: true }, [
                            element(Tab, { text: 'foo.js' }, [

                            ]),
                            element(Tab, { text: 'bar.js' }, [

                            ]),
                            element(Tab, { text: 'baz.js' }, [

                            ])
                        ])
                    ])
                ]),
                element(Tab, { icon: 'action/dns' }, [
                    element('span', null, 'Another One')
                ]),
                element(Tab, { icon: 'navigation/apps', align: 'end' }, [
                    element('span', null, 'Another One')
                ])
            ])
        ])
    ));
});
