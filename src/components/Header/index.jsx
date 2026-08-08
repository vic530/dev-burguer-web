import { UserCircle, ShoppingCart } from '@phosphor-icons/react';

import {
  Container,
  Navigation,
  HeaderLike,
  Option,
  LinkContainer,
  Content,
  Logout,
  Profiler,
} from './script';

export const Header = () => {
  return (
    <Container>
      <Content>
        <Navigation>
          <div>
            <HeaderLike>Home</HeaderLike>
            <HeaderLike>Cardápio</HeaderLike>
          </div>
        </Navigation>

        <Option>
          <Profiler>
            <UserCircle size={24} color="#fff" />
            <div>
              <p>
                Olá, <span>Victor</span>
              </p>
              <Logout>Sair</Logout>
            </div>
          </Profiler>

          <LinkContainer>
            <ShoppingCart size={24} color="#fff" />
            <HeaderLike>Carrinho</HeaderLike>
          </LinkContainer>
        </Option>
      </Content>
    </Container>
  );
};
