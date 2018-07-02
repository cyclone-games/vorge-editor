const Component = require('quark/core/Component');
const element = require('quark/core/element');

module.exports = class Container extends Component {

    get css () {
        return `
            :host {
                display: flex;
                width: 100%;
                height: 100%;
                margin: 0;
                background: #2b2a35;
            }
        `;
    }

    render () {
        return [
            element('slot')
        ];
    }
};
