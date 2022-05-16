import { getWorks } from '../get-works';

type GetCharactersProps = {
  /**
   * The complete works array of line strings.
   */
  lines: string[];
};

export type Character = {
  id: number;
  titleId: number;
  name: string;
  title: string;
};

export const getCharacters = ({ lines }: GetCharactersProps) => {
  const works = getWorks({ lines });
  let characters: Character[] = [];

  works.forEach((work) => {
    const personaes = work?.content
      .map((line) => (line ? line : 'null'))
      .splice(work?.content.indexOf('Dramatis Personæ') + 2);

    const personas = personaes
      ?.splice(0, personaes.indexOf('null'))
      .map((character, index) => ({
        id: index + 1,
        index,
        title: work.title
          .toLowerCase()
          .split(' ')
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' '),
        titleId: work.id,
        name: character
          .toLowerCase()
          .split(' ')
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' '),
      }));

    characters = [...characters, ...personas];
  });

  return characters.map((character, index) => ({
    ...character,
    index,
  }));
};
