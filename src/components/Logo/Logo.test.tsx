import { screen } from '@testing-library/react';
import { Logo } from '.';
import { renderWithTheme } from 'utils/tests/helper';
import { useRouter } from 'next/router';
import userEvent from '@testing-library/user-event';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

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

  it('should go to / when click in name or logo', () => {
    const push = jest.fn();

    (useRouter as jest.Mock).mockImplementation(() => ({
      push,
    }));

    renderWithTheme(<Logo />);
    const title = screen.getByText('Shakesearch');

    userEvent.click(title);

    expect(push).toHaveBeenCalledWith('/');
  });
});
