import { Container, Banner, CategorysMenu, ProductsContainer } from './styles';

export const Menu = () => {
  return (
    <Container>
      <Banner>
        <h1>
          O MELHOR
          <br />
          HAMBURGUER
          <br />
          ESTÁ AQUI
          <span>Esse cardápio está irresistivel! </span>
        </h1>
      </Banner>
      <CategorysMenu></CategorysMenu>
      <ProductsContainer></ProductsContainer>
    </Container>
  );
};
