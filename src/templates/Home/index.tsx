import type { NextPage } from 'next';
import { Logo } from '../../components/Logo';
import { Footer } from '../../components/Footer';
import { SearchInput } from '../../components/SearchInput';
import * as S from './styles';

const Home: NextPage = () => {
  return (
    <S.Container>
      <main>
        <S.Wrapper>
          <Logo direction="vertical" />

          <div>
            <SearchInput />
          </div>
        </S.Wrapper>
      </main>

      <Footer />
    </S.Container>
  );
};

export default Home;
