const fs = require('fs');

const codemirror = require('codemirror');

const Component = require('quark/core/Component');
const element = require('quark/core/element');

const Explorer = require('elementary/components/Explorer');
const Flex = require('elementary/components/Flex');
const Input = require('elementary/components/Input');
const Pane = require('elementary/components/Pane');
const Tab = require('elementary/components/Tab');
const Table = require('elementary/components/Table');
const Toolbar = require('elementary/components/Toolbar');
const palette = require('elementary/core/palette');

class EntityCreator extends Component {

    get css () {
        const { background, foreground, highlight, darklight } = palette;

        return `
            :host {
                display: flex;
                flex-grow: 1;
                flex-direction: column;
            }

            #pad {
                flex-grow: 0;
                flex-shrink: 1;
                width: 0;
                height: 0;
                margin-top: 4px;
            }
        `;
    }

    render () {
        return [
            element('div', { id: 'pad' }),
            element(Tab.Group, { }, [
                element(Tab, { text: 'Entities' }, [
                    element(Pane.Split, { grow: 1, direction: 'row' }, [
                        element(Flex, { grow: 1, direction: 'column' }, [
                            element(Toolbar, { }),
                            element(Table, { columns: [ '#', 'Kind', 'Components' ] }, [
                                element(Table.Row, { }, [
                                    element(Table.Cell, { }, '1'),
                                    element(Table.Cell, { }, 'player'),
                                    element(Table.Cell, { }, 'input, position, size, texture')
                                ]),
                                element(Table.Row, { }, [
                                    element(Table.Cell, { }, '2'),
                                    element(Table.Cell, { }, 'enemy'),
                                    element(Table.Cell, { }, 'position, size, texture')
                                ]),
                                element(Table.Row, { }, [
                                    element(Table.Cell, { }, '3'),
                                    element(Table.Cell, { }, 'ur_mom'),
                                    element(Table.Cell, { }, 'position, size, texture')
                                ]),
                                element(Table.Row, { }, [
                                    element(Table.Cell, { }, '4'),
                                    element(Table.Cell, { }, 'ur_dad'),
                                    element(Table.Cell, { }, 'position, size, texture')
                                ])
                            ])
                        ]),
                        element(Pane, { grow: 1 }, [
                            element('div', { style: { padding: '8px' } }, [
                                element(Input, { type: 'text', label: 'kind' }),
                                element(Input.Group, { label: 'position' }, [
                                    element(Input, { type: 'number', label: 'x' }),
                                    element('div', { style: { width: '8px' } }),
                                    element(Input, { type: 'number', label: 'y' }),
                                    element('div', { style: { width: '8px' } }),
                                    element(Input, { type: 'number', label: 'z' })
                                ]),
                                element(Input.Group, { label: 'size' }, [
                                    element(Input, { type: 'number', label: 'width' }),
                                    element('div', { style: { width: '8px' } }),
                                    element(Input, { type: 'number', label: 'height' })
                                ]),
                                element(Input.Group, { label: 'texture' }, [
                                ])
                            ])
                        ])
                    ])
                ]),
                element(Tab, { text: 'Components' }, [

                ]),
                element(Tab, { text: 'Systems' }, [

                ])
            ])
        ];
    }
}

EntityCreator.elementName = 'quill-entity-creator';

EntityCreator.defaultProperties = {

};

module.exports = EntityCreator;
