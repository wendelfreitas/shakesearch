import type { GetServerSideProps } from 'next';
import Title from 'templates/Title';
import data from 'utils/database';
import { getContentsSanitized } from 'utils/helpers/get-contents-sanitized';
import { getTitles } from 'utils/helpers/get-titles';
import { paginate } from 'utils/helpers/paginate';

type TitleQueryParams = {
  id: string;
  page: string;
};

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

export const getServerSideProps: GetServerSideProps<
  { [key: string]: unknown },
  TitleQueryParams
> = async ({ params, query }) => {
  const { id } = params!;
  const page = Number(query.page || 1);

  if (!id) {
    return {
      notFound: true,
    };
  }

  try {
    const lines = getContentsSanitized({ data });
    const titles = getTitles({ lines: lines.filter(Boolean) });

    const getTitlesInUpperCase = [...titles].map((line) => {
      const name =
        line.title.toUpperCase() === 'THE TRAGEDY OF ANTONY AND CLEOPATRA'
          ? 'ANTONY AND CLEOPATRA'
          : line.title.toUpperCase();

      return name;
    });
    const copy = [...lines];
    const works = copy.slice(copy.indexOf('1') - 2);

    const work = getTitlesInUpperCase
      .map((title, index) => {
        const end = getTitlesInUpperCase[index + 1]
          ? getTitlesInUpperCase[index + 1]
          : 'FINIS';

        return {
          id: index + 1,
          title,
          content: works.slice(works.indexOf(title), works.lastIndexOf(end)),
        };
      })
      .find((title) => title.id === Number(id));

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
  } catch (error) {
    return {
      notFound: true,
    };
  }
};

export default TitlePage;
