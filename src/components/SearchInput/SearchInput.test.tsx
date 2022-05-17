import { renderHook } from '@testing-library/react-hooks';
import { screen } from '@testing-library/react';
import { SearchInput } from '.';
import { renderWithTheme } from 'utils/tests/helper';
import { useKeyDown } from 'hooks/use-key-down';
import userEvent from '@testing-library/user-event';

/**
 * Remove this workaround when @test-library/react-hooks renderHook functions update to React 18.
 */
const originalError = console.error;
beforeAll(() => {
  console.error = (...args) => {
    if (
      /Warning: ReactDOM.render is no longer supported in React 18./.test(
        args[0]
      )
    ) {
      return;
    }
    originalError.call(console, ...args);
  };
});

afterAll(() => {
  console.error = originalError;
});

describe('<SearchInput />', () => {
  it('renders component successfully', () => {
    renderWithTheme(<SearchInput />);
    const placeholder = screen.getByPlaceholderText(
      'Search for sonnets, characters, titles and more...'
    );

    expect(placeholder).toBeInTheDocument();
  });

  it('should dispatch a function when user tap ESC', async () => {
    const onEsc = jest.fn();
    renderWithTheme(<SearchInput />);

    renderHook(() =>
      useKeyDown({
        onEsc,
      })
    );

    userEvent.keyboard('{Escape}', {});

    expect(onEsc).toBeCalled();
  });

  it('should put value when user type in input', async () => {
    renderWithTheme(<SearchInput />);

    const placeholder = screen.getByPlaceholderText(
      'Search for sonnets, characters, titles and more...'
    );

    userEvent.type(placeholder, 'hamlet');

    const input = screen.getByTestId('input');

    expect(input).toBeInTheDocument();
    expect(input).toHaveValue('hamlet');
  });

  it('should render close icon when user type in input', async () => {
    renderWithTheme(<SearchInput />);

    const placeholder = screen.getByPlaceholderText(
      'Search for sonnets, characters, titles and more...'
    );

    userEvent.type(placeholder, 'hamlet');

    const input = screen.getByTestId('close-icon');

    expect(input).toBeInTheDocument();
  });

  it('should render the tutorial content', async () => {
    renderWithTheme(<SearchInput />);

    const container = screen.getByText('SHIFT + TAB');

    expect(container).toBeInTheDocument();
  });
});
