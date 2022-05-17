import { ChangeEvent, useState } from 'react';
import { Search } from '@styled-icons/ionicons-outline/Search';
import { Close } from '@styled-icons/evil/Close';

import { ResultItem } from '../../components/ResultItem';
import { useKeyDown } from '../../hooks/use-key-down';
import { useSearch } from '../../hooks/use-search';
import * as S from './styles';
import { useRouter } from 'next/router';

export const SearchInput = () => {
  const { search, data } = useSearch();
  const router = useRouter();

  const [value, setValue] = useState('');
  const isSearchEmpty = value.length < 1;

  useKeyDown({
    onEsc: () => {
      setValue('');
    },
  });

  const handleSearchOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setValue(query);

    search(query);
  };

  return (
    <S.Container>
      <S.InputContainer>
        <div>
          <Search size={30} />
          <input
            name="query"
            data-testid="input"
            autoComplete="off"
            value={value}
            placeholder="Search for sonnets, characters, titles and more..."
            onChange={handleSearchOnChange}
          />
        </div>
        {!isSearchEmpty && (
          <Close
            size={25}
            data-testid="close-icon"
            onClick={() => setValue('')}
          />
        )}
      </S.InputContainer>
      <hr />

      {!isSearchEmpty && data && data.results > 0 && (
        <S.ResultsContainer>
          {!!data.titles.length && (
            <S.ItemGroup>
              <p>Titles</p>
              {data.titles.map((item, index) => (
                <ResultItem
                  key={index}
                  title={item.title!}
                  type="titles"
                  onClick={() =>
                    router.push(
                      item.title === 'The Sonnets'
                        ? '/sonnets'
                        : `/titles/${item.id}`
                    )
                  }
                />
              ))}
            </S.ItemGroup>
          )}

          {!!data.sonnets.length && (
            <S.ItemGroup>
              <p>Sonnets</p>
              {data.sonnets.map((sonnet, index) => (
                <ResultItem
                  key={index}
                  title={sonnet.title!}
                  subtitle={sonnet.description!}
                  type="sonnets"
                  onClick={() => router.push(`/sonnets/${sonnet.id}`)}
                />
              ))}
            </S.ItemGroup>
          )}

          {!!data.characters.length && (
            <S.ItemGroup>
              <p>Characters</p>
              {data.characters.map((character, index) => (
                <ResultItem
                  key={index}
                  title={character.name!}
                  subtitle={`Appears in "${character.title}"`}
                  type="characters"
                  onClick={() => router.push(`/titles/${character.titleId}`)}
                />
              ))}
            </S.ItemGroup>
          )}

          {!!data.quotes.length && (
            <S.ItemGroup>
              <p>Quotes</p>
              {data.quotes.map((quote, index) => (
                <ResultItem
                  key={index}
                  title={quote.title!}
                  subtitle={`Those worlds: (${value
                    .trim()
                    .split(' ')
                    .map((word) => `"${word}"`)
                    .join(', ')}) was found in this content.`}
                  type="quotes"
                  onClick={() => router.push(`/titles/${quote.id}`)}
                />
              ))}
            </S.ItemGroup>
          )}
        </S.ResultsContainer>
      )}

      {!isSearchEmpty && data && data.results === 0 && (
        <S.ResultsContainer>
          <S.NotFound>
            <i>Find, or not find, that is the question.</i>
            <p>No information found for the search {`"${value}"`}...</p>
          </S.NotFound>
        </S.ResultsContainer>
      )}

      {isSearchEmpty && (
        <S.ControlsContainer>
          <S.Control>TAB</S.Control> or
          <S.Control>SHIFT + TAB</S.Control> to navigate between results{' '}
          <S.Control>RETURN</S.Control> to select <S.Control>ESC</S.Control> to
          cancel
        </S.ControlsContainer>
      )}
    </S.Container>
  );
};
