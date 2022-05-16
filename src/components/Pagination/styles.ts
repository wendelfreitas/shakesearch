import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
  `}
`;

export const PreviousButton = styled.span<{ disabled: boolean }>`
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }

  ${({ theme, disabled }) =>
    disabled &&
    css`
      color: ${theme.colors.primary};

      &:hover {
        cursor: not-allowed;
        text-decoration: none;
      }
    `}
`;

export const NextButton = PreviousButton;
