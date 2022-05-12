module.exports = {
  stories: [
    '../src/components/**/stories.tsx',
    '../src/components/**/*.stories.tsx',
    '../src/templates/**/*.stories.tsx',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-a11y',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: '@storybook/react',
  staticDirs: ['../public'],
};
