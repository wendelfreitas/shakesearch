import type { NextApiRequest, NextApiResponse } from 'next';
import { getContentsSanitized } from 'utils/helpers/get-contents-sanitized';
import { getTitles } from 'utils/helpers/get-titles';
import { getSonnets } from 'utils/helpers/get-sonnets';
import { Document, SimpleDocumentSearchResultSetUnit } from 'flexsearch';
import data from 'utils/database';
import { Character, getCharacters } from 'utils/helpers/get-characters';

type SearchCharactersProps = {
  document: Document<unknown, false>;
  characters: Character[];
  term: string;
};

type SearchTitlesProps = {
  document: Document<unknown, false>;
  titles: Array<{
    id: number;
    title: string;
  }>;
  term: string;
};

type SearchSonnetsProps = {
  document: Document<unknown, false>;
  sonnets: Array<{
    id: number;
    title: string;
    content: string;
  }>;
  term: string;
};

const searchCharacters = ({
  document,
  characters: data,
  term,
}: SearchCharactersProps) => {
  const characters = data.map((sonnet) => ({
    ...sonnet,
    type: 'characters',
  }));

  characters.forEach((character) => {
    document.add(character);
  });

  const results = document.search(String(term), 200);

  if (results.length) {
    const getResults = results.map(
      (result: SimpleDocumentSearchResultSetUnit) => result.result
    );

    const data = Array.from(new Set(getResults.flat()));

    return characters.filter((_, index) => data.includes(index));
  }

  return [];
};

const searchTitles = ({ document, titles: data, term }: SearchTitlesProps) => {
  const titles = data.map((title) => ({
    ...title,
    type: 'titles',
  }));

  titles.forEach((title) => {
    document.add(title);
  });

  const results = document.search(String(term), 100, {
    suggest: true,
  });

  if (results.length) {
    return titles.filter((_, index) => results[0].result.includes(index));
  }

  return [];
};

const searchSonnets = ({
  document,
  sonnets: data,
  term,
}: SearchSonnetsProps) => {
  const sonnets = data.map((sonnet) => ({
    ...sonnet,
    type: 'sonnets',
  }));

  sonnets.forEach((sonnet) => {
    document.add(sonnet);
  });

  const results = document.search(String(term), 200);

  if (results.length) {
    return sonnets.filter((_, index) => results[0].result.includes(index));
  }

  return [];
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const {
    query: { term },
  } = req;

  try {
    const lines = getContentsSanitized({ data });
    const characters = getCharacters({ lines });
    const titles = getTitles({ lines: lines.filter(Boolean) });
    const sonnets = getSonnets({ lines: lines.filter(Boolean) });

    const document = new Document({
      tokenize: 'forward',
      document: {
        id: 'index',
        index: ['type', 'title', 'name'],
      },
    });

    const getCharactersBySearch = searchCharacters({
      document,
      characters,
      term: String(term),
    });

    const getTitlesBySearch = searchTitles({
      document,
      titles,
      term: String(term),
    });

    const getSonnetsBySearch = searchSonnets({
      document,
      sonnets,
      term: String(term),
    });

    return res.status(200).json({
      characters: getCharactersBySearch,
      titles: getTitlesBySearch,
      sonnets: getSonnetsBySearch,
      results:
        getCharactersBySearch.length +
        getTitlesBySearch.length +
        getSonnetsBySearch.length,
    });
  } catch (err) {
    res.status(400).json({ error: 'Something went wrong' });
  }
}
