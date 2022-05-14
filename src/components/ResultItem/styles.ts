import styled, { css } from 'styled-components';

export const Item = styled.li`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 6rem;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  margin: 0.5rem 0;

  ${({ theme }) => css`
    border-radius: ${theme.border.radius.large};

    svg {
      color: ${theme.colors.evidence};
    }

    &:hover {
      cursor: pointer;
      background: ${theme.colors.tertiary};
      outline: none;
    }

    &:focus {
      outline: 1px solid ${theme.colors.primary};
    }

    font-size: ${theme.font.sizes.small};
  `}

  > div {
    display: flex;
    align-items: center;

    > div {
      margin-left: 1rem;
    }
  }
`;

export const ItemLoading = styled.div`
  ${({ theme }) => css`
    border-radius: ${theme.border.radius.large};
  `}

  height: 6rem;
  width: 100%;
  background: #f6f7f8;
  background-image: linear-gradient(
    to right,
    #f6f7f8 0%,
    #edeef1 20%,
    #f6f7f8 40%,
    #f6f7f8 100%
  );
  background-repeat: no-repeat;
  -webkit-animation-duration: 1s;
  -webkit-animation-fill-mode: forwards;
  -webkit-animation-iteration-count: infinite;
  -webkit-animation-name: placeholderShimmer;
  -webkit-animation-timing-function: linear;
  animation: placeholderShimmer 1s linear infinite forwards;
  @keyframes placeholderShimmer {
    0% {
      background-position: -40rem 0;
    }
    100% {
      background-position: 40rem 0;
    }
  }
`;
