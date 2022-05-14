import { screen } from '@testing-library/react';
import { Logo } from '.';
import { renderWithTheme } from 'utils/tests/helper';

describe('<Logo />', () => {
  it('renders default component', () => {
    renderWithTheme(<Logo />);
    const title = screen.getByText('Shakesearch');

    expect(title).toBeInTheDocument();
    expect(title).toHaveStyle('font-size: 3.2rem');
  });

  it('renders component successfully vertically', () => {
    renderWithTheme(<Logo direction="vertical" />);
    const title = screen.getByText('Shakesearch');

    expect(title).toBeInTheDocument();
    expect(title).toHaveStyle('font-size: 3.2rem');
  });

  it('renders component successfully horizontally', () => {
    renderWithTheme(<Logo direction="horizontal" />);
    const title = screen.getByText('Shakesearch');

    expect(title).toBeInTheDocument();
    expect(title).toHaveStyle('font-size: 1.8rem');
  });
});
