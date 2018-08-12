const fs = require('fs');

const codemirror = require('codemirror');

const Component = require('quark/core/Component');
const element = require('quark/core/element');

const Canvas = require('elementary/components/Canvas');
const Explorer = require('elementary/components/Explorer');
const Flex = require('elementary/components/Flex');
const Pane = require('elementary/components/Pane');
const Tab = require('elementary/components/Tab');
const Toolbar = require('elementary/components/Toolbar');
const palette = require('elementary/core/palette');

class ParticleDesigner extends Component {

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

            #preview {

            }
        `;
    }

    render () {
        return [
            element(Pane.Split, { grow: 1, direction: 'row' }, [
                element(Flex, { grow: 1, align: 'center', justify: 'center' }, [
                    element(Canvas, { id: 'preview', width: 640, height: 480 })
                ]),
                element(Flex, { direction: 'column', basis: '480px' }, [
                    element(Toolbar, { }, [

                    ]),
                    element(Pane, { grow: 1 }, [

                    ])
                ])
            ])
        ];
    }
}

ParticleDesigner.elementName = 'quill-particle-designer';

ParticleDesigner.defaultProperties = {

};

module.exports = ParticleDesigner;
