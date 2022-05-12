import { addDecorator } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';

import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../src/styles/global';
import theme from '../src/styles/theme';

addDecorator(withA11y);

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Story />
    </ThemeProvider>
  ),
];
