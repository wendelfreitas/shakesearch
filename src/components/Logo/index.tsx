import { useRouter } from 'next/router';
import * as S from './styles';

export type LogoProps = {
  /**
   * The direction of Logo and project's name.
   */
  direction?: 'vertical' | 'horizontal';
};

/**
 * The logo component contains image and title from the project.
 */
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
