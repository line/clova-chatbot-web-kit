module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: ['chrome 40', 'iOS 10'],
      },
    ],
    '@babel/preset-react',
  ],
}
