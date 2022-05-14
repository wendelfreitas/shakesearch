import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Logo } from '.';

export default {
  title: 'Components/Logo',
  component: Logo,
} as Meta;

export const Default: Story = () => (
  <div style={{ padding: '3rem', maxWidth: '70%' }}>
    <Logo direction="vertical" />
  </div>
);

export const Horizontal: Story = () => (
  <div style={{ padding: '3rem', maxWidth: '70%' }}>
    <Logo direction="horizontal" />
  </div>
);
