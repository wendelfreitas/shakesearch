type GetContentsSanitizedProps = {
  /**
   * The complete works string.
   */
  data: string;
};

/**
 * Return the complete works string sanitized and in array.
 */
export const getContentsSanitized = ({ data }: GetContentsSanitizedProps) => {
  const sanitized = data.split(/\r?\n/).map((line) => line.trim());

  const contents = sanitized.splice(sanitized.indexOf('Contents'));

  return contents;
};
