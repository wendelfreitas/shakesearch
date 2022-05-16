import { Logo } from '../../components/Logo';
import { Footer } from '../../components/Footer';
import * as S from './styles';

type LayoutProps = {
  children: React.ReactNode;
  logoDirection?: 'horizontal' | 'vertical';
};

const Sonnets = ({ children, logoDirection = 'vertical' }: LayoutProps) => {
  return (
    <S.Container>
      <main>
        <S.Wrapper>
          <Logo direction={logoDirection} />
          {children}
        </S.Wrapper>
      </main>

      <Footer />
    </S.Container>
  );
};

export default Sonnets;
