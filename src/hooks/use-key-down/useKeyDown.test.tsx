import { renderHook } from '@testing-library/react-hooks';
import { useKeyDown } from '.';
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

describe('useKeyDown', () => {
  it('should dispatch a function when user tap ESC', async () => {
    const onEsc = jest.fn();

    renderHook(() =>
      useKeyDown({
        onEsc,
      })
    );

    userEvent.keyboard('{Escape}', {});

    expect(onEsc).toBeCalled();
  });
});
