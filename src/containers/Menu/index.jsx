import { useEffect, useState } from 'react';

import { CardProduct } from '../../components/CardProduct';
import { api } from '../../services/api';
import { formatPrice } from '../../utils/formatPrice';
import {
  Container,
  Banner,
  CategorysMenu,
  ProductsContainer,
  CategorysButtons,
} from './styles';

export const Menu = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('/categories');

      const newCategories = [{ id: 0, name: 'Todos' }, ...data];

      setCategories(newCategories);
    }

    async function loadProducts() {
      const { data } = await api.get('/products');

      const newProducts = data.map((product) => ({
        currencyValue: formatPrice(product.price),
        ...product,
      }));

      setProducts(newProducts);
    }

    loadCategories();
    loadProducts();
  }, []);

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
      <CategorysMenu>
        {categories.map((category) => (
          <CategorysButtons key={category.id}>{category.name}</CategorysButtons>
        ))}
      </CategorysMenu>
      <ProductsContainer>
        {products.map((product) => (
          <CardProduct product={product} key={product.id} />
        ))}
      </ProductsContainer>
    </Container>
  );
};
