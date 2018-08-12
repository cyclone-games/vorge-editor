const Window = require(`norway/core/Window`);

const element = require('quark/core/element');

const Flex = require('elementary/components/Flex');
const Frame = require('elementary/components/Frame');
const Menu = require('elementary/components/Menu');
const Pane = require('elementary/components/Pane');
const Tab = require('elementary/components/Tab');
const Toolbar = require('elementary/components/Toolbar');

module.exports = new Window('main', application => {
    element.renderNode(document.body, (
        element(Frame, { name: application.title }, [
            element(Menu, null, [
                element(Menu.Item, { text: 'File' }),
                element(Menu.Item, { text: 'Edit' }),
                element(Menu.Item, { text: 'View' }),
                element(Menu.Item, { text: 'Help' }),
            ]),
            element(Tab.Group, null, Object.values(application.tabs.collection).map(tab => (
                element(Tab, { icon: tab.icon, name: tab.name, align: tab.location || 'start' }, [
                    element(require(tab.src), { application })
                ])
            )).concat([
                element(Tab, { icon: 'navigation/apps', name: 'Dashboard', align: 'end' }, [

                ])
            ]))
        ])
    ));
});
