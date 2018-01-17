import pkg from './package.json'

export default {
  input: 'src/main.js',
  output: {
    name: 'react-guagejs',
    file: pkg.browser,
    format: 'umd'
  }
};