const Benchmark = require('benchmark')
const { css } = require('../dist/index.cjs')

const suite = new Benchmark.Suite()

suite
    .add('strings', function () {
        css('one', 'two', 'three')
    })
    .on('cycle', function (event) {
        console.log(String(event.target))
    })
    .run()
