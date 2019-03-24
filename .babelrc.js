const isTest = String(process.env.NODE_ENV) === 'test';

module.exports = {
  presets: [
    [
      '@babel/env',
      {
        modules: isTest ? 'commonjs' : false,
        useBuiltIns: 'usage',
        targets: '> 0.25%, not dead',
      },
    ],
    '@babel/preset-react',
  ],
  plugins: [
    '@babel/plugin-syntax-dynamic-import',
    'react-hot-loader/babel',
  ],
};
