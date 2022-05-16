module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.ts(x)?',
    '!src/**/stories.tsx',
    '!src/pages/_app.tsx',
    '!src/pages/api/**',
    '!src/pages/_document.tsx',
    '!src/styles/**/*.ts',
    '!src/types/**/*.d.ts',
    '!src/configs/**/*.ts',
    '!src/templates/**/*.stories.tsx',
    '!src/components/**/*.stories.tsx',
    '!src/components/Slider/**',
    '!cypress/**',
  ],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  modulePaths: ['<rootDir>/src/', '<rootDir>/.jest'],
  globals: {
    google: {},
  },
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '^styled-components':
      '<rootDir>/node_modules/styled-components/dist/styled-components.browser.cjs.js',
  },
};
