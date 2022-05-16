import { ArrowLeft } from '@styled-icons/bootstrap/ArrowLeft';
import { SonnetPageProps } from 'pages/sonnets/[id]';
import { DoubleQuotesL } from '@styled-icons/remix-editor/DoubleQuotesL';
import { useRouter } from 'next/router';
import Layout from '../../templates/Layout';
import * as S from './styles';

const Sonnet = ({ sonnet }: SonnetPageProps) => {
  const router = useRouter();
  return (
    <Layout logoDirection="horizontal">
      <h1>{sonnet.title}</h1>
      <div>
        <b onClick={() => router.back()}>
          <ArrowLeft size={20} /> Back
        </b>
        <br />
        <br />
        <DoubleQuotesL size={25} />
        <S.Wrapper>{sonnet.content}</S.Wrapper>
      </div>
    </Layout>
  );
};

export default Sonnet;
