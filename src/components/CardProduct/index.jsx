import PropTypes from 'prop-types';

import { useCart } from '../../hooks/CartContext';
import { CartButton } from '../CartButton';
import { CartImage, Container } from './styles';

export const CardProduct = ({ product }) => {
  const { putProductInCart } = useCart();

  return (
    <Container>
      <CartImage src={product.url} alt={product.name} />
      <div>
        <p>{product.name}</p>
        <strong>{product.currencyValue}</strong>
      </div>
      <CartButton onClick={() => putProductInCart(product)}></CartButton>
    </Container>
  );
};

CardProduct.propTypes = {
  product: PropTypes.object,
};
