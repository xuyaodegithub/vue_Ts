/* eslint-disable prettier/prettier */
const path = require('path')
module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',

  // preset: '@vue/cli-plugin-unit-jest',

  rootDir: path.resolve(__dirname, './'),

  moduleNameMapper: {
    // '^@esign-ui/base/(.*)$': '<rootDir>/packages/base/$1',
    // '@esign-ui/biz/(.*)$': '<rootDir>/packages/biz/$1',
    // '@esign-ui/shared/(.*)$': '<rootDir>/packages/shared/$1',
    // '@esign-ui/helpers/(.*)$': '<rootDir>/packages/helpers/$1',
    // '@/(.*)': '<rootDir>/src/$1'
    '^@/(.*)$': '<rootDir>/src/$1',
    '\\.(css|less)$': 'identity-obj-proxy'  
  },

  // transform: {
  //   '^.+\\.js$': '<rootDir>/node_modules/babel-jest',

  //   '^.+\\.[jt]sx?$': '<rootDir>/node_modules/babel-jest',
  //   '.*\\.(vue)$': '<rootDir>/node_modules/vue-jest',

  //   '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/test/unit/fileTransformer.js',
  // },

  setupFiles: [ '<rootDir>/test/unit/setup'],

  // testRegex: '(/__test__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  testMatch: ['**/test/unit/**/*.(spec|test).[jt]s?(x)', '**/__test__/**/*.(spec|test).[jt]s?(x)'],
  transformIgnorePatterns: ['<rootDir>/node_modules/(?!element-ui).+\\.js$'],
  coverageDirectory: '<rootDir>/test/unit/coverage',
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/src/**/*/*.{tsx,ts}',

    // '<rootDir>/refactor-src/utils/*.*',
    // '<rootDir>/src/Util/*.*',

    // '!<rootDir>/packages/**/index.js',
    // '!**/examples/**',
    '!**/node_modules/**',
  ],
}
