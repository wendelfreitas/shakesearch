import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helper';
import Layout from '.';

describe('<Layout />', () => {
  it('renders component successfully', () => {
    renderWithTheme(
      <Layout>
        <p>Hello World</p>
      </Layout>
    );
    const title = screen.getByText('Shakesearch');

    expect(title).toBeInTheDocument();
  });

  it('should render work title', () => {
    renderWithTheme(
      <Layout>
        <p>Hello World</p>
      </Layout>
    );
    const title = screen.getByText('Hello World');

    expect(title).toBeInTheDocument();
  });
});
