import { screen } from '@testing-library/react';
import Home from 'pages';
import { renderWithTheme } from 'utils/tests/helper';

describe('<Home />', () => {
  it('renders component successfully', () => {
    renderWithTheme(<Home />);
    const title = screen.getByText('Shakesearch');

    expect(title).toBeInTheDocument();
  });
});
