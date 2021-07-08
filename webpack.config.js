module.exports = {
  entry: ['babel-polyfill', './_app.jsx'],

  output: {
    filename: 'bundle.js',
  },

  module: {
    loaders: [{ test: /\.jsx?$/, loader: 'babel' }],
  },
}
