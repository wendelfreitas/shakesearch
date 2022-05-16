import { useRouter } from 'next/router';
import * as S from './styles';

export type LogoProps = {
  direction?: 'vertical' | 'horizontal';
};

export const Logo = ({ direction = 'vertical' }: LogoProps) => {
  const router = useRouter();
  const styles = {
    vertical: {
      width: 300,
      height: 200,
    },
    horizontal: {
      width: 350,
      height: 100,
    },
  };

  const handleRedirect = () => {
    router.push('/');
  };

  return (
    <S.Container direction={direction}>
      <img
        src="/img/hamlet.png"
        alt="An Hamlet icon image"
        width={styles[direction].width}
        height={styles[direction].height}
        onClick={handleRedirect}
      />
      <h1 onClick={handleRedirect}>Shakesearch</h1>
    </S.Container>
  );
};
