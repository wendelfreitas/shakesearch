import { ArrowLeft } from '@styled-icons/bootstrap/ArrowLeft';
import Layout from '../../templates/Layout';
import { TitlePageProps } from 'pages/titles/[id]';
import { useRouter } from 'next/router';

const Title = ({ work }: TitlePageProps) => {
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
    </Layout>
  );
};

export default Title;
