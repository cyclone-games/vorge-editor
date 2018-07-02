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
                width: 48px;
                background: #4b485a;
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
                height: 48px;
            }

            #tools .tool.active {
                box-shadow: inset 3px 0 0 #0cacf9;
            }

            #logo {
                background: white;
            }
        `;
    }

    render () {
        return (
            element('header', { id: 'toolbar' }, [
                element('ul', { id: 'tools' }, [
                    element('li', { id: 'logo', className: 'tool' }),
                    element('li', { id: 'mapper', className: 'tool active' }, [
                        element(Icon, { glyph: 'maps/terrain', size: 20, color: 'white' })
                    ]),
                    element('li', { id: 'mapper', className: 'tool' }, [
                        element(Icon, { glyph: 'action/dashboard', size: 20, color: '#9498a9' })
                    ]),
                    element('li', { id: 'mapper', className: 'tool' }, [
                        element(Icon, { glyph: 'action/settings', size: 20, color: '#9498a9' })
                    ])
                ])
            ])
        );
    }
}
