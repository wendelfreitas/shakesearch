type GetSonnets = {
  /**
   * The complete works array of line strings.
   */
  lines: string[];
};

export const getSonnets = ({ lines }: GetSonnets) => {
  const positions = [...lines]
    .slice(
      lines.lastIndexOf('1'),
      lines.indexOf('Love’s fire heats water, water cools not love.')
    )
    .map((line, index) => (!isNaN(Number(line)) ? String(index) : null))
    .filter(Boolean);

  const sonnets = positions.map((position, index) => {
    const hasNext = !isNaN(Number(positions[index + 1]));
    const getLastPhraseIndex = lines.indexOf(
      'Love’s fire heats water, water cools not love.'
    );

    const start = hasNext
      ? Number(position)
      : Number(positions[positions.length - 1]);
    const end = hasNext ? Number(positions[index + 1]) : getLastPhraseIndex + 1;

    return lines
      .slice(lines.lastIndexOf('1'), getLastPhraseIndex + 1)
      .map((line) => (!isNaN(Number(line)) ? Number(line) : line))
      .slice(start + 1, end);
  });

  return sonnets.map((sonnet, index) => ({
    id: index + 1,
    title: String(sonnet[0]).trim().replace(',', '.'),
    content: sonnet.join('\n'),
  }));
};
