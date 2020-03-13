import resolve from 'rollup-plugin-node-resolve';
import typescript from 'rollup-plugin-typescript'
import sass from 'rollup-plugin-sass';
import postcss from 'rollup-plugin-postcss';
import postcssModules from 'postcss-modules';
import babel from 'rollup-plugin-babel';

export default {
  input: 'src/index.ts',
  output: {
    file: 'dist/bundle.js',
    format: 'cjs'
  },
  external: [
    'react',
  ],
  plugins: [
    resolve(),
    typescript(),
    sass({
      output: 'dist/bundle.css',
    }),
    babel({
      exclude: 'node_modules/**'
    })
  ]
};