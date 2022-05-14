import { getSonnets } from '.';

const MOCK_INPUT_DATA = [
  'Contents',
  'THE SONNETS',
  '1',
  'From fairest creatures we desire increase,',
  'That thereby beauty’s rose might never die,',
  'But as the riper should by time decease,',
  'His tender heir might bear his memory:',
  'But thou contracted to thine own bright eyes,',
  'Feed’st thy light’s flame with self-substantial fuel,',
  'Making a famine where abundance lies,',
  'Thy self thy foe, to thy sweet self too cruel:',
  'Thou that art now the world’s fresh ornament,',
  'And only herald to the gaudy spring,',
  'Within thine own bud buriest thy content,',
  'And, tender churl, mak’st waste in niggarding:',
  'Pity the world, or else this glutton be,',
  'To eat the world’s due, by the grave and thee.',
  '2',
  'Love’s fire heats water, water cools not love.',
];

const MOCK_RESPONSE_DATA = [
  {
    id: 1,
    index: 0,
    title: 'From fairest creatures we desire increase.',
    content:
      'From fairest creatures we desire increase,\n' +
      'That thereby beauty’s rose might never die,\n' +
      'But as the riper should by time decease,\n' +
      'His tender heir might bear his memory:\n' +
      'But thou contracted to thine own bright eyes,\n' +
      'Feed’st thy light’s flame with self-substantial fuel,\n' +
      'Making a famine where abundance lies,\n' +
      'Thy self thy foe, to thy sweet self too cruel:\n' +
      'Thou that art now the world’s fresh ornament,\n' +
      'And only herald to the gaudy spring,\n' +
      'Within thine own bud buriest thy content,\n' +
      'And, tender churl, mak’st waste in niggarding:\n' +
      'Pity the world, or else this glutton be,\n' +
      'To eat the world’s due, by the grave and thee.',
  },
  {
    id: 2,
    index: 1,

    title: 'Love’s fire heats water. water cools not love.',
    content: 'Love’s fire heats water, water cools not love.',
  },
];

describe('getSonnets()', () => {
  it('should return the list of sonnets', () => {
    const sonnets = getSonnets({ lines: MOCK_INPUT_DATA });

    expect(sonnets.length).toBe(2);
    expect(sonnets).toEqual(MOCK_RESPONSE_DATA);
  });
});
