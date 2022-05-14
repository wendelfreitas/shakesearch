import { KeyboardReturn } from '@styled-icons/material/KeyboardReturn';
import { KeyboardEvent } from 'react';
import { FilePaper2 } from '@styled-icons/remix-line/FilePaper2';
import { Mask } from '@styled-icons/entypo/Mask';
import { KEYS } from '../../utils/constants';
import * as S from './styles';

export const ResultItemLoading = () => <S.ItemLoading />;

type ResultItemProps = {
  title: string;
  subtitle?: string;
  type: 'sonnets' | 'titles';
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
