import styled, { css, DefaultTheme } from 'styled-components';
import { LogoProps } from '.';
import media from 'styled-media-query';

const modifiers = {
  vertical: (theme: DefaultTheme) => css`
    display: flex;
    align-items: center;
    flex-direction: column;

    img {
      width: 20rem;
      margin-bottom: 1.5rem;
    }

    ${media.lessThan('medium')`
      img {
        width: 15rem;
        height: 15rem;
        margin-bottom: 1rem;
      }
    `}

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

    ${media.lessThan('medium')`
      img {
        width: 7.5rem;
        height: 7.5rem;
        margin-bottom: 1rem;
      }
    `}

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
