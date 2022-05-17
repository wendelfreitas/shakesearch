import { renderHook } from '@testing-library/react-hooks';
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

    expect(result.current.data).toEqual({
      characters: [],
      quotes: [],
      results: 0,
      sonnets: [],
      titles: [],
    });
  });
});
