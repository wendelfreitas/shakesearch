import * as S from './styles';

export const Footer = () => (
  <S.Container>
    <a href="https://wendel.dev" target="_blank" rel="noopener noreferrer">
      Copyright {new Date().getFullYear()} - Created by Wendel Freitas with ❤️
    </a>
  </S.Container>
);
