import { ArrowLeft } from '@styled-icons/bootstrap/ArrowLeft';
import { SonnetsPageProps } from 'pages/sonnets';
import { useRouter } from 'next/router';
import { ResultItem } from '../../components/ResultItem';
import Layout from '../../templates/Layout';
import { Pagination } from '../../components/Pagination';

const Sonnets = ({ sonnets, pagination }: SonnetsPageProps) => {
  const router = useRouter();
  return (
    <Layout logoDirection="horizontal">
      <h1>THE SONNETS</h1>
      <div>
        <b onClick={() => router.back()}>
          <ArrowLeft size={20} /> Back
        </b>
        <br />
        <br />
        <ul>
          {sonnets.map((sonnet) => (
            <ResultItem
              key={sonnet.id}
              title={`Sonnet #${sonnet.id}`}
              subtitle={sonnet.title}
              type="sonnets"
              onClick={() => router.push(`/sonnets/${sonnet.id}`)}
            />
          ))}
        </ul>
        <br />
        <Pagination
          current={pagination.current}
          total={pagination.total}
          onPreviousPage={() =>
            router.push(`/sonnets?page=${pagination.current - 1}`)
          }
          onNextPage={() =>
            router.push(`/sonnets?page=${pagination.current + 1}`)
          }
        />
      </div>
    </Layout>
  );
};

export default Sonnets;
