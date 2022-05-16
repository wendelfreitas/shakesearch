import { KeyboardReturn } from '@styled-icons/material/KeyboardReturn';
import { KeyboardEvent } from 'react';
import { FilePaper2 } from '@styled-icons/remix-line/FilePaper2';
import { UserPin } from '@styled-icons/boxicons-regular/UserPin';
import { Mask } from '@styled-icons/entypo/Mask';
import { KEYS } from '../../utils/constants';
import * as S from './styles';

export const ResultItemLoading = () => (
  <S.ItemLoading data-testid="loading-indicator" />
);

type ResultItemProps = {
  title: string;
  subtitle?: string;
  type: 'sonnets' | 'titles' | 'characters';
  onClick?: () => void;
};

export const ResultItem = ({
  title,
  subtitle,
  type,
  onClick,
}: ResultItemProps) => {
  const onKeyDown = (event: KeyboardEvent<HTMLLIElement>) => {
    if (event.key === KEYS.ENTER) {
      onClick && onClick();
    }
  };

  const icons = {
    sonnets: <FilePaper2 size={25} />,
    titles: <Mask size={25} />,
    characters: <UserPin size={30} />,
  };

  return (
    <S.Item tabIndex={0} onClick={onClick} onKeyDown={onKeyDown}>
      <div>
        {icons[type]}
        <div>
          <b>{title}</b>
          {subtitle && <p>{subtitle}</p>}
        </div>
      </div>
      <div>
        <KeyboardReturn size={15} />
      </div>
    </S.Item>
  );
};
