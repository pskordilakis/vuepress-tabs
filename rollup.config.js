import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'

export default [
  {
    input: 'src/index.js',
    output: {
      file: 'dist/vuepress-tabs.js',
      format: 'umd',
      name: 'vuepress-tabs',
      external: [ 'markdown-it-container' ]
    },
    plugins: [
      resolve({
        main: true,
      }),
      babel({
        exclude: ['node_modules/**'],
        plugins: ['external-helpers'],
      }),
    ],
  }
]
