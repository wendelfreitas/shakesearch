import { renderHook, act } from '@testing-library/react-hooks';
import { useSearch } from '.';

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

describe('useSearch', () => {
  it('should call api when user call search function', async () => {
    const { result, waitFor } = renderHook(() => useSearch());

    await waitFor(() => !!result.current);

    expect(result.current.isLoading).toBeFalsy();

    act(() => {
      result.current.search('term');
    });

    expect(result.current.isLoading).toBeTruthy();
  });

  it('should call set loading to false when finish request', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useSearch());

    act(() => {
      result.current.search('term');
    });

    await waitForNextUpdate();

    expect(result.current.isLoading).toBeFalsy();
  });

  it('should not call api when query string length is less than three', async () => {
    const { result } = renderHook(() => useSearch());

    act(() => {
      result.current.search('t3');
    });

    expect(result.current.isLoading).toBeFalsy();
  });
});
