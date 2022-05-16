import { screen } from '@testing-library/react';
import { ResultItem, ResultItemLoading } from '.';
import { renderWithTheme } from 'utils/tests/helper';
import userEvent from '@testing-library/user-event';

describe('<ResultItem />', () => {
  it('renders component successfully', () => {
    renderWithTheme(<ResultItem title="THE SONNET" type="sonnets" />);
    const title = screen.getByText('THE SONNET');

    expect(title).toBeInTheDocument();
  });

  it('renders loading component successfully', () => {
    renderWithTheme(<ResultItemLoading />);
    const loading = screen.getByTestId('loading-indicator');

    expect(loading).toBeInTheDocument();
  });

  it('should dispatch onClick when user taps enter', () => {
    const onClick = jest.fn();

    renderWithTheme(
      <ResultItem title="THE SONNET" type="sonnets" onClick={onClick} />
    );
    userEvent.tab();

    userEvent.keyboard('{Enter}');

    expect(onClick).toBeCalled();
  });

  it('should not dispatch onClick when user taps enter if onClick doesnt exist', () => {
    const onClick = jest.fn();

    renderWithTheme(<ResultItem title="THE SONNET" type="sonnets" />);
    userEvent.tab();

    userEvent.keyboard('{Enter}');

    expect(onClick).not.toBeCalled();
  });

  it('should not dispatch if user taps any other key', () => {
    const onClick = jest.fn();

    renderWithTheme(
      <ResultItem title="THE SONNET" type="sonnets" onClick={onClick} />
    );

    userEvent.tab();

    userEvent.keyboard('{Shift}');

    expect(onClick).not.toBeCalled();
  });
});
