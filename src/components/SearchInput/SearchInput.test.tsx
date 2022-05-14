import { screen } from '@testing-library/react';
import { SearchInput } from '.';
import { renderWithTheme } from 'utils/tests/helper';

describe('<SearchInput />', () => {
  it('renders component successfully', () => {
    renderWithTheme(<SearchInput />);
    const placeholder = screen.getByPlaceholderText(
      'Search for sonnets, characters, titles and more...'
    );

    expect(placeholder).toBeInTheDocument();
  });
});
