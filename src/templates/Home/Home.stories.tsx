import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Home from '.';

export default {
  title: 'Pages/Home',
  component: Home,
} as Meta;

export const Default: Story = () => <Home />;
