import { getTitles } from '.';

const MOCK_INPUT_DATA = [
  'Contents',
  'THE SONNETS',
  'ALL’S WELL THAT ENDS WELL',
  'THE SONNETS',
];

const MOCK_RESPONSE_DATA = [
  { id: 0, title: 'The Sonnets' },
  { id: 1, title: 'All’s Well That Ends Well' },
];

describe('getTitles()', () => {
  it('should return all titles from file', () => {
    const titles = getTitles({ lines: MOCK_INPUT_DATA });

    expect(titles.length).toBe(2);
    expect(titles).toEqual(MOCK_RESPONSE_DATA);
  });
});
