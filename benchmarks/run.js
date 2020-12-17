const Benchmark = require('benchmark')
const { css } = require('../dist/index.cjs')

const suite = new Benchmark.Suite()

// add tests
suite
    .add('Generating classNames', function () {
        css('a', 'b c', null, undefined, 'd', 1)
    })
    .on('cycle', function (event) {
        console.log(String(event.target))
    })
    .run()
// .add('String#indexOf', function () {
//     'Hello World!'.indexOf('o') > -1
// })
// .add('String#match', function () {
//     !!'Hello World!'.match(/o/)
// })
// // add listeners
//
// .on('complete', function () {
//     console.log('Fastest is ' + this.filter('fastest').map('name'))
// })
// // run async
// .run({ async: true })
