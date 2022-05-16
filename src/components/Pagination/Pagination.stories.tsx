import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Pagination } from '.';

export default {
  title: 'Components/Pagination',
  component: Pagination,
} as Meta;

export const Default: Story = () => (
  <Pagination
    current={1}
    total={2}
    onPreviousPage={() => console.log('previous page')}
    onNextPage={() => console.log('next page')}
  />
);
