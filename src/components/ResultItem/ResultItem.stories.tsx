import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { ResultItem, ResultItemLoading } from '.';

export default {
  title: 'Components/ResultItem',
  component: ResultItem,
} as Meta;

export const Default: Story = () => (
  <div
    style={{
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <ul style={{ padding: '3rem', maxWidth: '70%' }}>
      <ResultItem title="Sonneto 1" type="sonnets" />
    </ul>
  </div>
);

export const Loading: Story = () => (
  <div
    style={{
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <div style={{ padding: '3rem', maxWidth: '70%' }}>
      <ResultItemLoading />
    </div>
  </div>
);
