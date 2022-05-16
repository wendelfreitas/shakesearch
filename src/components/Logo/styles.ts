import styled, { css, DefaultTheme } from 'styled-components';
import { LogoProps } from '.';

const modifiers = {
  vertical: (theme: DefaultTheme) => css`
    display: flex;
    align-items: center;
    flex-direction: column;

    img {
      width: 20rem;
      margin-bottom: 1.5rem;
    }

    h1 {
      font-size: ${theme.font.sizes.huge};
    }
  `,
  horizontal: (theme: DefaultTheme) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;

    margin-bottom: 5rem;

    img {
      width: 10rem;

      &:hover {
        cursor: pointer;
      }
    }

    h1 {
      font-size: ${theme.font.sizes.large};
      &:hover {
        cursor: pointer;
      }
    }
  `,
};

export const Container = styled.div<LogoProps>`
  ${({ theme, direction }) => css`
    ${modifiers[direction!](theme)}
  `}
`;
