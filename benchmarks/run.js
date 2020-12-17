const Benchmark = require('benchmark')
const { css } = require('../dist/index.cjs')

const suite = new Benchmark.Suite()

suite
    .add('Generating classNames', function () {
        css('a', 'b c', null, undefined, 'd', 1)
    })
    .on('cycle', function (event) {
        console.log(String(event.target))
    })
    .run()
