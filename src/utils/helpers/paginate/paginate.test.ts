import { paginate } from '.';

describe('paginate()', () => {
  it('should return the array paginated', () => {
    const data = paginate([1, 2, 3, 4, 5], 2, 1);

    expect(data.length).toBe(2);
    expect(data).toEqual([1, 2]);
  });
});
