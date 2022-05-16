import { screen } from '@testing-library/react';
import { GetServerSidePropsContext } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { renderWithTheme } from 'utils/tests/helper';
import Sonnets, { getServerSideProps } from '../../../pages/sonnets';

describe('<Sonnets/>', () => {
  it('renders component successfully', () => {
    renderWithTheme(
      <Sonnets
        sonnets={[
          {
            id: 1,
            title: 'THE SONNET',
            content: 'LOREM IPSUM',
          },
        ]}
        pagination={{
          current: 1,
          total: 2,
        }}
      />
    );
    const title = screen.getByText('THE SONNET');

    expect(title).toBeInTheDocument();
  });

  it('should return a pagination and a sonnets array in getServerSideProps', async () => {
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
        sonnets: [
          {
            id: number;
            title: string;
          }
        ];
      };
    };

    expect(props.props.pagination.current).toBe(1);
    expect(props.props.sonnets.length).toBe(10);
  });

  it('should return a default page 1', async () => {
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
  });
});
