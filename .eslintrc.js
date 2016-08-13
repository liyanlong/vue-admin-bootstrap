module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,

    // 缩进风格
    "indent": ["error", 4],

    //
    'semi': 0,

    // 强制驼峰式命名
    'camelcase': 2,

    // 关键字后面是否允许 空格
    'space-after-keywords': 0,

    // 允许 new
    'no-new-object': 0,
    'no-new': 0,
    
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
}
