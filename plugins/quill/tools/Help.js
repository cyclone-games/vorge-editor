const markdown = require('markdown-it');

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

const GameDocumentation = require('vorge/documentation/core/Game');

const tree = [
    {
        name: 'guides',
        children: [
            { name: 'Getting Started' }
        ]
    },
    {
        name: 'documentation',
        children: [
            {
                name: 'x',
                children: [
                    { name: 'y' }
                ]
            }
        ]
    },
    {
        name: 'about',
        children: [
            { name: 'License' },
            { name: 'Credits' }
        ]
    }
];

class Help extends Component {

    get css () {
        const { darklight, highlight } = palette;

        return `
            :host {
                display: flex;
                flex-direction: column;
                flex-grow: 1;
                margin-top: 4px;
            }

            #content {
                flex-grow: 1;
                padding: 8px 12px;
            }

            #content h1 {
                margin-top: 4px;
                margin-bottom: 4px;
                padding: 0;
                font-size: 32px;
                font-weight: 300;
                text-shadow: 0 0 8px rgba(255, 255, 255, 0.33);
            }

            #content h1:first-of-type {
                margin-top: 0;
            }

            #content h2 {
                margin: 8px 0;
            }

            #content h3 {
                margin: 4px 0;
            }

            #content code {
                display: block;
                padding: 8px 12px;
                background: hsla(${ darklight[ 0 ] }, ${ darklight[ 1 ] }%, ${ darklight[ 2 ] }%, 0.5);
            }

            #content hr {
                margin: 16px 0;
                border: 1px solid rgba(255, 255, 255, 0.25);
                box-shadow: 0 0 8px rgba(255, 255, 255, 0.16);
            }

            ${ Toolbar.elementName } {
                margin: -4px -4px 0;
                border-top: 1px solid hsla(${ highlight[ 0 ] }, ${ highlight[ 1 ] }%, ${ highlight[ 2 ] }%, 1);
            }
        `;
    }

    renderTree (tree = [ ]) {
        return tree.map(node => element(Menu.Item, { text: node.name }, this.renderTree(node.children)));
    }

    render () {
        const help = this.renderTree(tree);

        return [
            element(Pane.Split, { direction: 'row', grow: 1 }, [
                element(Pane.Split, { basis: '240px', shrink: 1, grow: 0 }, [
                    element(Pane, { grow: 1 }, [
                        element(Toolbar, { small: true }, [
                            element(Toolbar.Label, { text: 'Information' })
                        ]),
                        element(Menu.Tree, null, help)
                    ])
                ]),
                element(Flex, { grow: 1 }, [
                    element('article', { id: 'content', innerHTML: markdown().render(GameDocumentation.generate()) })
                ])
            ])
        ];
    }
}

Help.elementName = 'quill-help';

Help.initialState = {

};

module.exports = Help;
