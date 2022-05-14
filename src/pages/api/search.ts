import type { NextApiRequest, NextApiResponse } from 'next';
import { getContentsSanitized } from 'utils/helpers/get-contents-sanitized';
import { getTitles } from 'utils/helpers/get-titles';
import { getSonnets } from 'utils/helpers/get-sonnets';
import { Document } from 'flexsearch';
import path from 'path';
import fs from 'fs';

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

  sonnets.forEach((sonnets) => {
    document.add(sonnets);
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
    fs.readFile('./completeworks.txt', 'utf8', (err, data) => {
      const lines = getContentsSanitized({ data });
      console;
      const titles = getTitles({ lines });
      const sonnets = getSonnets({ lines });

      const document = new Document({
        tokenize: 'forward',
        document: {
          id: 'index',
          index: ['type', 'title'],
        },
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
        titles: getTitlesBySearch,
        sonnets: getSonnetsBySearch,
        results: getTitlesBySearch.length + getSonnetsBySearch.length,
      });
    });
  } catch (err) {
    res.status(400).json({ error: 'Something went wrong' });
  }
}
