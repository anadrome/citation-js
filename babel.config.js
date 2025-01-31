const targets = {
  node: '6'
}

module.exports = {
  presets: [
    ['@babel/env', { targets }]
  ],
  env: {
    'mjs': {
      presets: [
        ['@babel/env', { modules: false, targets }]
      ]
    },
    test: {
      plugins: ['istanbul']
    }
  },
  comments: false
}
