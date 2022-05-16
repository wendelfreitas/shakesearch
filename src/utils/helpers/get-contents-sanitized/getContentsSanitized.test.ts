import { getContentsSanitized } from '.';

const MOCK_INPUT_DATA = `
 LOREM IPSUM DOLOR

 Contents
`;

const MOCK_RESPONSE_DATA = ['Contents', ''];

describe('getContentsSanitized()', () => {
  it('should return the complete works sanitized', () => {
    const data = getContentsSanitized({ data: MOCK_INPUT_DATA });

    expect(data.length).toBe(2);
    expect(data).toEqual(MOCK_RESPONSE_DATA);
  });
});
