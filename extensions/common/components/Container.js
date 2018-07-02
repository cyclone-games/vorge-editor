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
                background: #302f3d;
                border: 1px solid black;
            }

            #bar {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 100%;
                height: 32px;
                font-family: Arial;
                font-size: 10px;
                color: white;
                background: black;
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
            element('div', { id: 'bar' }, 'Quill | Powered By Vorge'),
            element('div', { id: 'content' }, [
                element('slot')
            ])
        ];
    }
};
