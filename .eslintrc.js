module.exports = {
  extends: ['plugin:vue/essential', '@vue/standard'],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    semi: [2, 'always'],
    'comma-dangle': [2, 'always-multiline'],
  },
};
