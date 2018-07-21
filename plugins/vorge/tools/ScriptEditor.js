const fs = require('fs');

const codemirror = require('codemirror');

const Component = require('quark/core/Component');
const element = require('quark/core/element');

const Flex = require('elementary/components/Flex');
const Menu = require('elementary/components/Menu');
const Pane = require('elementary/components/Pane');
const Tab = require('elementary/components/Tab');
const Toolbar = require('elementary/components/Toolbar');
const palette = require('elementary/core/palette');

require('codemirror/addon/display/autorefresh');
require('codemirror/addon/edit/closebrackets');
require('codemirror/addon/edit/matchbrackets');
require('codemirror/addon/scroll/simplescrollbars');
require('codemirror/mode/javascript/javascript');

const codemirrorPath = `${ process.cwd() }/node_modules/codemirror`;
const codemirrorStyle = fs.readFileSync(`${ codemirrorPath }/lib/codemirror.css`);

const codemirrorThemesPath = `${ process.cwd() }/node_modules/code-mirror-themes`;
const codemirrorTheme = fs.readFileSync(`${ codemirrorThemesPath }/themes/ir_black.css`);

class ScriptEditor extends Component {

    get css () {
        const { background, foreground, highlight, darklight } = palette;

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
                text-shadow: 0 1px 3px hsl(${ background[ 0 ] }, ${ background[ 1 ] }%, ${ background[ 1 ] }%);
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
                color: rgba(235, 245, 255, 0.75) !important;
                background: none !important;
                background-color: transparent !important;
            }

