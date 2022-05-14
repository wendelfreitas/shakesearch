import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Footer } from '.';

export default {
  title: 'Components/Footer',
  component: Footer,
} as Meta;

export const Default: Story = () => <Footer />;
