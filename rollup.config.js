import {basename} from 'path'
import gzipSize from 'gzip-size'
import chalk from 'chalk'
import prettyBytes from 'pretty-bytes'
import babel from 'rollup-plugin-babel'
import uglify from 'rollup-plugin-uglify'

function filesize() {
  return {
    ongenerate({file}, {code}) {
      const size = gzipSize.sync(code)
      const prettySize = prettyBytes(size)
      const color = size < 5000 ? 'green' : size > 40000 ? 'red' : 'yellow'
      const report =
        chalk.white(basename(file)) + ': ' + chalk[color](prettySize)

      console.log(report)
    }
  }
}

export default [
  {
    input: './src/index.js',
    plugins: [
      babel({
        babelrc: false,
        plugins: ['external-helpers'],
        presets: [['env', {modules: false}], 'react', 'stage-0']
      }),
      uglify(),
      filesize()
    ],
    external: ['prop-types', 'react'],
    output: {
      globals: {react: 'React', 'prop-types': 'PropTypes'},
      file: 'dist/react-code-splitting.min.js',
      format: 'umd',
      name: 'BulmaUI',
      sourcemap: true
    }
  }
]
