module.exports = {
  presets: ['@vue/cli-plugin-babel/preset'],
  plugins: [
    [
      'component',
      {
        libraryName: 'element-ui',
        styleLibraryName: 'theme-chalk',
      },
    ],
    [
      'component',
      {
        libraryName: '@esign-component/sign-h5-ui',
        style: true,
      },
      '@esign-component/sign-h5-ui',
    ],
  ],
}
