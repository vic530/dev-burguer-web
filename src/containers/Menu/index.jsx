import { useEffect, useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { CardProduct } from '../../components/CardProduct';
import { api } from '../../services/api';
import { formatPrice } from '../../utils/formatPrice';
import {
  Container,
  Banner,
  CategorysMenu,
  ProductsContainer,
  CategorysButtons,
  HomeButton,
} from './styles';

export const Menu = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  const navigate = useNavigate();

  const { search } = useLocation();

  const queryParams = new URLSearchParams(search);

  const [activeCategory, setActiveCategory] = useState(() => {
    const categoryId = +queryParams.get('categoria');

    if (categoryId) {
      return categoryId;
    }

    return 0;
  });

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

  const filteredProducts = useMemo(() => {
    if (activeCategory === 0) {
      return products;
    }
    return products.filter((product) => product.category_id === activeCategory);
  }, [products, activeCategory]);

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
          <CategorysButtons
            key={category.id}
            $isActiveCategory={activeCategory === category.id}
            onClick={() => {
              navigate(
                {
                  pathname: '/cardapio',
                  search: `?categoria=${category.id}`,
                },
                {
                  replace: true,
                },
              );
              setActiveCategory(category.id);
            }}
          >
            {category.name}
          </CategorysButtons>
        ))}
      </CategorysMenu>
      <ProductsContainer>
        {filteredProducts.map((product) => (
          <CardProduct product={product} key={product.id} />
        ))}
      </ProductsContainer>
      <HomeButton
        onClick={() => {
          navigate({
            pathname: '/',
          });
        }}
      >
        <p>&lt; Voltar</p>
      </HomeButton>
    </Container>
  );
};
