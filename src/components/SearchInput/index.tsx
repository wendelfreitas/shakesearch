import { ChangeEvent, useState } from 'react';
import { Search } from '@styled-icons/ionicons-outline/Search';
import { Close } from '@styled-icons/evil/Close';

import { ResultItem, ResultItemLoading } from '../../components/ResultItem';
import { useKeyDown } from '../../hooks/use-key-down';
import { useSearch } from '../../hooks/use-search';
import * as S from './styles';
import { useRouter } from 'next/router';

export const SearchInput = () => {
  const { isLoading, search, data } = useSearch();
  const router = useRouter();

  const [value, setValue] = useState('');
  const isSearchEmpty = value.length < 3;

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

  const IsLoading = () =>
    isLoading ? (
      <>
        <ResultItemLoading />
        <br />
        <ResultItemLoading />
      </>
    ) : null;

  return (
    <S.Container>
      <S.InputContainer>
        <div>
          <Search size={30} />
          <input
            value={value}
            placeholder="Search for sonnets, characters, titles and more..."
            onChange={handleSearchOnChange}
          />
        </div>
        {!isSearchEmpty && <Close size={25} />}
      </S.InputContainer>
      <hr />

      {!isSearchEmpty && isLoading && (
        <S.ResultsContainer>
          <IsLoading />
        </S.ResultsContainer>
      )}

      {!isSearchEmpty && !isLoading && data.results > 0 && (
        <S.ResultsContainer>
          {!!data.titles.length && (
            <S.ItemGroup>
              <p>Titles</p>
              {data.titles.map((item, index) => (
                <ResultItem
                  key={index}
                  {...item}
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
                  {...sonnet}
                  key={index}
                  subtitle={`${sonnet.content.substring(0, 70)} ...`}
                  onClick={() => router.push(`/sonnets/${sonnet.id}`)}
                />
              ))}
            </S.ItemGroup>
          )}
        </S.ResultsContainer>
      )}

      {!isSearchEmpty && !isLoading && data.results === 0 && (
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
