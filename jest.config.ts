import type { Config } from 'jest';

const config: Config = {
  verbose: true,
  preset: 'react-native',
  setupFiles: ['<rootDir>/jest/setup.js'],
};

export default config;
