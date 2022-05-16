import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  ${({ theme }) => css`
    h1 {
      font-size: calc(${theme.font.sizes.huge} * 4);
    }
  `}

  b {
    &:hover {
      text-decoration: underline;
    }
  }
`;
