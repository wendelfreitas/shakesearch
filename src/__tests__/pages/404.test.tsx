import { screen } from '@testing-library/react';
import Page404 from '../../pages/404';
import { renderWithTheme } from 'utils/tests/helper';

describe('<FourOhFour />', () => {
  it('should render page 404 title', () => {
    renderWithTheme(<Page404 />);
    const title = screen.getByText('404');

    expect(title).toBeInTheDocument();
  });
});
