import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100%;

  ${({ theme }) => css`
    background: ${theme.colors.secondary};
    border-radius: calc(${theme.border.radius.medium} * 3);
    color: ${theme.colors.primary};

    hr {
      border: 0.05rem solid #cccccc;
    }
  `}

  box-shadow: 0px 4px 12px rgba(20, 20, 20, 0.2);
`;

export const InputContainer = styled.div`
  height: 5rem;
  display: flex;
  align-items: center;
  padding: 3.5rem 3rem;
  justify-content: center;
  input {
    background: none;
    width: 100%;
    height: 2.5rem;
    border: none;
    outline: none;
    margin-right: 1rem;

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
  padding: 2rem 3rem;
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
  padding: 2rem 3rem;

  ${({ theme }) => css`
    p {
      color: #95959d;
      font-size: ${theme.font.sizes.medium};
      font-weight: 400;
    }
  `}
`;
