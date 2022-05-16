import { screen } from '@testing-library/react';
import Title from '.';
import { renderWithTheme } from 'utils/tests/helper';
import { useRouter } from 'next/router';
import userEvent from '@testing-library/user-event';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

const WORK_MOCK = {
  id: 1,
  title: 'THE SONNETS',
  content: `LOREM IPSUM DOLOR`,
};

describe('<Title />', () => {
  it('renders component successfully', () => {
    renderWithTheme(
      <Title
        work={WORK_MOCK}
        pagination={{
          current: 1,
          total: 2,
        }}
      />
    );
    const title = screen.getByText('Shakesearch');

    expect(title).toBeInTheDocument();
  });

  it('should render work title', () => {
    renderWithTheme(
      <Title
        work={WORK_MOCK}
        pagination={{
          current: 1,
          total: 2,
        }}
      />
    );
    const title = screen.getByText('THE SONNETS');

    expect(title).toBeInTheDocument();
  });

  it('should render work content', () => {
    renderWithTheme(
      <Title
        work={WORK_MOCK}
        pagination={{
          current: 1,
          total: 2,
        }}
      />
    );
    const content = screen.getByText('LOREM IPSUM DOLOR');

    expect(content).toBeInTheDocument();
  });

  it('should call router.back function', () => {
    const back = jest.fn();

    (useRouter as jest.Mock).mockImplementation(() => ({
      back,
    }));

    renderWithTheme(
      <Title
        work={WORK_MOCK}
        pagination={{
          current: 1,
          total: 2,
        }}
      />
    );
    const title = screen.getByText('Back');

    userEvent.click(title);

    expect(back).toBeCalled();
  });

  it('should call next title page when click in next button', () => {
    const push = jest.fn();

    (useRouter as jest.Mock).mockImplementation(() => ({
      push,
    }));

    renderWithTheme(
      <Title
        work={WORK_MOCK}
        pagination={{
          current: 1,
          total: 2,
        }}
      />
    );
    const next = screen.getByText('Next >');

    userEvent.click(next);

    expect(push).toHaveBeenCalledWith('/titles/1?page=2');
  });

  it('should call previous title page when click in previous button', () => {
    const push = jest.fn();

    (useRouter as jest.Mock).mockImplementation(() => ({
      push,
    }));

    renderWithTheme(
      <Title
        work={WORK_MOCK}
        pagination={{
          current: 2,
          total: 2,
        }}
      />
    );
    const previous = screen.getByText('< Previous');

    userEvent.click(previous);

    expect(push).toHaveBeenCalledWith('/titles/1?page=1');
  });
});
