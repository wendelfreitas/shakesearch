import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Layout from '.';

export default {
  title: 'Pages/Layout',
  component: Layout,
} as Meta;

export const Default: Story = () => (
  <Layout>
    <p>Hello Storybook</p>
  </Layout>
);
