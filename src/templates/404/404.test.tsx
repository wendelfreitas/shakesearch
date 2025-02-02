import { screen } from '@testing-library/react';
import FourOhFour from '.';
import { useRouter } from 'next/router';
import { renderWithTheme } from 'utils/tests/helper';
import userEvent from '@testing-library/user-event';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

describe('<FourOhFour />', () => {
  it('renders component successfully', () => {
    renderWithTheme(<FourOhFour />);
    const title = screen.getByText('Shakesearch');

    expect(title).toBeInTheDocument();
  });

  it('should render 404 page title', () => {
    renderWithTheme(<FourOhFour />);
    const title = screen.getByText('404');

    expect(title).toBeInTheDocument();
  });

  it('should call router.back function', () => {
    const back = jest.fn();

    (useRouter as jest.Mock).mockImplementation(() => ({
      back,
    }));

    renderWithTheme(<FourOhFour />);
    const title = screen.getByText('Go back home');

    userEvent.click(title);

    expect(back).toBeCalled();
  });
});
