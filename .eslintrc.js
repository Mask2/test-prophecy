module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  parser: 'babel-eslint', // uses babel-eslint transforms
  settings: {
    react: {
      version: 'detect', // detect react version
    },
  },
  env: {
    node: true, // defines things like process.env when generating through node
  },
  extends: ['alloy', 'alloy/react'],
  rules: {
    'react/jsx-pascal-case': [0, { allowAllCaps: true }],
  },
};
