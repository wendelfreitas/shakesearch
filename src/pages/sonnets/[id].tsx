import type { GetServerSideProps } from 'next';
import Sonnet from 'templates/Sonnet';
import data from 'utils/database';
import { getContentsSanitized } from 'utils/helpers/get-contents-sanitized';
import { getSonnets } from 'utils/helpers/get-sonnets';

type SonnetQueryParam = {
  id: string;
};

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

export const getServerSideProps: GetServerSideProps<
  { [key: string]: unknown },
  SonnetQueryParam
> = async ({ params }) => {
  const { id } = params!;

  if (!id) {
    return {
      notFound: true,
    };
  }

  try {
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
  } catch (error) {
    return {
      notFound: true,
    };
  }
};

export default SonnetPage;
