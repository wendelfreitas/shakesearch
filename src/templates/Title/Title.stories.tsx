import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Title from '.';

export default {
  title: 'Pages/Title',
  component: Title,
} as Meta;

const work = {
  id: 1,
  title: 'THE SONNETS',
  content: `LOREM IPSUM DOLOR`,
};

export const Default: Story = () => (
  <Title
    work={work}
    pagination={{
      current: 1,
      total: 1,
    }}
  />
);
