import Cart from '../../assets/cart.svg';
import { ContainerButton } from './styles';

export const CartButton = ({ ...props }) => {
  return (
    <ContainerButton {...props}>
      <img src={Cart} alt="carrinho-de-compras" />
    </ContainerButton>
  );
};
