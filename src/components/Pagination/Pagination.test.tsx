import { screen } from '@testing-library/react';
import { Pagination } from '.';
import { renderWithTheme } from 'utils/tests/helper';
import userEvent from '@testing-library/user-event';

describe('<Pagination />', () => {
  it('renders default component', () => {
    const onPreviousPage = jest.fn();
    const onNextPage = jest.fn();

    renderWithTheme(
      <Pagination
        current={1}
        total={2}
        onPreviousPage={onPreviousPage}
        onNextPage={onNextPage}
      />
    );
    const previous = screen.getByText('< Previous');
    const next = screen.getByText('Next >');

    expect(previous).toBeInTheDocument();
    expect(next).toBeInTheDocument();
  });

  it('should call onPreviousPage when user clicks in Previous button', () => {
    const onPreviousPage = jest.fn();
    const onNextPage = jest.fn();

    renderWithTheme(
      <Pagination
        current={2}
        total={2}
        onPreviousPage={onPreviousPage}
        onNextPage={onNextPage}
      />
    );
    const previous = screen.getByText('< Previous');

    userEvent.click(previous);

    expect(onPreviousPage).toBeCalled();
  });

  it('should call onNextPage when user clicks in Next button', () => {
    const onPreviousPage = jest.fn();
    const onNextPage = jest.fn();

    renderWithTheme(
      <Pagination
        current={1}
        total={2}
        onPreviousPage={onPreviousPage}
        onNextPage={onNextPage}
      />
    );
    const next = screen.getByText('Next >');

    userEvent.click(next);

    expect(onNextPage).toBeCalled();
  });

  it('should not call onPreviousPage when user clicks in Previous button and user is in first page', () => {
    const onPreviousPage = jest.fn();
    const onNextPage = jest.fn();

    renderWithTheme(
      <Pagination
        current={1}
        total={2}
        onPreviousPage={onPreviousPage}
        onNextPage={onNextPage}
      />
    );
    const previous = screen.getByText('< Previous');

    userEvent.click(previous);

    expect(onPreviousPage).not.toBeCalled();
  });

  it('should not call onNextPage when user clicks in Next button and user is in last page', () => {
    const onPreviousPage = jest.fn();
    const onNextPage = jest.fn();

    renderWithTheme(
      <Pagination
        current={2}
        total={2}
        onPreviousPage={onPreviousPage}
        onNextPage={onNextPage}
      />
    );
    const next = screen.getByText('Next >');

    userEvent.click(next);

    expect(onNextPage).not.toBeCalled();
  });
});
