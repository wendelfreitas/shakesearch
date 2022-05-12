import type { NextPage } from 'next';
import { SearchInput } from '../../components/SearchInput';
import * as S from './styles';

const Home: NextPage = () => {
  return (
    <S.Container>
      <main>
        <h1>Shakesearch</h1>

        <div>
          <SearchInput />
        </div>
      </main>

      <footer>
        <a href="https://wendel.dev" target="_blank" rel="noopener noreferrer">
          Create with ❤️ by Wendel Freitas
        </a>
      </footer>
    </S.Container>
  );
};

export default Home;
