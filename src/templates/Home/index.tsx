import type { NextPage } from 'next';
import Layout from '../../templates/Layout';
import { SearchInput } from '../../components/SearchInput';

const Home: NextPage = () => {
  return (
    <Layout>
      <div>
        <SearchInput />
      </div>
    </Layout>
  );
};

export default Home;
