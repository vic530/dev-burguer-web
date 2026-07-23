import { CategorysCarousel } from '../../components/CategorysCarousel';
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
          <div>Carrossel de Produtos</div>
        </Content>
      </Container>
    </main>
  );
};
