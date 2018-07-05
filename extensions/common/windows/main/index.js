const webfontloader = require('webfontloader');

const Flex = require('elementary/components/Flex');
const Frame = require('elementary/components/Frame');
const Menu = require('elementary/components/Menu');
const Pane = require('elementary/components/Pane');
const Tab = require('elementary/components/Tab');
const Toolbar = require('elementary/components/Toolbar');

const element = require('quark/core/element');

const Window = require(`${ process.cwd() }/core/Window`);

module.exports = new Window('main', app => {
    webfontloader.load({ google: { families: [ 'Open+Sans:300' ] } });

    element.renderNode(document.body, (
        element(Frame, { name: 'Vorge Editor' }, [
            element(Menu, null, [
                element(Menu.Item, null, 'File'),
                element(Menu.Item, null, 'Edit'),
                element(Menu.Item, null, 'View'),
                element(Menu.Item, null, 'Help'),
            ]),
            element(Tab.Group, { style: { flexGrow: 1 } }, [
                element(Tab, { icon: 'maps/terrain' }, [
                    element(Toolbar, null, [

                    ]),
                    element(Flex, { style: { flexGrow: 1 } }, [
                        element(Pane, { width: 280 }),
                        element(Flex, { style: { flexGrow: 1 } })
                    ])
                ]),
                element(Tab, { icon: 'editor/bubble_chart' }, [
                    element('span', null, 'Tab #2')
                ]),
                element(Tab, { icon: 'action/rounded_corner' }, [
                    element('span', null, 'Another One')
                ]),
                element(Tab, { icon: 'file/folder_open' }, [
                    element('span', null, 'Another One')
                ]),
                element(Tab, { icon: 'action/code' }, [
                    element('span', null, 'Another One')
                ]),
                element(Tab, { icon: 'action/dns' }, [
                    element('span', null, 'Another One')
                ]),
                element(Tab, { icon: 'navigation/apps', align: 'end' }, [
                    element('span', null, 'Another One')
                ])
            ]),
            element(Pane, { style: { margin: '0 4px 4px' } }, [
                element('div', { style: { height: '12px' } })
            ])
        ])
    ));
});
