import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100%;

  ${({ theme }) => css`
    background: ${theme.colors.secondary};
    border-radius: calc(${theme.border.radius.medium} * 3);
    color: ${theme.colors.primary};

    hr {
      border: 0.05rem solid ${theme.colors.tertiary};
    }
  `}

  box-shadow: 0px 4px 12px rgba(20, 20, 20, 0.2);
`;

export const InputContainer = styled.div`
  height: 5rem;
  display: flex;
  align-items: center;
  padding: 3.5rem 2.5rem;
  justify-content: space-between;
  flex-direction: row;

  > div {
    display: flex;
    width: 100%;
  }
  input {
    background: none;
    width: 100%;
    height: 3rem;
    border: none;
    outline: none;

    ${({ theme }) => css`
      font-size: ${theme.font.sizes.large};
      font-family: 'Poppins';

      &::placeholder {
        font-weight: 300;
      }
    `}
  }

  svg {
    margin-right: 1rem;
  }
`;

export const ControlsContainer = styled.div`
  padding: 2rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
  `}
`;

export const Control = styled.div`
  display: inline;
  ${({ theme }) => css`
    background: ${theme.colors.primary};
    color: ${theme.colors.white};
    padding: 0.5rem 1.25rem;
    border-radius: calc(${theme.border.radius.medium} * 1);
    font-size: ${theme.font.sizes.small};
  `}
`;

export const ResultsContainer = styled.div`
  padding: 2rem 1.5rem;
  max-height: 30rem;
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 1px;
  }

  ${({ theme }) => css`
    ::-webkit-scrollbar-thumb {
      background: ${theme.colors.primary};
      border-radius: 10px;
    }
  `}
`;

export const ItemGroup = styled.ul`
  ${({ theme }) => css`
    > p {
      color: ${theme.colors.evidence};
      margin-left: 1.5rem;
      font-size: ${theme.font.sizes.medium};
      font-weight: 400;
    }
  `}
`;

export const NotFound = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};

    i {
      font-size: ${theme.font.sizes.medium};
    }
  `}
`;
