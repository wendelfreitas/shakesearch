import { getWorks } from '.';
import { getContentsSanitized } from '../get-contents-sanitized';
import data from 'utils/database';

describe('getWorks()', () => {
  it('should return all titles from file', () => {
    const works = getWorks({ lines: getContentsSanitized({ data }) });

    expect(works.length).toBe(44);
    expect(works.slice(0, 1)[0].title).toEqual('THE SONNETS');
  });
});
