const { Suite } = require('benchmark')
const { css: prev } = require('@stefanoruth/classnames')
const { css } = require('../')
const classnames = require('classnames')
const classcat = require('classcat')
const clsx = require('clsx')

function bench(name, ...args) {
    console.log(`\n# ${name}`)
    new Suite()
        .add('classcat  ', () => classcat.apply(classcat, [args]))
        .add('classnames', () => classnames.apply(classnames, args))
        .add('clsx      ', () => clsx.apply(clsx, args))
        .add('css (prev)', () => prev.apply(prev, args))
        .add('css       ', () => css.apply(css, args))
        .on('cycle', e => console.log('  ' + e.target))
        .run()
}

bench('Strings', 'one', 'two', 'three')
