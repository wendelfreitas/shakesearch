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

    img {
      width: 10%;
    }

    h1 {
      font-size: ${theme.font.sizes.large};
    }
  `,
};

export const Container = styled.div<LogoProps>`
  ${({ theme, direction }) => css`
    ${modifiers[direction!](theme)}
  `}
`;
