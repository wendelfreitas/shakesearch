import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { SearchInput } from '.';

export default {
  title: 'Components/SearchInput',
  component: SearchInput,
} as Meta;

export const Default: Story = () => (
  <div
    style={{
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <div style={{ padding: '3rem', maxWidth: '70%' }}>
      <SearchInput />
    </div>
  </div>
);
