import commonjs from '@rollup/plugin-commonjs'
import typescript from 'rollup-plugin-typescript2'
import bundleSize from 'rollup-plugin-bundle-size'
import { terser } from 'rollup-plugin-terser'
import pkg from './package.json'

export default {
    input: 'src/index.ts',
    output: [
        {
            file: pkg.main,
            format: 'cjs',
        },
        {
            file: pkg.module,
            format: 'es',
        },
        {
            file: pkg.browser,
            name: 'css',
            format: 'umd',
        },
    ],
    plugins: [commonjs(), typescript(), terser(), bundleSize()],
}
