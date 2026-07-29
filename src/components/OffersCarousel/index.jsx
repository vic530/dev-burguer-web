import { useEffect, useState } from 'react';
import * as CarouselModule from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { api } from '../../services/api';
import { ContainerItems, Title, Container } from './styles';
const Carousel = CarouselModule.default?.default || CarouselModule.default;

export const OffersCarousel = () => {
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      const { data } = await api.get('/products');

      const onlyOffers = data.filter((product) => product.offer);

      setOffers(onlyOffers);
    }

    loadProducts();
  }, []);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 690 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 690, min: 0 },
      items: 2,
    },
  };

  console.log(Carousel);

  return (
    <Container>
      <Title>Ofertas do Dia</Title>

      <Carousel
        responsive={responsive}
        infinite={true}
        partialVisbile={false}
        itemClass="carousel-item"
      >
        {offers.map((product) => (
          <ContainerItems key={product.id} imageUrl={product.url}>
            <span>{product.name}</span>
          </ContainerItems>
        ))}
      </Carousel>
    </Container>
  );
};
