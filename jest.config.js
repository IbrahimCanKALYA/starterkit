module.exports = {
  preset: 'react-native',
  verbose: true,
  transform: { '^.+\\.js$': '<rootDir>/node_modules/react-native/jest/preprocessor.js' },
  moduleFileExtensions: ['js', 'jsx', 'json', 'vue'],
};
