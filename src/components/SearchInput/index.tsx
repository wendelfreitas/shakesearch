import { useState } from 'react';
import { Search } from '@styled-icons/ionicons-outline/Search';
import { ArrowUp } from '@styled-icons/bootstrap/ArrowUp';
import { ArrowDown } from '@styled-icons/bootstrap/ArrowDown';
import { Close } from '@styled-icons/evil/Close';

import * as S from './styles';

export const SearchInput = () => {
  const [value, setValue] = useState('');
  return (
    <S.Container>
      <S.InputContainer>
        <Search size={25} />
        <input
          placeholder="Search for sonetts, characters, quotes and more..."
          onChange={(e) => setValue(e.target.value)}
        />
        <Close size={25} />
      </S.InputContainer>
      <hr />
      {value.length > 0 ? (
        <S.ResultsContainer>
          <p>Quotes</p>
        </S.ResultsContainer>
      ) : (
        <S.ControlsContainer>
          <S.Control>TAB</S.Control> or{' '}
          <S.Control>
            <ArrowUp size={15} />
          </S.Control>{' '}
          <S.Control>
            <ArrowDown size={15} />
          </S.Control>{' '}
          to navigate. <S.Control>RETURN</S.Control> to select{' '}
          <S.Control>ESC</S.Control> to cancel
        </S.ControlsContainer>
      )}
    </S.Container>
  );
};
