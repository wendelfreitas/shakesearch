import { screen } from '@testing-library/react';
import { GetServerSidePropsContext } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { renderWithTheme } from 'utils/tests/helper';
import Sonnet, { getServerSideProps } from '../../../pages/sonnets/[id]';

describe('<Sonnet/>', () => {
  it('renders component successfully', () => {
    renderWithTheme(
      <Sonnet
        sonnet={{
          id: 1,
          title: 'THE SONNET',
          content: 'LOREM IPSUM',
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
        sonnet: {
          id: number;
          title: string;
          content: string;
        };
      };
    };

    expect(props.props.sonnet.title).toBe(
      'From fairest creatures we desire increase.'
    );
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

  it('should return a notFound props when not exist sonnet with this id', async () => {
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
