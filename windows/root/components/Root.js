const Component = require('quark/core/Component');
const element = require('quark/core/element');

module.exports = class QwillRoot extends Component {

    get css () {
        return `
            :host {
                color: white;
            }
        `;
    }

    render () {
        return [
            element('header', null, [
                element('h1', null, 'Hello')
            ]),
            element('main', null, [
                element('article', null, 'Lorem ipsum dolor sit amet')
            ]),
            element('footer', null, [
                element('aside', null, `${ this.app.kind }`)
            ])
        ];
    }
};

module.exports.defaultProperties = {
    app: null
};
