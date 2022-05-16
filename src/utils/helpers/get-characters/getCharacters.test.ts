import { getCharacters } from '.';
import { getContentsSanitized } from '../get-contents-sanitized';
import data from 'utils/database';

const MOCK_RESPONSE_DATA = [
  {
    id: 1,
    index: 0,
    title: 'All’s Well That Ends Well',
    titleId: 2,
    name: 'King Of France.',
  },
];

describe('getCharacters()', () => {
  it('should return all characters from file', () => {
    const characters = getCharacters({ lines: getContentsSanitized({ data }) });

    const minified = characters.slice(0, 1);

    expect(minified.length).toBe(1);
    expect(minified).toEqual(MOCK_RESPONSE_DATA);
  });
});
