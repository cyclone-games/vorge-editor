// const aceEditor = require('ace-builds/src-noconflict/ace');
// const aceMode = require('ace-builds/src-noconflict/mode-javascript');

const fs = require('fs');

const codemirror = require('codemirror');

const Component = require('quark/core/Component');
const element = require('quark/core/element');

const Flex = require('elementary/components/Flex');
const Pane = require('elementary/components/Pane');
const Tab = require('elementary/components/Tab');
const Toolbar = require('elementary/components/Toolbar');

require('codemirror/mode/javascript/javascript');

const codemirrorPath = `${ process.cwd() }/node_modules/codemirror`;
const codemirrorStyle = fs.readFileSync(`${ codemirrorPath }/lib/codemirror.css`);

const codemirrorThemesPath = `${ process.cwd() }/node_modules/code-mirror-themes`;
const codemirrorTheme = fs.readFileSync(`${ codemirrorThemesPath }/themes/ir_black.css`);

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
                top: 4px;
                right: 0;
                bottom: 0;
                left: 0;
                /*text-shadow: 0 1px 2px rgba(0, 0, 0, 0.4), 0 0 8px rgba(255, 255, 255, 0.05);*/
            }

            ${ codemirrorStyle }

            ${ codemirrorTheme }

            #editor .CodeMirror {
                position: absolute;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
                height: 100%;
                font-size: 13px;
                background: none !important;
                background-color: transparent !important;
            }

            #editor .CodeMirror-gutters {
                padding-right: 8px !important;
                background-color: transparent !important;
                background: rgba(255, 255, 255, 0.05) !important;
                box-shadow: none !important;
                -webkit-box-shadow: none !important;
            }

            #editor .CodeMirror-linenumber {
                color: rgba(255, 255, 255, 0.75) !important;
            }
        `;
    }

    handleComponentReady () {
        const container = this.shadowRoot.querySelector('#container');
        const editor = container.querySelector('#editor');

        window.setTimeout(() => {
            codemirror(editor, {
                mode: 'javascript',
                theme: 'ir_black',
                lineNumbers: true
            });
        }, 500)
    }

    render () {
        return [
            element(Toolbar, null, [

            ]),
            element(Pane.Split, { direction: 'row', grow: 1 }, [
                element(Pane, { basis: '240px', shrink: 1, grow: 0 }),
                element(Flex, { grow: 1, direction: 'column' }, [
                    element(Tab.Group, { fluid: true, style: { flexGrow: 0 } }, [
                        element(Tab, { text: 'foo.js' })
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
