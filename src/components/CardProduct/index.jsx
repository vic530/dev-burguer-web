import PropTypes from 'prop-types';

import { CartButton } from '../CartButton';
import { CartImage, Container } from './styles';

export const CardProduct = ({ product }) => {
  console.log(product);

  return (
    <Container>
      <CartImage src={product.url} alt={product.name} />
      <div>
        <p>{product.name}</p>
        <strong>{product.price}</strong>
      </div>
      <CartButton></CartButton>
    </Container>
  );
};

CardProduct.propTypes = {
  product: PropTypes.object,
};
