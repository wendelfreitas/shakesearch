import * as S from './styles';

type PaginationProps = {
  /**
   * The current page.
   */
  current: number;
  /**
   * Total of pages number.
   */
  total: number;
  /**
   * On click to handle previous page.
   */
  onPreviousPage: () => void;
  /**
   * On click to handle next page.
   */
  onNextPage: () => void;
};

/**
 * Pagination component to organize in more than one page.
 */
export const Pagination = ({
  current,
  total,
  onPreviousPage,
  onNextPage,
}: PaginationProps) => {
  const isFirstPage = current === 1;
  const isLastPage = current === total;

  const handlePreviousPage = () => {
    if (!isFirstPage) {
      onPreviousPage();
    }
  };

  const handleNextPage = () => {
    if (!isLastPage) {
      onNextPage();
    }
  };

  return (
    <S.Container>
      <S.PreviousButton disabled={isFirstPage} onClick={handlePreviousPage}>
        {'<'} Previous
      </S.PreviousButton>
      <p>
        <b>{current}</b> of <b>{total}</b> page(s)
      </p>
      <S.NextButton disabled={isLastPage} onClick={handleNextPage}>
        Next {'>'}
      </S.NextButton>
    </S.Container>
  );
};
