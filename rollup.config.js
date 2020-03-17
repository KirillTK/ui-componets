import scss from 'rollup-plugin-scss'
import resolve from 'rollup-plugin-node-resolve';
import typescript from 'rollup-plugin-typescript'
import sass from 'rollup-plugin-sass';
import babel from 'rollup-plugin-babel';
import { uglify } from "rollup-plugin-uglify";
import bundleScss from 'rollup-plugin-bundle-scss';
import minify from 'rollup-plugin-babel-minify';
import css from 'rollup-plugin-css-porter';
import autoprefixer from 'autoprefixer';
import postcss from 'postcss';
import copy from 'rollup-plugin-copy';



const isProduction = process.env.NODE_ENV === 'production';

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
    copy({
      targets: [{ src: 'src/assets/*', dest: 'dist/assets' }],
    }),
    scss({
      output: 'dist/bundle.css',
      outputStyle: "compressed",
    }),
    resolve(),
    typescript(),
    babel({
      exclude: 'node_modules/**'
    }),
    uglify(),
  ]
};