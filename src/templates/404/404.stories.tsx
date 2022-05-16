import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import FourOhFour from '.';

export default {
  title: 'Pages/404',
  component: FourOhFour,
} as Meta;

export const Default: Story = () => <FourOhFour />;