            #editor .CodeMirror-lines {
                padding: 4px 0 !important;
            }

            #editor .CodeMirror-selected {
                background: hsla(${ darklight[ 0 ] }, ${ darklight[ 1 ] }%, ${ darklight[ 2 ] }%, 0.5) !important;
            }

            #editor .CodeMirror-gutters {
                display: flex;
                padding-right: 8px !important;
                background-color: transparent !important;
                box-shadow: none !important;
                -webkit-box-shadow: none !important;
            }

            #editor .CodeMirror-foldmarker {
                color: blue;
                text-shadow: #b9f 1px 1px 2px, #b9f -1px -1px 2px, #b9f 1px -1px 2px, #b9f -1px 1px 2px;
                font-family: arial;
                line-height: .3;
                cursor: pointer;
            }

            #editor .CodeMirror-foldgutter {
                width: .7em;
            }

            #editor .CodeMirror-foldgutter-open,
            #editor .CodeMirror-foldgutter-folded {
                cursor: pointer;
            }

            #editor .CodeMirror-foldgutter-open:after {
                content: "v";
            }

            #editor .CodeMirror-foldgutter-folded:after {
                content: "^";
            }

            #editor .CodeMirror-linenumbers {
                height: auto !important;
                padding-right: 8px;
                background: hsla(${ highlight[ 0 ] }, ${ highlight[ 1 ] }%, ${ highlight[ 2 ] }%, 0.18) !important;
                box-shadow: 0 0 4px hsla(${ darklight[ 0 ] }, ${ darklight[ 1 ] }%, ${ darklight[ 2 ] }%, 0.33) !important;
            }

            #editor .CodeMirror-linenumber {
                color: rgba(225, 235, 255, 0.6) !important;
                text-shadow: none !important;
            }

            #editor .cm-variable,
            #editor .cm-variable-2,
            #editor .cm-def {
                color: white;
            }

            #editor .CodeMirror-cursor {
                border-left: 2px solid white;
            }

            #editor .CodeMirror-scrollbar-filler {
                background: none;
            }

            #editor .CodeMirror-simplescroll-horizontal div, .CodeMirror-simplescroll-vertical div {
                position: absolute;
                background: hsla(${ foreground[ 0 ] }, ${ foreground[ 1 ] }%, ${ foreground[ 2 ] }%, 0.60);
                box-shadow: inset 0 1px hsla(${ highlight[ 0 ] }, ${ highlight[ 1 ] }%, ${ highlight[ 2 ] }%, 0.66),
                            0 0 4px hsla(${ darklight[ 0 ] }, ${ darklight[ 1 ] }%, ${ darklight[ 2 ] }%, 0.33);
                -moz-box-sizing: border-box;
                box-sizing: border-box;
                border-radius: 8px;
            }

            .CodeMirror-simplescroll-horizontal, .CodeMirror-simplescroll-vertical {
                position: absolute;
                z-index: 6;
                background: hsla(${ highlight[ 0 ] }, ${ highlight[ 1 ] }%, ${ highlight[ 2 ] }%, 0.18) !important;
                box-shadow: 0 0 4px hsla(${ darklight[ 0 ] }, ${ darklight[ 1 ] }%, ${ darklight[ 2 ] }%, 0.33) !important;
                border-radius: 8px;
            }

            .CodeMirror-simplescroll-horizontal {
                bottom: 0;
                left: 0;
                height: 8px;
            }

            .CodeMirror-simplescroll-horizontal div {
                bottom: 0;
                height: 100%;
            }

            .CodeMirror-simplescroll-vertical {
                right: 0;
                top: 0;
                width: 8px;
            }

            .CodeMirror-simplescroll-vertical div {
                right: 0;
                width: 100%;
            }

            .CodeMirror-overlayscroll .CodeMirror-scrollbar-filler, .CodeMirror-overlayscroll .CodeMirror-gutter-filler {
                display: none;
            }

            .CodeMirror-overlayscroll-horizontal div, .CodeMirror-overlayscroll-vertical div {
                position: absolute;
                background: red;
                border-radius: 3px;
            }

            .CodeMirror-overlayscroll-horizontal, .CodeMirror-overlayscroll-vertical {
                position: absolute;
                z-index: 6;
            }

            .CodeMirror-overlayscroll-horizontal {
                bottom: 0;
                left: 0;
                height: 6px;
            }
            .CodeMirror-overlayscroll-horizontal div {
                bottom: 0;
                height: 100%;
            }

            .CodeMirror-overlayscroll-vertical {
                right: 0;
                top: 0;
                width: 6px;
            }

            .CodeMirror-overlayscroll-vertical div {
                right: 0;
                width: 100%;
            }

            ${ Toolbar.elementName }:not(#main-toolbar) {
                margin: -4px -4px 0;
                border-top: 1px solid hsla(${ highlight[ 0 ] }, ${ highlight[ 1 ] }%, ${ highlight[ 2 ] }%, 1);
            }
        `;
    }

    handleComponentReady () {
        const container = this.shadowRoot.querySelector('#container');
        const editor = container.querySelector('#editor');

        codemirror(editor, {
            autoRefresh : true,
            mode: 'javascript',
            theme: 'ir_black',
            lineNumbers: true,
            autoCloseBrackets: true,
            // matchBrackets : true,
            indentUnit: 4,
            scrollbarStyle: 'simple',
            ...this.codemirror
        });
    }

    render () {
        return [
            element(Toolbar, { id: 'main-toolbar' }, [
                element(Toolbar.Button, { icon: 'content/save' }),
                element(Toolbar.Button, { icon: 'content/undo' }),
                element(Toolbar.Button, { icon: 'content/redo' })
            ]),
            element(Pane.Split, { direction: 'row', grow: 1 }, [
                element(Pane, { basis: '240px', shrink: 1, grow: 0 }, [
                    element(Toolbar, { small: true }, [
                        element(Toolbar.Label, { text: 'Scripts' }),
                        element(Flex, { grow: 1, justify: 'flex-end' }, [
                            element(Toolbar.Button, { icon: 'content/remove' }),
                            element(Toolbar.Button, { icon: 'content/add' })
                        ])
                    ]),
                    element(Menu.Tree, { }, [
                        element(Menu.Item, { text: 'scripts' }, [
                            element(Menu.Item, { text: 'core' }, [
                                element(Menu.Item, { text: 'asdf' }, [
                                    element(Menu.Item, { text: 'test.js' })
                                ]),
                                element(Menu.Item, { text: 'script.js' })
                            ]),
                            element(Menu.Item, { text: 'foo.js' }),
                            element(Menu.Item, { text: 'bar.js' })
                        ])
                    ])
                ]),
                element(Flex, { grow: 1, direction: 'column' }, [
                    element(Tab.Group, { fluid: true, style: { flexGrow: 0 } }, [
                        element(Tab, { text: 'foo.js', temp: true }),
                        element(Tab, { text: 'bar.js', temp: true })
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

ScriptEditor.defaultProperties = {
    codemirror: { }
};

module.exports = ScriptEditor;
