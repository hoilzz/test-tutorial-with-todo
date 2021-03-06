const isTest = String(process.env.NODE_ENV) === 'test';
const isProduction = String(process.env.NODE_ENV) === 'production';

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
    '@babel/plugin-proposal-class-properties',
    'react-hot-loader/babel',
    isProduction
      ? ['react-remove-properties', { properties: ['data-testid'] }]
      : null,
  ].filter(Boolean),
};
