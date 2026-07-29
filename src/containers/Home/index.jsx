import { CategorysCarousel } from '../../components/CategorysCarousel';
import { OffersCarousel } from '../../components/OffersCarousel';
import { Banner, Container, Content } from './styles';

export const Home = () => {
  return (
    <main>
      <Banner>
        <h1>Bem-vindo(a) !</h1>
      </Banner>
      <Container>
        <Content>
          <CategorysCarousel />
          <OffersCarousel />
        </Content>
      </Container>
    </main>
  );
};
