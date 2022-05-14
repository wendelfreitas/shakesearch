import styled, { css } from 'styled-components';

export const Container = styled.footer`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;
  margin-top: 1rem;

  ${({ theme }) => css`
    a {
      color: ${theme.colors.primary};
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  `}
`;
