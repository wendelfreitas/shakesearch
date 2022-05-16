import { useRouter } from 'next/router';
import Layout from '../../templates/Layout';
import * as S from './styles';

const FourOhFour = () => {
  const router = useRouter();
  return (
    <Layout logoDirection="horizontal">
      <S.Wrapper>
        <h1>404</h1>
        <i>Find, or not find, that is the question.</i>
        <br />
        <b onClick={() => router.back()}>Go back home</b>
      </S.Wrapper>
    </Layout>
  );
};

export default FourOhFour;
