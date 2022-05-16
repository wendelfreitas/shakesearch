import { screen } from '@testing-library/react';
import Title from '.';
import { renderWithTheme } from 'utils/tests/helper';

const WORK_MOCK = {
  id: 1,
  title: 'THE SONNETS',
  content: `LOREM IPSUM DOLOR`,
};

describe('<Title />', () => {
  it('renders component successfully', () => {
    renderWithTheme(<Title work={WORK_MOCK} />);
    const title = screen.getByText('Shakesearch');

    expect(title).toBeInTheDocument();
  });

  it('should render work title', () => {
    renderWithTheme(<Title work={WORK_MOCK} />);
    const title = screen.getByText('THE SONNETS');

    expect(title).toBeInTheDocument();
  });

  it('should render work content', () => {
    renderWithTheme(<Title work={WORK_MOCK} />);
    const content = screen.getByText('LOREM IPSUM DOLOR');

    expect(content).toBeInTheDocument();
  });
});
