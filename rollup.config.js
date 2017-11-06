const replace = require('rollup-plugin-replace');
const babel = require('rollup-plugin-babel');
const uglify = require('rollup-plugin-uglify');

let pkg = require('./package.json');
let external = [];
let TARGET = process.env.TARGET;

// external dependencies
external = external.concat(Object.keys(pkg.dependencies || {}));
// external peer dependencies
external = external.concat(Object.keys(pkg.peerDependencies || {}));
// external = external.concat([]);

let plugins = [
  babel({
    exclude: ['node_modules/**/*'],
    plugins: ['external-helpers'],
  })
];

let config = {
  entry: 'index.js',
  plugins: plugins,
  external: external,
  dest: 'dist/gent-validator.js',
  format: 'umd',
  moduleName: 'gent-validator',
  sourceMap: true,
  globals: {
    // 'rxjs/Rx': 'Rx'
  }
}

if (TARGET == 'cjs') {
  config.dest = 'dist/gent-validator.common.js';
  config.format = 'cjs';
} else if (TARGET == 'umd') {
  config.dest = 'dist/gent-validator.js';
  config.format = 'umd';
} else if (TARGET == 'umd-prod') {
  config.dest = 'dist/gent-validator.min.js';
  config.format = 'umd';
  config.plugins.push(replace({
    'process.env.NODE_ENV': JSON.stringify('production')
  }));
  config.plugins.push( uglify() );
}

export default config;
