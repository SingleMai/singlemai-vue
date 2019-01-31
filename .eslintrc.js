module.exports = {
  root: true,
  env: {
    node: true
  },
  // extends: ['plugin:vue/essential', '@vue/prettier'],
  extends: ['plugin:vue/essential'],
  rules: {
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
};
