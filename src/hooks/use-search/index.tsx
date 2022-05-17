import { useState, useCallback } from 'react';
import debounce from 'lodash.debounce';
import useFetch from 'use-http';
import { Character } from '../../utils/helpers/get-characters';
import { getResults } from 'utils/helpers/get-results';

type Data = {
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
  characters: Character[];
  quotes: Array<{
    id: string;
    title: string;
    author: string;
    type: 'quotes';
  }>;
  results: number;
};

type Row = {
  id: number;
  index: number;
  type: string;
  title?: string;
  titleId?: string;
  description?: string;
  name?: string;
  content?: string;
  author?: string;
};

type UseSearchResponse = {
  search: (query: string) => void;
  data: {
    characters: Row[];
    quotes: Row[];
    titles: Row[];
    sonnets: Row[];
    results: number;
  };
};

export const useSearch = (): UseSearchResponse => {
  const [data, setData] = useState<{
    characters: Row[];
    quotes: Row[];
    titles: Row[];
    sonnets: Row[];
    results: number;
  }>({
    titles: [],
    sonnets: [],
    quotes: [],
    characters: [],
    results: 0,
  });

  const search = (query: string) => {
    const data = getResults(query);

    setData(data);
  };

  return {
    search,
    data,
  };
};
