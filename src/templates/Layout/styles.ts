import styled, { css } from 'styled-components';

export const Container = styled.div`
  padding: 0 2rem;

  main {
    min-height: 95vh;
    padding: 0.5rem 0;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  > div {
    width: 75rem;
    white-space: pre-line;

    margin: 3.5rem 0;

    b {
      align-items: center;

      svg {
        margin-right: 1rem;
      }
      &:hover {
        cursor: pointer;
      }
    }

    ${({ theme }) => css`
      font-size: ${theme.font.sizes.large};
    `}
  }
`;
