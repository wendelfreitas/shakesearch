import type { GetServerSideProps } from 'next';
import Title from 'templates/Title';
import data from 'utils/database';
import { getContentsSanitized } from 'utils/helpers/get-contents-sanitized';
import { getWorks } from 'utils/helpers/get-works';
import { paginate } from 'utils/helpers/paginate';

export type TitlePageProps = {
  work: {
    id: number;
    title: string;
    content: string;
  };
  pagination: {
    current: number;
    total: number;
  };
};

const TitlePage = ({ work, pagination }: TitlePageProps) => {
  return <Title work={work} pagination={pagination} />;
};

export const getServerSideProps: GetServerSideProps<{
  [key: string]: unknown;
}> = async ({ params, query }) => {
  const { id } = params!;
  const page = Number(query.page || 1);

  if (!id) {
    return {
      notFound: true,
    };
  }

  const lines = getContentsSanitized({ data });
  const work = getWorks({ lines }).find((title) => title.id === Number(id));

  if (!work) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      work: {
        ...work,
        content: paginate(work?.content, 50, page).join('\n'),
      },
      pagination: {
        current: page,
        total: Math.ceil(work?.content.length / 50),
      },
    },
  };
};

export default TitlePage;
