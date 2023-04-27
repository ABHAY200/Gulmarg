module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          // This needs to be mirrored in tsconfig.json
          '@assets': './src/assets',
          '@components': './src/components',
          '@constants': './src/constants',
          '@screens': './src/screens',
          '@theme': './src/theme',
          '@utils': './src/utils',
          '@reducers': './src/reducers',
          '@api': './src/api',
          '@localization': './src/localization',
          '@hooks': './src/hooks',
        },
      },
    ],
  ],
};
