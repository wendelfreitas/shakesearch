import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 2rem;

  main {
    min-height: 100vh;
    padding: 4rem 0;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    > div {
      width: 45%;
      margin-top: 2rem;
    }
  }
`;
