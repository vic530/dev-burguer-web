import { CategorysCarousel } from '../../components/CategorysCarousel';
import { OffersCarousel } from '../../components/OffersCarousel';
import { Banner, Container } from './styles';

export const Home = () => {
  return (
    <main>
      <Banner>
        <h1>Bem-vindo(a) !</h1>
      </Banner>
      <Container>
        <div>
          <CategorysCarousel />
          <OffersCarousel />
        </div>
      </Container>
    </main>
  );
};
