module.exports = {
  presets: [
    'next/babel',
    '@babel/preset-react',
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'usage',
        corejs: 3
      }
    ],
    [
      '@emotion/babel-preset-css-prop',
      {
        sourceMap: true
      }
    ]
  ],
  plugins: [['emotion'], '@babel/plugin-proposal-class-properties'],
  ignore: ['**/*.spec.js', '**/*.spec.jsx']
};
