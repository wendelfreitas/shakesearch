import { useState, useCallback } from 'react';
import debounce from 'lodash.debounce';
import useFetch from 'use-http';

type UseSearchResponse = {
  isLoading: boolean;
  search: (query: string) => void;
  data: {
    titles: Array<{
      id: string;
      title: string;
      type: 'titles';
    }>;
    sonnets: Array<{
      id: string;
      title: string;
      content: string;
      type: 'sonnets';
    }>;
    results: number;
  };
};

export const useSearch = (): UseSearchResponse => {
  const [isLoading, setIsLoading] = useState(false);
  const { get, data } = useFetch('http://localhost:3000', {
    cache: 'no-cache',
  });

  const search = (query: string) => {
    if (query.length >= 3) {
      setIsLoading(true);
      handleSearch(query);
    }
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleSearch = useCallback(
    debounce(async (query) => {
      await get(`api/search?term=${query}`);

      setIsLoading(false);
    }, 600),
    []
  );

  return {
    isLoading,
    search,
    data,
  };
};
