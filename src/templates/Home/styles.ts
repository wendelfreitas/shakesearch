import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 2rem;

  main {
    min-height: 95vh;
    padding: 4rem 0;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  > div {
    width: 45%;
    margin-top: 3.5rem;
  }
`;
