import * as S from './styles';

export type LogoProps = {
  direction?: 'vertical' | 'horizontal';
};

export const Logo = ({ direction = 'vertical' }: LogoProps) => (
  <S.Container direction={direction}>
    <img
      src="/img/hamlet.png"
      alt="An Hamlet icon image"
      width={300}
      height={200}
    />
    <h1>Shakesearch</h1>
  </S.Container>
);
