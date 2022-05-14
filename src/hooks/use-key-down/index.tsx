import { useEffect } from 'react';
import { KEYS } from '../../utils/constants';

type UseKeyDownProps = {
  onEsc: () => void;
};

export const useKeyDown = ({ onEsc }: UseKeyDownProps) => {
  const onKeyDown = (event: KeyboardEvent) => {
    switch (event.key) {
      case KEYS.ESC:
        onEsc();
        break;
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', onKeyDown, false);

    return () => {
      document.removeEventListener('keydown', onKeyDown, false);
    };
  });
};
