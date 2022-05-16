import type { GetServerSideProps } from 'next';
import Sonnet from 'templates/Sonnet';
import data from 'utils/database';
import { getContentsSanitized } from 'utils/helpers/get-contents-sanitized';
import { getSonnets } from 'utils/helpers/get-sonnets';

export type SonnetPageProps = {
  sonnet: {
    id: number;
    title: string;
    content: string;
  };
};

const SonnetPage = ({ sonnet }: SonnetPageProps) => {
  return <Sonnet sonnet={sonnet} />;
};

export const getServerSideProps: GetServerSideProps<{
  [key: string]: unknown;
}> = async ({ params }) => {
  const { id } = params!;

  if (!id) {
    return {
      notFound: true,
    };
  }

  const lines = getContentsSanitized({ data });
  const sonnets = getSonnets({ lines: lines.filter(Boolean) });

  const sonnet = sonnets.find((sonnet) => sonnet.id === Number(id));

  if (!sonnet) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      sonnet,
    },
  };
};

export default SonnetPage;
