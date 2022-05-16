import type { GetServerSideProps } from 'next';
import Sonnets from 'templates/Sonnets';
import data from 'utils/database';
import { getContentsSanitized } from 'utils/helpers/get-contents-sanitized';
import { getSonnets } from 'utils/helpers/get-sonnets';
import { paginate } from 'utils/helpers/paginate';

export type SonnetsPageProps = {
  sonnets: Array<{
    id: number;
    title: string;
    content: string;
  }>;
};

const SonnetsPage = ({ sonnets }: SonnetsPageProps) => {
  return <Sonnets sonnets={sonnets} />;
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  try {
    const lines = getContentsSanitized({ data });
    const sonnets = getSonnets({ lines: lines.filter(Boolean) });

    return {
      props: {
        sonnets: paginate(sonnets, 10, Number(query.page || 1)),
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};

export default SonnetsPage;
