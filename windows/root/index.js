const Window = require('../../core/Window');

const Root = require('./components/Root');

module.exports = new Window('root', { }, app => {
    document.body.appendChild(new Root({ app }));
});
