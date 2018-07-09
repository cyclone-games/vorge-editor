const element = require('quark/core/element');

const Pane = require('elementary/components/Pane');
const Tab = require('elementary/components/Tab');
const Toolbar = require('elementary/components/Toolbar');

const Toolbox = require(`${ process.cwd() }/modules/Toolbox`);

class ScriptEditor extends Component {

    get title () {
        return 'Script Editor';
    }

    get icon () {
        return 'action/code';
    }

    render () {
        return [
            element(Toolbar, null, [

            ]),
            element(Pane.Split, { direction: 'row', grow: 1 }, [
                element(Pane, { basis: '240px', shrink: 1, grow: 0 }),
                element(Tab.Group, { fluid: true }, [
                    element(Tab, { text: 'foo.js' }, [

                    ]),
                    element(Tab, { text: 'bar.js' }, [

                    ]),
                    element(Tab, { text: 'baz.js' }, [

                    ])
                ])
            ])
        ];
    }
}

module.exports = new Toolbox.Tool(ScriptEditor);
