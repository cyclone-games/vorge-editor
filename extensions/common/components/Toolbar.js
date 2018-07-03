const Component = require('quark/core/Component');
const element = require('quark/core/element');

const Icon = require('./Icon');

module.exports = class XToolbar extends Component {

    get css () {
        return `
            :host {
                display: flex;
            }

            #toolbar {
                display: flex;
                width: 52px;
                background: #414858;
                border-radius: 0 0 0 4px;
            }

            #tools {
                display: flex;
                flex-direction: column;
                width: 100%;
                margin: 0;
                padding: 0;
                list-style: none;
            }

            #tools .tool {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 100%;
                height: 52px;
            }

            #tools .tool.active {
                background: #50596f;
                box-shadow: inset 3px 0 0 #e41536;
            }

            #logo {
                z-index: 1;
                background: #e41536;
            }
        `;
    }

    render () {
        return (
            element('header', { id: 'toolbar' }, [
                element('ul', { id: 'tools' }, [
                    element('li', { id: 'logo', className: 'tool' }, [
                        element(Icon, { glyph: 'hardware/memory', size: 32, color: 'white' })
                    ]),
                    element('li', { id: 'mapper', className: 'tool active' }, [
                        element(Icon, { glyph: 'maps/terrain', size: 20, color: 'white' })
                    ]),
                    element('li', { id: 'mapper', className: 'tool' }, [
                        element(Icon, { glyph: 'action/store', size: 20, color: '#9498a9' })
                    ]),
                    element('li', { id: 'mapper', className: 'tool' }, [
                        element(Icon, { glyph: 'action/settings', size: 20, color: '#9498a9' })
                    ])
                ])
            ])
        );
    }
}
