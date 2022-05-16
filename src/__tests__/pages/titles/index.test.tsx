import { screen } from '@testing-library/react';
import { GetServerSidePropsContext } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { renderWithTheme } from 'utils/tests/helper';
import Title, { getServerSideProps } from '../../../pages/titles/[id]';

describe('<Title/>', () => {
  it('renders component successfully', () => {
    renderWithTheme(
      <Title
        work={{
          id: 1,
          title: 'THE SONNETS',
          content: 'LOREM IPSUM',
        }}
        pagination={{
          current: 1,
          total: 2,
        }}
      />
    );
    const title = screen.getByText('THE SONNETS');

    expect(title).toBeInTheDocument();
  });

  it('should return a pagination and a work object in getServerSideProps', async () => {
    const context = {
      params: {
        id: '1',
        page: '1',
      } as ParsedUrlQuery,
      query: {
        page: '1',
      } as ParsedUrlQuery,
      req: {},
    };

    const props = (await getServerSideProps(
      context as unknown as GetServerSidePropsContext
    )) as {
      props: {
        pagination: {
          current: number;
        };
        work: {
          title: string;
        };
      };
    };

    expect(props.props.pagination.current).toBe(1);
    expect(props.props.work.title).toBe('THE SONNETS');
  });

  it('should return a  default page 1', async () => {
    const context = {
      params: {
        id: '1',
      } as ParsedUrlQuery,
      query: {} as ParsedUrlQuery,
      req: {},
    };

    const props = (await getServerSideProps(
      context as unknown as GetServerSidePropsContext
    )) as {
      props: {
        pagination: {
          current: number;
        };
        work: {
          title: string;
        };
      };
    };

    expect(props.props.pagination.current).toBe(1);
    expect(props.props.work.title).toBe('THE SONNETS');
  });

  it('should return a notFound props when not exist id param', async () => {
    const context = {
      params: {
        page: '1',
      } as ParsedUrlQuery,
      query: {
        page: '1',
      } as ParsedUrlQuery,
      req: {},
    };

    const props = (await getServerSideProps(
      context as unknown as GetServerSidePropsContext
    )) as {
      notFound: boolean;
    };

    expect(props.notFound).toBeTruthy();
  });

  it('should return a notFound props when not exist work with this id', async () => {
    const context = {
      params: {
        id: 'NOT EXIST',
        page: '1',
      } as ParsedUrlQuery,
      query: {
        page: '1',
      } as ParsedUrlQuery,
      req: {},
    };

    const props = (await getServerSideProps(
      context as unknown as GetServerSidePropsContext
    )) as {
      notFound: boolean;
    };

    expect(props.notFound).toBeTruthy();
  });
});
