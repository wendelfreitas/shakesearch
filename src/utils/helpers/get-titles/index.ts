type GetTitlesProps = {
  /**
   * The complete works array of line strings.
   */
  lines: string[];
};

export const getTitles = ({ lines }: GetTitlesProps) => {
  const titles = [...lines]
    .splice(lines.indexOf('Contents') + 1, lines.lastIndexOf('THE SONNETS'))
    .map((title) =>
      title
        .toLowerCase()
        .split(' ')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
    );
  return titles;
};