const fs = require('fs');

const Component = require('quark/core/Component');
const element = require('quark/core/element');

module.exports = class XIcon extends Component {

    get css () {
        return `
            i {
                display: inline-block;
                margin: 0;
                padding: 0;
                font-style: normal;
            }

            svg {
                width: ${ this.size }px;
                height: ${ this.size }px;
                ${ Object.entries(this.svg)
                    .map(([ key, value ]) => `${ key.replace(/[A-Z]/g, c => `-${ c }`) }: ${ value }`)
                    .join(';\n')
                }
            }
        `;
    }

    render () {
        const [ category, which ] = this.glyph.split('/');
        const glyph = fs.readFileSync(`${ process.cwd() }/node_modules/material-design-icons/${ category }/svg/production/ic_${ which }_48px.svg`);

        return (
            element('i', { className: 'material-icons', innerHTML: glyph })
        );
    }
};

module.exports.defaultProperties = {
    glyph: 'foo/bar',
    size: 24,
    svg: {
        fill: 'black',
        stroke: 'none'
    }
};
