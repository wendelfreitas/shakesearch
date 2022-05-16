import { getTitles } from '../get-titles';

type GetWorksProps = {
  /**
   * The complete works array of line strings.
   */
  lines: string[];
};

export const getWorks = ({ lines }: GetWorksProps) => {
  const titles = getTitles({ lines: lines.filter(Boolean) });

  const getTitlesInUpperCase = [...titles].map((line) => {
    const name =
      line.title.toUpperCase() === 'THE TRAGEDY OF ANTONY AND CLEOPATRA'
        ? 'ANTONY AND CLEOPATRA'
        : line.title.toUpperCase();

    return name;
  });
  const copy = [...lines];
  const works = copy.slice(copy.indexOf('1') - 2);

  const getWorks = getTitlesInUpperCase.map((title, index) => {
    const end = getTitlesInUpperCase[index + 1]
      ? getTitlesInUpperCase[index + 1]
      : 'FINIS';

    return {
      id: index + 1,
      title,
      content: works.slice(works.indexOf(title), works.lastIndexOf(end)),
    };
  });

  return getWorks;
};
