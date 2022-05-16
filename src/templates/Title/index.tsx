import { ArrowLeft } from '@styled-icons/bootstrap/ArrowLeft';
import Layout from '../../templates/Layout';
import { TitlePageProps } from 'pages/titles/[id]';
import { useRouter } from 'next/router';
import { Pagination } from '../../components/Pagination';

const Title = ({ work, pagination }: TitlePageProps) => {
  const router = useRouter();

  return (
    <Layout logoDirection="horizontal">
      <h1>{work.title}</h1>
      <div>
        <b onClick={() => router.back()}>
          <ArrowLeft size={20} /> Back
        </b>
        <br />
        <br />
        {work.content}
      </div>
      <br />
      <Pagination
        current={pagination.current}
        total={pagination.total}
        onPreviousPage={() =>
          router.push(`/titles/${work.id}?page=${pagination.current - 1}`)
        }
        onNextPage={() =>
          router.push(`/titles/${work.id}?page=${pagination.current + 1}`)
        }
      />
    </Layout>
  );
};

export default Title;
