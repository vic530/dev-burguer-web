import { useNavigate, useLocation } from 'react-router-dom';

import { UserCircle, ShoppingCart } from '@phosphor-icons/react';

import { useUser } from '../../hooks/UserContext';
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
  const navigate = useNavigate();
  const { logout, userInfo } = useUser();

  const { pathname } = useLocation('/');

  function logoutUser() {
    logout();
    navigate('/login');
  }

  return (
    <Container>
      <Content>
        <Navigation>
          <div>
            <HeaderLike to="/" $isActive={pathname === '/'}>
              Home
            </HeaderLike>
            <hr></hr>
            <HeaderLike to="/cardapio" $isActive={pathname === '/cardapio'}>
              Cardápio
            </HeaderLike>
          </div>
        </Navigation>

        <Option>
          <Profiler>
            <UserCircle size={24} color="#fff" />
            <div>
              <p>
                Olá, <span>{userInfo.name}</span>
              </p>
              <Logout onClick={logoutUser}>Sair</Logout>
            </div>
          </Profiler>

          <LinkContainer>
            <ShoppingCart size={24} color="#fff" />
            <HeaderLike to="/carrinho">Carrinho</HeaderLike>
          </LinkContainer>
        </Option>
      </Content>
    </Container>
  );
};
