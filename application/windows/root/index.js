const Component = require('quark/core/Component');
const element = require('quark/core/element');

const Window = require('../../core/Window');

module.exports = new Window('root', app => {
    document.body.appendChild(new class extends Component {
        render () {
            return element('main', { style: { color: 'red' } }, `hello, ${ app.kind }`);
        }
    })
});
