const Component = require('quark/core/Component');
const element = require('quark/core/element');

module.exports = class Container extends Component {

    get css () {
        return `
            :host {
                display: flex;
                flex-direction: column;
                width: 100%;
                height: calc(100% - 2px);
                font-family: Verdana, sans-serif;
                background: #252733;
                border: 1px solid black;
                border-radius: 5px;
            }

            #bar {
                display: flex;
                align-items: center;
                height: 36px;
                padding: 0 16px;
                font-size: 11px;
                color: white;
                background: black;
                border-radius: 4px 4px 0 0;

                -webkit-app-region: drag;
            }

            #title {
                flex-grow: 1;
            }

            #controls {
                display: flex;
                margin: 0;
                padding: 0;
                list-style: none;
            }

            #controls button {
                width: 12px;
                height: 12px;
                margin-left: 10px;
                padding: 0;
                border: none;
                outline: none;
                border-radius: 100%;
            }

            #close {
                background: #e41536;
            }

            #full {
                background: #4eca17;
            }

            #minimize {
                background: #eeba1b;
            }

            #content {
                display: flex;
                flex-grow: 1;
                width: 100%;
            }
        `;
    }

    render () {
        return [
            element('div', { id: 'bar' }, [
                element('span', { id: 'title' }, document.title),
                element('ul', { id: 'controls' }, [
                    element('li', null, [
                        element('button', { id: 'minimize' })
                    ]),
                    element('li', null, [
                        element('button', { id: 'full' })
                    ]),
                    element('li', null, [
                        element('button', { id: 'close' })
                    ])
                ])
            ]),
            element('div', { id: 'content' }, [
                element('slot')
            ])
        ];
    }
};
