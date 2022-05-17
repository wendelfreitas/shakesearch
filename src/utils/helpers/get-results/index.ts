import { getContentsSanitized } from 'utils/helpers/get-contents-sanitized';
import { getTitles } from 'utils/helpers/get-titles';
import { getSonnets } from 'utils/helpers/get-sonnets';
import { Document, SimpleDocumentSearchResultSetUnit } from 'flexsearch';
import shakespeare from 'utils/database';
import { getCharacters } from 'utils/helpers/get-characters';
import { getWorks } from '../get-works';

type Row = {
  id: number;
  index: number;
  type: string;
  title?: string;
  titleId?: string;
  name?: string;
  content?: string;
  description?: string;
  author?: string;
};

let database: Row[] = [];

const document = new Document({
  tokenize: 'full',
  document: {
    id: 'index',
    index: [
      {
        field: 'type',
        tokenize: 'forward',
        optimize: true,
        resolution: 1,
      },
      {
        field: 'title',
        tokenize: 'forward',
        optimize: true,
        resolution: 2,
      },

      {
        field: 'name',
        tokenize: 'forward',
        optimize: true,
        resolution: 3,
      },

      {
        field: 'content',
        tokenize: 'strict',
        resolution: 9,
        context: {
          depth: 1,
          resolution: 9,
        },
      },
    ],
  },
});

const lines = getContentsSanitized({ data: shakespeare });

const characters = getCharacters({ lines }).map((character) => ({
  ...character,
  type: 'characters',
}));

const works = getWorks({ lines })
  .filter(Boolean)
  .map((work, index) => ({
    id: work.id,
    index,
    title: work.title,
    content: work.content.join('\n'),
    type: 'quotes',
  }));

const titles = getTitles({ lines: lines.filter(Boolean) }).map((title) => ({
  ...title,
  type: 'titles',
}));

const sonnets = getSonnets({ lines: lines.filter(Boolean) }).map((sonnet) => ({
  id: sonnet.id,
  index: sonnet.index,
  title: sonnet.title,
  description: sonnet.content,
  type: 'sonnets',
}));

database = [...titles, ...characters, ...sonnets, ...works];

const data = database.map((any, index) => ({
  ...any,
  index,
}));

data.forEach((content) => {
  document.add(content);
});

export function getResults(term: string): {
  characters: Row[];
  quotes: Row[];
  titles: Row[];
  sonnets: Row[];
  results: number;
} {
  const documents = document.search(String(term));

  if (documents.length) {
    const getResults = documents.map(
      (result: SimpleDocumentSearchResultSetUnit) => result.result
    );

    const ids = Array.from(new Set(getResults.flat()));

    const results = database.filter((_, index) => ids.includes(index));

    return {
      characters: results.filter((result) => result.type === 'characters'),
      titles: results.filter((result) => result.type === 'titles'),
      sonnets: results.filter((result) => result.type === 'sonnets'),
      quotes: results.filter((result) => result.type === 'quotes'),
      results: results.length,
    };
  } else {
    return {
      characters: [],
      titles: [],
      quotes: [],
      sonnets: [],
      results: 0,
    };
  }
}
