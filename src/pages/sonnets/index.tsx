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
  pagination: {
    total: number;
    current: number;
  };
};

const SonnetsPage = ({ sonnets, pagination }: SonnetsPageProps) => {
  return <Sonnets sonnets={sonnets} pagination={pagination} />;
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const page = Number(query.page || 1);
  try {
    const lines = getContentsSanitized({ data });
    const sonnets = getSonnets({ lines: lines.filter(Boolean) });

    return {
      props: {
        sonnets: paginate(sonnets, 10, page),
        pagination: {
          current: page,
          total: Math.ceil(sonnets.length / 10),
        },
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};

export default SonnetsPage;
