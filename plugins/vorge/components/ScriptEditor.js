const Component = require('quark/core/Component');
const element = require('quark/core/element');

const Flex = require('elementary/components/Flex');
const Pane = require('elementary/components/Pane');
const Tab = require('elementary/components/Tab');
const Toolbar = require('elementary/components/Toolbar');

const ace = require('ace-builds/src/ace');

class ScriptEditor extends Component {

    get css () {
        return `
            :host {
                display: flex;
                flex-grow: 1;
                flex-direction: column
            }

            #container {
                position: relative;
                flex-grow: 1;
            }

            #editor {
                position: absolute;
                top: 0;
                right: 0;
                bottom: 0;
                left: 0;
            }
        `;
    }

    handleComponentReady () {
        window.requestAnimationFrame(() => {
            this.editor = ace.edit(this.shadowRoot.querySelector('#editor'));
            this.editor.setTheme("ace/theme/twilight");
            this.editor.session.setMode("ace/mode/javascript");
            console.log(this.editor)
        });
    }

    render () {
        return [
            element(Toolbar, null, [

            ]),
            element(Pane.Split, { direction: 'row', grow: 1 }, [
                element(Pane, { basis: '240px', shrink: 1, grow: 0 }),
                element(Flex, { grow: 1, direction: 'column' }, [
                    element(Tab.Group, { fluid: true, style: { flexGrow: 0 } }, [
                        element(Tab, { text: 'foo.js' }),
                        element(Tab, { text: 'bar.js' }),
                        element(Tab, { text: 'baz.js' }),
                        element(Tab, { text: 'oof.js' }),
                        element(Tab, { text: 'rab.js' }),
                        element(Tab, { text: 'zab.js' })
                    ]),
                    element('section', { id: 'container' }, [
                        element('article', { id: 'editor' })
                    ])
                ])
            ])
        ];
    }
}

ScriptEditor.elementName = 'vorge-script-editor';

module.exports = ScriptEditor;
